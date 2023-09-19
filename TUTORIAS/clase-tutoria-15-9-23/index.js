class ProductManager {
    constructor(name, price, stock, category){
        this.idCounter = 0
        this.name = name
        this.price = price
    }
}

const producto1 = new ProductManager('zanahoria', 600)
console.log(producto1)
class CartManager {
    cart = []
    idCounter = 0
    addProduct(product){
        //Recibe un producto y agrega una cantidad al producto de 1
    }
    deleteProductById(id){
        //filter  product.id != id
    }
    updateProduct(id, cantidad){
        //agrega a la cantidad de un producto una x cantidad
    }
    getTotal(){
        //foreach
    }
    isInCart(id){
        //devuelve un booleano
        this.cart.some(product => product.id === id)
    }
    filterByPrice(max, min){
        product.price > min && product.price < max
    }
    filterByCategory(category){

    }
}

/* Desarrollar las sig clases ProductManager y cart manager 
Recuerda que CartManager tendra una serie de metodos
*/

const cart1 = new CartManager()
cart1.addProduct(producto1)