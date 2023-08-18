"use strict";
/*
Practica de POO con TS

Generar la class Product
Propiedades:
title: string
price: number
stock: number
id: string


Generar la class Cart
Propiedades:
cart: Product[]
id: number

Generar una clase llamada CartManager:
Propiedades:
-carts (empieza como arr vacio) : Cart[]
-id (0)

Metodos:

createCart() => creara un carrito con las propiedades cart (empieza como array vacio) y id (cada nuevo carrito debera tener un id distinto)

getCartById(cid) => recibira un cartId y devolvera el carrito buscado sino devuelve null

addProductCart(cid, product, quantity) => recibira un cartId y un product : Product y una cantidad : number,
Si el producto ya existe en el carrito:

-Incrementara la quantity del producto ya existente por la quantity pasada por parametro

Sino:

-Agregara la propiedad quantity a el product y a ese product lo agregara al array del carrito cuyo id sea identico al cid pasado por parametro.

getTotalCart(cid) => recibira un cartId y devolvera un total numerico que sera la suma de todos los precios por la cantidad en la prop cart Product[]


*/
class Product {
    constructor(title, price, stock, id) {
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.id = id;
        this.quantity = 0;
    }
}
class Cart {
    constructor(id) {
        this.cart = [];
        this.id = id;
    }
    isInCart(id) {
        return this.cart.some((product) => product.id === id);
    }
    addProduct(product) {
        this.cart.push(product);
    }
    getProductById(pid) {
        return this.cart.find((product) => product.id === pid) || null;
    }
}
class CartManager {
    constructor() {
        this.carts = [];
        this.id = 0;
    }
    createCart() {
        this.carts.push(new Cart(this.id++));
    }
    getCartById(cid) {
        const cartFound = this.carts.find((cart) => cart.id === cid);
        return cartFound || null;
    }
    addProductCart(cid, product, quantity) {
        /* El carrito al que queremos agregar el producto existe */
        if (this.getCartById(cid)) {
            /* Yo ya se que el carrito existe */
            this.carts = this.carts.map((cartManager) => {
                if (cartManager.id === cid) {
                    if (cartManager.isInCart(product.id)) {
                        /* Logica para aumentar la cantidad del producto */
                        cartManager.cart = cartManager.cart.map((currentProduct) => {
                            if (currentProduct.id === product.id) {
                                currentProduct.quantity += quantity;
                            }
                            return currentProduct;
                        });
                    }
                    else {
                        /* Logica para agregar el producto al array cart */
                        product.quantity = quantity;
                        cartManager.addProduct(product);
                    }
                }
                return cartManager;
            });
        }
    }
    modificar(cid, product, quantity) {
        const cartFound = this.getCartById(cid);
        if (cartFound) {
            const productToUpdate = cartFound === null || cartFound === void 0 ? void 0 : cartFound.getProductById(product.id);
            if (productToUpdate) {
                productToUpdate.quantity += quantity;
            }
            else {
                product.quantity = quantity;
                cartFound.addProduct(product);
            }
        }
    }
}
const managerCarts = new CartManager();
managerCarts.createCart();
managerCarts.createCart();
console.log(managerCarts.getCartById(9));
managerCarts.addProductCart(0, new Product('Gaseosa', 500, 4, 1), 3);
managerCarts.addProductCart(0, new Product('Gaseosa', 500, 4, 1), 3);
managerCarts.addProductCart(0, new Product('Bici', 500, 4, 2), 3);
managerCarts.addProductCart(0, new Product('lata', 500, 4, 3), 3);
managerCarts.modificar(0, new Product('auto', 500, 4, 4), 2);
managerCarts.modificar(0, new Product('auto', 500, 4, 4), 2);
console.log(managerCarts.carts[0].cart);
/*
addProductCart(cid: number, product: Product, quantity: number): void {
    const cart = this.getCartById(cid)
   
    if (cart) {
        const existingProduct = cart.cart.find(item => item.id === product.id)
        if (existingProduct) {
            existingProduct.stock += quantity
        } else {
            product.stock = quantity
            cart.cart.push(product)
        }
    }
}
*/ 
