/* Las importaciones */
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const productRouter = require('./routers/productRouter')
const sessionRouter = require('./routers/sessionRouter')

/* Configuraciones */
dotenv.config()
const mongoose = require('./config/dbConfig')
const app = express()
const PORT = process.env.PORT || 8080

/* Middleweres */
app.use(cors())
app.use(express.static(path.join(__dirname + '/public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

/* Routers */
app.use('/api/products', productRouter)
app.use('/session', sessionRouter)




app.listen(PORT, () =>{
    console.log(`El servidor se estsa escuchando en: http://localhost:${PORT}/`)
})