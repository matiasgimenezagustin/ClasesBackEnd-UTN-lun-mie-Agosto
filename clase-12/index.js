const express = require('express')
const {productos, findProductById} = require('./productos')
const { productList } = require('./productsManager')
const PORT = 9000

const app = express()

/* 
app.use(express.json())
 */


app.get('/pedido/:tipo', (req,res)=>{
    let tipo = req.params.tipo
    res.json({mensaje: 'Aqui tienes tu pizza de ' + tipo})
})

app.get('/', (req, res)=>{
    res.json({mensaje: 'hola'})
})

app.get('/api/info', (request, response) =>{
    response.send('<h1>hola</h1>')
})

app.get('/productos/:id', (req, res)=>{
    const id = req.params.id
    console.log(id)
    res.json(findProductById(id))
})

app.get('/api/products', (req, res) =>{
    const {limit} = req.query
    const products = productList.getProducts()
    if(limit){
        res.json([...products].splice(0, limit))
    }
    else{
        res.json(products)
    }
})

app.get('/saludar', (req, res)=>{
    const {nombre} =  req.query
    res.json({mensaje: 'Hola ' + nombre})
})

app.get('/api/products/:id', (req, res)=>{

    const {id} = req.params
    const productFound = productList.getProductById(id)
    if(productFound.ok){
        res.status(201).json(productFound.respuesta)
    }
    else{
        res.status(404).json({mensaje:'producto no encontrado'})
    }
})

app.listen(PORT, ()=>{
    console.log('La aplicacion esta funcionando en http://localhost:' + PORT )
})

/* 
Crear un archivo llamado productManager 
En el crear una clase con los atributos products y idCounter

crear el metodo createProduct que reciba un objeto para añadirlo al array products (crear el id autoincrementable)

crear el metodo getProductById(id) que devuelva un producto por su id

crear el metodo getProducts que devuelva todos los productos


Instanciar la clase en una variable llamada productsList y activaran el metodo createProduct almenos 3 veces para agregar 3 objetos

Crear las rutas
Get: /api/products => devuelve todos los productos
Get: /api/products/:id => devuelve el producto buscado o un mensaje de que no se encontro el producto



crea la ruta /api/user/:nombre

Si el nombre es 'pepe' o 'juan' deberas devolver un objeto con el sig formato {mensaje: 'Esta registrado'}
sino deberas devolver un objeto {mensaje: 'no esta registrado} y el status en 404


*/