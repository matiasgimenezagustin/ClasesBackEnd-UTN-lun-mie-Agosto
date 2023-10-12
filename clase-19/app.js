const express =  require('express')
const session = require('express-session')
const mongoose =  require('mongoose')
const hbs = require("hbs")
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
dotenv.config()


const app = express()

//Middleweres

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))

const session_params ={
    secret: 'keySecret',
    resave: false,
    saveUnitialized: true,
    cookie: {secure: false}
}
app.use(session(session_params))

//Configurando Handlebars

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

//MongoDB/Mongoose config 
const ADMIN_USERNAME = process.env.ADMIN_USERNAME
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
const DB_NAME = 'eCommerceUTN_Noche_LM'

let original_password = process.env.ADMIN_PASSWORD

let hashedPassword


bcrypt.genSalt(10, (err, salt) =>{
    if(err){
        console.log("Hubo un error al generar la sal")
    }
    else{
        bcrypt.hash(original_password, salt, (err, hash) =>{
            if(err){
                console.log('hubo un error al hashear la contraseña')
            }
            else{
                hashedPassword = hash
                console.log('Su contraseña ha sido hasheada correctamente:', hashedPassword)
            }
            
        })
    }
})

const verificarContraseña = async (password) =>{ //REVISAR
    let isCorrect
    await bcrypt.compare(password, hashedPassword, (err, result) =>{
        if(err){
            isCorrect = false
            console.log('hola')
        }
        else if(result){
            isCorrect = true
        }
        else{
            isCorrect = false
        }
    })
    console.log(isCorrect)
    return isCorrect
}





const DB_PASSWORD = process.env.DB_PASSWORD
const URL_CONNECTION = `mongodb+srv://matu_dev:${DB_PASSWORD}@cluster0.xyjacy2.mongodb.net/${DB_NAME}`

mongoose.connect(URL_CONNECTION, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
const database = mongoose.connection;

database.on('error', () =>{
    console.log('Error al conectarse a MongoDB')
})
database.once('open', () =>{
    console.log('Conectado a MongoDB')
})

const User = mongoose.model('User', {
    username: String, 
    password: String
})

const Producto = mongoose.model('Producto', {
    precio: Number, 
    nombre: String,
    stock: Number,
    descripcion: String
})

//Endpoints:


app.get('/', (req, res) =>{
    if(req.session.user){
        res.render('home', {user: req.session.user, isAdmin: req.session.isAdmin})
    }else{
        res.render('login')
    }
})


/* 

Quiero una vista en /products/new:

Va a tener un formulario donde podre cargar un producto
este producto debe tener un nombre, stock, precio, descripcion
al cargar el producto se guardara en la DB

Solamente puede acceder el administrador, si no sos administrador te redireccionara a una pagina de error
en /error

*/



app.get('/login', (req, res) =>{
    res.render('login')
})

app.get('/error', (req, res) => {
    res.render('error')
})

app.post('/login', async (req, res)=>{
    const {username, password} = req.body
    if(username ==  ADMIN_USERNAME && verificarContraseña(password)){
        req.session.isAdmin = true
        req.session.user = {username: 'administrador'}
        return res.redirect('/')
    }
    const user =  await User.findOne({username}) //busca en la db al usuario con este username
    if(user){
        req.session.isAdmin = false
        req.session.user = user
        res.redirect('/')
    }else{
        res.render('login', {error:'Credenciales invalidas' })
    }
})

app.get('/register', (req, res) =>{
    res.render('register')
})

app.post('/register', async (req, res) =>{
    const {username, password} = req.body
    const usuarioExistente =  await User.findOne({username})
    if(usuarioExistente){
        res.render('register', {error: 'El nombre de usuario ya esta siendo utilizado'})
    }else{
        const newUser = new User({username, password})
        await newUser.save()
        res.redirect('/login')
    }
})

app.get('/logout', (req, res) =>{
    req.session.destroy()
    res.redirect('/')
})

console.log(process.env.PORT)
const PORT = process.env.PORT || 7070
app.listen(PORT, () =>{
    console.log(`Su servidor se esta ejecutando en http://localhost:${PORT}/`)
})


/* Como autoresetar con HBS */