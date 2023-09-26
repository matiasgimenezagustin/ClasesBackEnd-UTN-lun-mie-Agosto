const express = require('express')
const { getAllProducts } = require('../database/productsManager')

const router = express.Router() 


router.get('/', (req, res) =>{
    res.json({ok: true, products: getAllProducts()})
})

module.exports = router