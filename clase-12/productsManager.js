class ProductManager {
    constructor(){
        this.products = []
        this.idCounter = 0
    }
    createProduct(product){
        this.products.push({...product, id: this.idCounter++})
        console.log('Producto creado!')
    }
    getProducts(){
        return this.products
    }
    getProductById(id){
        const productFound = this.products.find(product => product.id === Number(id))
        if(productFound){
            return {ok:true, respuesta:productFound}
        }
        else{
            return {ok: false}
        }
    }
}

const productList = new ProductManager()
productList.createProduct({nombre: 'manzana', precio: 200})
productList.createProduct({nombre: 'pera', precio: 400})
module.exports = {productList}