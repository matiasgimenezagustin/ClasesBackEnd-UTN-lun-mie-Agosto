const express = require('express')
const hbs = require('hbs')
const formRouter = require('./routers/formRouter')


const app = express()

const PORT = 900

app.use(express.static(__dirname + '/public'))

/* Middlewere para permitir que se puedan procesar los formularios en los cuerpos de las solcitudes */
app.use(express.urlencoded({extended: false}))

//Configuarar el Motor de plantillas

app.set('view engine', 'hbs')
app.set('view', __dirname + '/views')


app.use('/formulario', formRouter)

app.listen(PORT, ()=>{
    console.log('El servidor se esta escuchando en: http://localhost:' + PORT )
})