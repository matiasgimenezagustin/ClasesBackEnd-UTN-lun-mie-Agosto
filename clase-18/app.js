const express =  require('express')
const session = require('express-session')
const mongoose =  require('mongoose')
const hbs = require("hbs")


const PORT = 7070
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

const DB_NAME = 'eCommerceUTN_Noche_LM'
const DB_PORT = 27017
const DB_ADRESS = '127.0.0.1'
const URL_CONNECTION = `mongodb://${DB_ADRESS}:${DB_PORT}/${DB_NAME}`

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

//Endpoints:


app.get('/', (req, res) =>{
    if(req.session.user){
        res.render('home', {user: req.session.user})
    }else{
        res.render('login')
    }
})

app.get('/login', (req, res) =>{
    res.render('login')
})

app.get('/register', (req, res) =>{
    res.render('register')
})


app.listen(PORT, () =>{
    console.log(`Su servidor se esta ejecutando en http://localhost:${PORT}/`)
})