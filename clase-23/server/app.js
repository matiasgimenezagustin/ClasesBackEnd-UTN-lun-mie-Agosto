const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const app = express()

dotenv.config()

const PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname + '/public')))







app.listen(PORT, () =>{
    console.log(`El servidor se estsa escuchando en: http://localhost:${PORT}/`)
})