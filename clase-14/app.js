/* ENSEÑAR NODEMON */
const express = require('express')
const cors = require('cors')
const PORT = 8080
const app = express()

const routerProducts = require('./router/routerProducts')
app.use('/api/products', routerProducts)
app.use(cors())
app.use(express.json()) /* Habilita pasar JSON */



app.listen(PORT, ()=>{
    console.log(`El servidor se esta alojando en http://localhost:${PORT}/`)
})