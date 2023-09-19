/* const fs = require('fs') */
const {nombre} = require('./src/app.js')


console.log('hola ' + nombre)


const arr = [
    {
        nombre: 'cuadrado'
    },
    {
        nombre: 'circulo'
    },
    {
        nombre: 'rectangulo'
    }
]

//for normal
for(let i = 0; i < arr.length; i++){
    const formaGeometrica = arr[i]
    console.log(arr[i])
}

//for of
for(const forma of arr){
    console.log(forma)
}


//foreach
arr.forEach((forma) => console.log(forma))


/*
Crear un array de objetos con usuarios que tengan nombre y apellido en un achivo llamado usuarios.js dentro de la carpeta data, luego exportarla y importarla en un archivo llamado app.js que recorra el array y nos diga por consola 'hola + nombre + apellido' min crear 3 usuarios 

Testear nuestro script con 'node app'
*/