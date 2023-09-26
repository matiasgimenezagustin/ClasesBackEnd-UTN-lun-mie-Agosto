const express = require('express')
const { getAllProducts, deleteProductById, updateStockById } = require('../database/productsManager')

const router = express.Router() 


router.get('/', (req, res) =>{
    res.json({ok: true, products: getAllProducts()})
})

router.delete('/:id', (req, res) =>{
    const {id} = req.params
    deleteProductById(id)
    res.json({ok: true, message: 'Producto eliminado', products: getAllProducts()})
})

router.put('/:id/:stock', (req, res) =>{
    const {id, stock} = req.params

    updateStockById(id, stock)
    res.json({ok: true, message: 'Producto actualizado', products: getAllProducts()})
})

module.exports = router