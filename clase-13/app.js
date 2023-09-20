const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 8080

const app = express()

//Middleware

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, response) =>{
    
    response.json({mensaje: 'pepe'})
})
app.post('/', (req, res)=>{
    console.log(req.body.mensaje)
    console.log('me enviaron algo')
    res.json({mensaje: 'gracias por el dato'})
})


app.listen(PORT, ()=>{
    console.log('El servidor esta escuchando en http://localhost:' + PORT + '/')
})

/* Cuando entre a mi aplicacion deberia mandarme un h1 que diga bienvenido
/
*/