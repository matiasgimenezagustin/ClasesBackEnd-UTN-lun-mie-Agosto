class Persona{
    constructor(nombre){
        this.nombre = nombre
    }
    saludar(){
        console.log("Buenas Tardes")
    }
    entablarConversacion(){
        this.saludar()
        console.log('Como estas?')
    }
}

const pepe = new Persona('Pepe')


console.log(`Hola me llamo ${pepe.nombre}`)

pepe.entablarConversacion()


const persona1 = new Persona('pepe', 'argento', 50)
persona1.agregarTrabajo(new Trabajo('desarrollar un front', 30, 230000))
console.log(persona1.trabajos[0].contarTrabajo())