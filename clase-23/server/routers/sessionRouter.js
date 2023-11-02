const express = require('express')
const { createUser } = require('../dao/controllers/userController')
const sessionRouter = express.Router()

sessionRouter.post('/', async (req, res) =>{
    const {nombre, email, contrasena} = req.body
    const newUser = await createUser({nombre, email, contrasena})
    if(newUser){
        res.status(200).json({ok: true, content: 'usuario creado con exito'})
    }
})


module.exports = sessionRouter