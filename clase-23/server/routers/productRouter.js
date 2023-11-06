const express = require('express')
const { createProduct, getProducts, deleteProduct, getProductById } = require('../dao/controllers/productController')
const productRouter =  express.Router()

productRouter.get('/', async (req, res) => {
    res.json({ok: true, products: await getProducts()})
})

productRouter.post('/', async (req, res) =>{
    const {nombre, precio, stock, descripcion, thumbnail} = req.body
    await createProduct({nombre, precio, stock, descripcion, thumbnail})
    res.json({ok:true, products: await getProducts()})
})

productRouter.delete('/:pid', async(req, res) =>{
    const {pid} = req.params
    let result = await deleteProduct(pid)
    if(result.ok){
        return res.status(200).json(
            {
                ok: true, 
                products: await getProducts(), 
                deleteProduct: result.deletedProduct
            }
        )
    }
    else{
        return res.status(404).json({ok: false, error: result.error})
    }
})

productRouter.get('/:pid', async (req, res) =>{
    const {pid} = req.params

    let product = await getProductById(pid)
    if(product){
        res.status(200).json({ok: true, product})
    }
    else{
        res.status(404).json({ok: false, error: 'product not found'})
    }
})

/* NO FAIL NO GAINS */
/* crea un endpoint que sesa :pid y de tipo get. Al hacer un get nos devolvera el producto con el pid igual al pasado por params o un 'product not found' con status 404

Crear la funcion controladora getById

formato de repsuesta:

{ok: (si esta bien es true sino es false), product: }
*/


module.exports  = productRouter