const express = require('express')

const formRouter = express.Router()

formRouter.get('/', (req, res) =>{
    res.render('formulario')
})

module.exports = formRouter