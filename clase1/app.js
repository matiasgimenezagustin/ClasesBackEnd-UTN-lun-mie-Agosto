/* Creamos nuestro primer codigo de node.js */
/* 
Node.js se ejecuta en la computador (lo ejecuta v8 de node)
*/
console.log('Hello world / hola mundo')

/* tipos de datos */
/* 
number, string, boolean, array, null, symbol, undefined, object
*/

/* Operadores artmeticos */
/* 
+, -, /, %
*/

/*Operadores logicos  */

/*
    ||, &&, !
 */

/* Compadores */

/* !=, >, <, <=, >=, ==, === */

/* 
Condicionales
*/

/* 
IF
ELSE IF
ELSE
ternario : condicion ? if : else
SWICH
*/
/* Estructuras de repeticion */
/*  
FOR
WHILE
DO...WHILE
FOR..OF
FOR..IN
*/

/* METODOS DE STRING */

/* 
toLowerCase
toUpperCase
length
concat
repeat
charAt
includes
indexOf
*/

/* Metodos de array */

/* 
pop
push
splice
shift
unshift
join
split
*/

/* Metodos Avanzados de array */

/* 
map
forEach
find
filter
some
every
sort
reduce
findIndex
*/

/* 
Funciones

*/

/* Funciones en flecha */

/* const saludar = () => { 
    console.log("Hola, estoy saludando")
} */
/* saludar() */
/* (() => {
    console.log('Hola, estoy saludando')
})()
 */

/* Funciones nombradas */

/* function saludar2 (){
    console.log('Hola estoy saludando')
}

saludar2() */

/* Objetos */

/* const persona = {nombre: 'pepe', aplellido: 'suarez'} */

/* POO */
/* Funcion constructora ES5 */ 
/* function Persona (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

const persona1 = new Persona('Pepe', "Argento")

console.log(persona1) */


class Persona{
    constructor(nombre, apellido,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.trabajos = []
        this.edad = edad
    }
    agregarTrabajo(trabajo){
        this.trabajos.push(trabajo)
    }
}
class Trabajo {
    constructor(nombre, tiempoEstimado, remuneracion){
        this.nombre = nombre
        this.tiempoEstimado = tiempoEstimado
        this.remuneracion = remuneracion
    }
    contarTrabajo(){
        console.log(`${this.nombre} me tomara un tiempo estimado de ${this.tiempoEstimado} hrs y recibire $${this.remuneracion}`)
    }
}
const persona1 = new Persona('pepe', 'argento', 50)
persona1.agregarTrabajo(new Trabajo('desarrollar un front', 30, 230000))
console.log(persona1.trabajos[0].contarTrabajo())

/* Crea la class proyecto con las sig propiedades
nombre: (p) string
precio: (p) numbrer
categoria: (p) string
duracionEstimada: (p) number
participantes: []

crear un obj de la class proyecto que trenga que ver con el desarrollo web
*/
/* class Proyecto {
    constructor(nombre, precio, categoria, estimado) {
      this.nombre = nombre;
      this.precio = precio;
      this.categoria = categoria;
      this.estimado = estimado;
      this.participantes = [];
    }
  } */


/* 
Una vez creada la class proyecto se debera crear el metodo agregarParticipante ( participante)
A su vez crear la class Participante que tendra las propiedades (nombre, apellido, dinero (empieza en 0) y amigos (empieza en array vacio))


eliminarParticipante(nombre) el metodo eliminarParticipante recibe el nombre y elimina del array al participante

reestimarElProyecto(nueva estimacion) permitira cambiar el tiempo estimado del proyecto

nombrarParticipantes() por cada participante debera decir el nombre y apellido del participante

(Agregar la propiedad remuneracion al participante)
(Agregar el metodo a participante) pagar sueldo () incrementara su dinero por la remuneracion del participante

pagarSueldos() por cada participante activara el metodo pagar sueldo

  */
