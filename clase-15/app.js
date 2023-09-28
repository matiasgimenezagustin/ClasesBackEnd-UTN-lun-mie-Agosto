const express = require('express')
const cors = require('cors')
const PORT = 8080
const hbs = require('hbs')

const app = express()

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))


app.get("/hola", (req, res) => {
    res.send(`
        <h1>Hola, como estas?</h1>
        <img src='/imagenes/messi.webp' width='200px'>
        <script src='/js/script.js'></script>
    `);
});


app.get('/login', (req, res) =>{
    res.render('login')
})

const products = [
    {
        nombre: 'samsung tv 45"',
        price: 450,
        id: 1
    },
    {
        nombre: 'samsung tv 32"',
        price: 400,
        id: 2
    },
]

app.get('/products', (req, res) =>{
    res.render('products', {products})
})

app.get('/products/:id', (req, res) =>{
    res.render('detail')
})
app.listen(PORT, () => {
    console.log(`El servidor se esta runeando en http://localhost:${PORT}/`);
});