const productos = [
    {
        nombre: "Pera",
        precio: 500,
        id:1
    },
    {
        nombre: "Manzana",
        precio: 400,
        id:2
    },
    {
        nombre: "Durazno",
        precio: 600,
        id:3
    }
]
const findProductById = (id) =>{
    const productFound = productos.find(producto => producto.id == id)
    if(productFound){
        return productFound
    }
    else{
        return {mensaje: 'Producto no encontrado'}
    }
}
module.exports = {productos, findProductById}