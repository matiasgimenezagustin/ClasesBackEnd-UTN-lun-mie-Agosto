const express = require('express')

const formRouter = express.Router()

formRouter.get('/', (req, res) =>{
    res.render('formulario')
})
formRouter.post('/', (req, res) =>{
    const {nombre, email, mensaje} =  req.body
    if(!nombre || nombre === ' ' || !email || !mensaje){
        res.render('formulario', {error: 'No puedes enviar campos vacios'})
    }
    else{
        res.render('mensajeExitoso')
    }
    
})

module.exports = formRouter