
const { usuarios } = require('../data/usuarios.js')
usuarios.forEach(
    usuario => console.log(`Hola ${usuario.nombre} ${usuario.apellido}`)
    )

let nombre = 'pepe'


module.exports = {nombre}


/* Crear una class llamada chatManager que tenga un atributo llamado chat (arr vacio) y otro llamado idCounter (empieza en 0)
y crearle los metodos:

createMessage(message: objeto (content, author))
Recibira un mensaje, le agregara un id (autoincrementable con el idConter)  y una propiedad llamada fecha (poner siempre la fecha 'hoy'). Luego guardara el mensaje en el array llamado chat
Nos dira por consola mensaje guardado correctamente
getMessageById(id)
Nos devolvera el mensaje en caso de existir 
Sino devolvera null

*/

/* 
class chatManager{
    chat = []
    idCounter = 0
    
    createMessage(message){
        let fecha = new Date()
        this.chat.push({...message, id : this.idCounter++, fecha: fecha.toDateString()})
        console.log('Mensaje guardado correctamente')
    }

    getMessageById(id){
        const messageFound = this.chat.find((chat)=> chat.id === id)
        return messageFound ? messageFound : null     
    }

    listarMensajes(){
        this.chat.forEach(chat => console.log(`${chat.content} ${chat.author} ${chat.id} ${chat.fecha}`))
    }

}

const nuevoChat = new chatManager()
nuevoChat.createMessage({ content:'Hola como estás', author:"Juan"})
nuevoChat.createMessage({ content:'Hola todo bien', author:"Pedro"})
nuevoChat.listarMensajes()
console.log(nuevoChat.getMessageById(1)) */

const filesystem = require('fs')
class ChatManager {
    constructor(){
        this.chat = []
        this.idCounter = 0
    }
    async createMessage(message){
        let fecha = new Date()
        this.chat.push({...message, id: this.idCounter++, fecha: fecha.toISOString()})
        console.log('mensaje guardado con exito')
        await filesystem.promises.writeFile('db/chat.json' , JSON.stringify(this.chat), 'utf-8')
    }
    getMessageById(id){
        const messageFound = this.chat.find(message => message.id === id)
        return messageFound ? messageFound : null
    }
}

const chat = new ChatManager()
chat.createMessage({author: 'pepe', content: 'hola mundo'})
chat.createMessage({author: 'maria', content: 'Chau mundo'})
chat.createMessage({author: 'maria', content: 'Chau mundo'})
chat.createMessage({author: 'maria', content: 'Chau mundo'})

chat.createMessage({author: 'maria', content: 'Chau mundo'})
chat.createMessage({author: 'maria', content: 'Chau mundo'})
chat.createMessage({author: 'maria', content: 'Chau mundo'})
chat.createMessage({author: 'maria', content: 'Chau mundo'})

chat.createMessage({author: 'maria', content: 'Chau mundo'})
chat.createMessage({author: 'maria', content: 'Chau mundo'})

/* Cuando creen un mensaje deberan usar el filesytem para crear un archivo donde guardaran el contenido del mensaje */

filesystem.promises.writeFile('db/mensaje.txt' , 'texto', 'utf-8')
filesystem.promises.writeFile('db/mensaje.txt' , 'c', 'utf-8')