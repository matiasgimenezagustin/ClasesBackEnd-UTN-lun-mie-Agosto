const express = require('express')
const { createProduct, getProducts } = require('../dao/controllers/productController')
const productRouter =  express.Router()

productRouter.get('/', (req, res) => {
    res.json({ok: true, products: []})
})
productRouter.post('/', async (req, res) =>{
    const {nombre, precio, stock, descripcion}= req.body
    await createProduct({nombre, precio, stock, descripcion})
    res.json({ok:true, products: getProducts()})
})



module.exports  = productRouter