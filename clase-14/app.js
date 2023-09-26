/* ENSEÑAR NODEMON */
const express = require('express')
const cors = require('cors')
const PORT = 8080
const app = express()


/* Middleweres */
app.use(cors())
app.use(express.json()) /* Habilita pasar JSON */


const routerProducts = require('./router/routerProducts')
app.use('/api/products', routerProducts)



app.get('/', (req, res) =>{
    res.send('<h1 style="color: red;">Try it now</h1>')
})

app.listen(PORT, ()=>{
    console.log(`El servidor se esta alojando en http://localhost:${PORT}/`)
})
