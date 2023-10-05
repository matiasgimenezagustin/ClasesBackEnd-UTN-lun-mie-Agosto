const express = require('express')
const nodemailer = require('nodemailer')

const formRouter = express.Router()

formRouter.get('/', (req, res) =>{
    res.render('formulario')
})
formRouter.post('/', async (req, res) =>{
    const {nombre, email, mensaje} =  req.body
    if(!nombre || nombre === ' ' || !email || !mensaje){
        return res.render('formulario', {error: 'No puedes enviar campos vacios'})
    }
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'justus45@ethereal.email',
            pass: 'XuKm2gP56C9Y52f5kU'
        }
    });

    /* Configuracion del formato */

    const mailOptions = {
        from: email,
        to: 'cosme.fulanito@gmail',
        subject: 'formulario de prueba',
        text: `
        Nombre: ${nombre}\n
        Mensaje: ${mensaje}
        `
    }
    try{
        //accion a ejecutar
        await transporter.sendMail(mailOptions)
        res.render('mensajeExitoso')

    }
    catch(error){
        res.render('formulario', {error: 'Error al enviar el mensaje'})
    }
})

module.exports = formRouter