const express = require('express')
const cors = require('cors')
const PORT = 8080
const hbs = require('hbs')
const { getAllProducts, getProductById } = require('./managers/productManager')


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



app.get('/products', (req, res) =>{
    res.render('products', {products: getAllProducts(), message: 'hola'})
})

app.get('/products/:id', (req, res) =>{
    const {id} = req.params
    /* Obtener el id del req.params y buscar el producto. una vez encontrado, darselo al archivo handlebars */
    res.render('detail', {product: getProductById(id)})
})
app.listen(PORT, () => {
    console.log(`El servidor se esta runeando en http://localhost:${PORT}/`);
});