const products =[
    {
        name: 'tv samsung 42"',
        price: 300000,
        stock: 5,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam incidunt non expedita sequi provident unde adipisci. Iure, at ipsum non, odit corporis nemo quia atque animi eius fuga beatae?',
        id: 1
    },
    {
        name: 'tv phillips 32"',
        price: 200000,
        stock: 2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam incidunt non expedita sequi provident unde adipisci. Iure, at ipsum non, odit corporis nemo quia atque animi eius fuga beatae?',
        id: 2
    },
]

const getAllProducts = () => {
    return products
}

const getProductById = (id) => {

}

const deleteProductById = (id) =>{
    let posProductoBuscado = products.findIndex(product => product.id === Number(id))
    products.splice(posProductoBuscado, 1)
}
const updateStockById = (id, stock) =>{
    const productToUpdate = products.find(product => product.id === Number(id))
    productToUpdate.stock =  stock
    
}



module.exports = { getAllProducts, deleteProductById, updateStockById}