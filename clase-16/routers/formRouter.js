const express = require('express')

const formRouter = express.Router()

formRouter.get('/', (req, res) =>{
    res.render('formulario')
})
formRouter.post('/', (req, res) =>{
    console.log(req.body.nombre)
    console.log('alguien envio un mensaje')
    res.render('mensajeExitoso')
})

module.exports = formRouter