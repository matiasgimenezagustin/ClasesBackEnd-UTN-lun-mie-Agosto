const obtenerNumeroRandom = () =>{
    return Math.floor(Math.random() * ( 10 )) + 1;
}



/* 
Crear una clase llamada personaje que tenga las propiedades:


-nombre (param)
-vida = 100
-arma = null 
-armadura = (param)
-danioBase = (param)


Metodos:

    vida = vida - (danio - (armadura/10 + numRandom))
recibirAtaque(danio): recibira un daño al cual le restara la (decima parte de la armadura + un numero random) , y ese danioTotal sera el que le restaremos a la vida de nuestro personaje


calcularAtaque(): devolvera la suma de (danioBase / unNumeroRandom)  y el danio del arma (si es que tiene arma)


atacar(objetivo : objeto) recibira a un objeto Personaje al cual calculara un ataque y activara el metodo recibir ataque de el objetivo
Debera decir por consola el estado de la pelea:
Ejemplo: 'personaje1.nombre ataco a personaje2 inflingiendole 6 de daño y dejandolo con personaje2.vida restante'


asignarArma(arma: objeto) (el arma debe tener las propiedades nombre y danio) : asignara el arma recibida a la propiedad arma


Combate NO ES UN METODO, es una logica o es un bloque de codigo:


Declarar dos objetos de la clase personaje y una variable llamada turno (con el valor 'personaje' o 'enemigo')
asignaremos un arma a cada personaje (o almenos a 1)


Crear un bucle donde se combatira hasta que la vida del personaje1 o personaje2 sea menor o igual a 0


Si algun personaje muere, al finalizar el bucle while se debera decir 'x personaje ha ganado'
RECOMENDACIONES
-Usar la variable turno para ordenar quien ataca


 */


class Personaje{
    constructor(armadura, nombre, danioBase){
        this.vida = 100
        this.armadura = armadura
        this.nombre = nombre
        this.danioBase = danioBase
        this.arma = null
    }
    asignarArma(arma){
        this.arma = arma
        console.log(`${this.nombre} ahora tiene ${this.arma.nombre} (Estadisticas: daño ${this.arma.danio})`)
    }
    recibirAtaque(danio){
        this.vida = this.vida - (danio - (this.armadura / 10 + obtenerNumeroRandom() ))
    }
    calcularAtaque (){
        return this.danioBase / obtenerNumeroRandom() + (this.arma ? this.arma.danio : 0)
    }
    atacar(objetivo){
        const danio = this.calcularAtaque()
        objetivo.recibirAtaque(danio)
        console.log(`${this.nombre} ataco a ${objetivo.nombre} y lo dejo con ${objetivo.vida} puntos de vida`)
    }
}

class Arma{
    constructor(danio, nombre){
        this.danio = danio
        this.nombre = nombre
    }
}

const personajePrincipal = new Personaje(30, 'Pepe', 20)
const enemigo = new Personaje(30, 'Lucas', 20)

personajePrincipal.asignarArma(new Arma(12, 'Mortifero'))
enemigo.asignarArma(new Arma(23, 'kunai'))

console.log(obtenerNumeroRandom())


let turno = 'personaje'

while(personajePrincipal.vida > 0 && enemigo.vida > 0){
    if(turno === 'personaje'){
        personajePrincipal.atacar(enemigo)
        turno = 'enemigo'
    }else{
        enemigo.atacar(personajePrincipal)
        turno = 'personaje'
    }

}
if(personajePrincipal.vida > 0 ){
    console.log(`${personajePrincipal.nombre} ha ganado`)
}
else if(enemigo.vida > 0){
    console.log(`${enemigo.nombre } ha ganado`)
}