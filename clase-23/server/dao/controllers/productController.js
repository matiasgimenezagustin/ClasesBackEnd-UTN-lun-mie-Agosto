const Product = require("../models/productModel")


/* Funcion para controlar la creacion de un producto */
const createProduct  = async (product) =>{
    const newProduct = new Product(product)
    try{
        return await  newProduct.save()
    }catch(err){
        console.error(err)
    }
}

const getProducts = () => {

}


module.exports = {createProduct, getProducts}