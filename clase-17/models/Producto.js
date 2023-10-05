const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
    titulo: String,
    precio: Number, 
    descripcion: String,
    stock: Number,
})

const Producto = mongoose.model('Producto', productoSchema)

module.exports = Producto