const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const productRouter = require('./routers/productRouter')

dotenv.config()


const mongoose = require('./config/dbConfig')


const app = express()

const PORT = process.env.PORT || 8080


app.use(express.static(path.join(__dirname + '/public')))

app.use(express.urlencoded({extended: true}))

app.use('/api/products', productRouter)





app.listen(PORT, () =>{
    console.log(`El servidor se estsa escuchando en: http://localhost:${PORT}/`)
})