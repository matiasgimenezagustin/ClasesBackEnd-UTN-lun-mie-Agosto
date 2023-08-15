const obtenerNumeroRandom = () =>{
    return Math.floor(Math.random() * ( 10 )) + 1;
}


class Personaje {

    
    constructor(nombrePer, armaduraPer, danioBasePer){
        this.nombre = nombrePer;
        this.vida = 100;
        this.arma = null;
        this.armadura = armaduraPer ;
        this.danioBase = danioBasePer;
    }

    recibirAtaque(danio) {
        this.vida = this.vida - (danio - (this.armadura/10 + obtenerNumeroRandom()))
    }

    calcularAtaque(){
        let danioArma = 0
        if (this.arma != null) {danioArma = this.arma.danio}
        return this.danioBase / obtenerNumeroRandom() + danioArma
    }

    asignarArma(nombreArma,danioArma){
        let nuevaArma = new Object()
        nuevaArma.nombre = nombreArma;
        nuevaArma.danio= danioArma;
        this.arma = nuevaArma;
    }

    atacar(personajeObject){        
        let calculoAtaque = this.calcularAtaque()
        personajeObject.recibirAtaque(calculoAtaque)
        console.log(`${this.nombre} atacó a ${personajeObject.nombre} inflingiéndole ${calculoAtaque} de daño
        y dejándolo con ${personajeObject.vida} de vida restante`)        
    }

}



const guerrero1 = new Personaje('Don Ramón',10,20)
const guerrero2 = new Personaje('Doña Florinda',10,20)
let turno = 'personaje' // o enemigo

guerrero1.asignarArma('Escopeta',30)
guerrero2.asignarArma('Bazuca',30)


let ganador = ''
while(guerrero1.vida > 0 && guerrero2.vida > 0){
    if(turno == 'personaje'){
        guerrero1.atacar(guerrero2)
        turno = 'enemigo'
    }else{
        guerrero2.atacar(guerrero1)
        turno = 'personaje'
    }
    
   
    if(guerrero1.vida <= 0){
        ganador = guerrero2.nombre
    } else if (guerrero2.vida <= 0) {
        ganador = guerrero1.nombre
    }
}

console.log(`El personaje ${ganador} ha ganado`)