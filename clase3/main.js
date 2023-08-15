"use strict";
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
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.vida = 100;
    }
}
/* HERENCIA  */
class Programador extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.teclado = 'loGitech 80%';
    }
    hacerTrabajo(cantHrs) {
        console.log('Hacer tiki tiki con teclado ' + this.teclado + ' por ' + cantHrs + ' horas');
    }
}
const programador = new Programador('pepe', 20);
programador.hacerTrabajo(30);
