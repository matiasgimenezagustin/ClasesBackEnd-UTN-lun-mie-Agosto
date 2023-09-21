const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { login } = require('./loginManager')
const PORT = 8080

const app = express()

//Middleware


app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, response) =>{
    
    response.json({mensaje: 'pepe'})
})
app.post('/', (req, res)=>{
    const {username, password} = req.body
    const user = {username, password}
    const isRealUser = login(user)
    if(isRealUser){
        res.status(200).json({ok:true, mensaje: 'Usuario logueado correctamente'})
    }
    else{
        res.status(404).json({ok: false, mensaje: 'Usuario no encontrado'})
    }
    
})


app.listen(PORT, ()=>{
    console.log('El servidor esta escuchando en http://localhost:' + PORT + '/')
})

/* Cuando entre a mi aplicacion deberia mandarme un h1 que diga bienvenido
/
*/