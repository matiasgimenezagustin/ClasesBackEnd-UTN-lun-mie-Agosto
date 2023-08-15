
/* 

let nombre : string = 'Pepe' 

const edades : number[] = [30, 25, 60]

const nombres : string[] = ['pepe', 'juan']

const persona : {nombre: string, apellido: string} = {nombre: 'Juancito', apellido: 'Carrazo'}

const decirTipoDeDato = (dato : any) : void =>{
    console.log('El tipo de dato es: ' + typeof dato)
}

decirTipoDeDato(3)
decirTipoDeDato('hola')
decirTipoDeDato(false) */

//contarHasta : recibe un numero y muestra por consola los numeros que hay de 0 hasta el numero recibido

//calcularIva : recibe un precio y devuelve el iva del precio

/* 
interface Persona{
    nombre: string
    apellido: string
    edad: number
}
interface Libro{
    autor: Persona
    titulo: string
}

const personas : Persona[] = []

personas.push({nombre: 'pepe', apellido: 'suarez', edad: 30})

const librosDeFantasia : Libro[] = []

librosDeFantasia.push({
    autor: {
        nombre: 'pepe', 
        apellido: 'suarez', 
        edad: 30
    }, 
    titulo: 'hola'
})

 */
/*
Crear un array de objetos con interfaces

libros : Libro[] la interface Libro debe tener las props: titulo, cantPaginas, categoria, autor

productos: Pruducto[] la interface Producto debe tener las props: nombre, precio, id, stock, descripcion

usersConnected : User[] la interface User debe tener las props: nombre, ubicacion, sistemaOperativo 

*/

class Persona{
    nombre: string
    edad: number
    vida: number
    constructor(nombre: string, edad: number){
        this.nombre = nombre
        this.edad = edad
        this.vida = 100
    }

    obtenerEdad():number{
        return this.edad
    }
}

/* HERENCIA  */

class Programador extends Persona{
    teclado: string
    constructor(nombre: string, edad: number){
        super(nombre, edad)
        this.teclado = 'loGitech 80%'
    }
    hacerTrabajo(cantHrs: number):void{
        console.log('Hacer tiki tiki con teclado ' + this.teclado +' por ' + cantHrs + ' horas')
    }
}

const programador : Programador =  new Programador('pepe', 20)

programador.hacerTrabajo(30)

const planillaDeEmpleados : Programador[] = []


/* 
Practica de herencia 
Crear una clase llamada Entidad con las propiedades:

-nombre
-vida
-danio

y los metodos

presentarse => mostrara por consola 'Hola, mi nombre es nombre'

atacar(objetivo : string) => mostrara por consola 'nombre ataco a objetivo y le inflingio danio daño'

obtenerVida( ) => devolvera la vida actual de la entidad


A partir de la clase Entidad

crear la clase Zombie

nuevas propiedades:

fechaDeMuerte:string (param)

nuevos metodos:
revivir() si la vida es negativa o 0, regenerara la vida a 25 y dira por consola 'REEESURRECIION'


*/


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