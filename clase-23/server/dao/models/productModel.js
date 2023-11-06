const mongoose = require('mongoose')

const Product = mongoose.model('product', {
    nombre: String,
    precio: Number, 
    stock: Number,
    descripcion: String,
    thumbnail: String,
})

module.exports = Product