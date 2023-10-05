//DB Info

const DB_NAME = 'eCommerceUTN_Noche_LM'
const DB_PORT = 27017
const DB_ADRESS = '127.0.0.1'
const URL_CONNECTION = `mongodb://${DB_ADRESS}:${DB_PORT}/${DB_NAME}`

const mongoose = require('mongoose')
const Producto = require('./models/Producto')




const obtenerProductos = async () =>{
        
    mongoose.connect(URL_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log('Nos conectamos con mongoDB correctamente')
        Producto.find({})
    })
    .catch((error) =>{
        console.log('No se pudo hacer la conexion con MongoDB')
        console.error(error)
    })
}


const crearProducto = async (titulo, precio, descripcion, stock) =>{
    mongoose.connect(URL_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log('Nos conectamos con mongoDB correctamente')
        const nuevoProducto =  new Producto({titulo, precio, descripcion, stock})
        nuevoProducto.save().then((prodGuardado) =>{
            console.log('Se guardo el producto:')
            console.log(prodGuardado)

        }).catch((error) =>{
            console.error('El producto no se pudo guardar')
        })
    })
    .catch((error) =>{
        console.log('No se pudo hacer la conexion con MongoDB')
        console.error(error)
    })
}

crearProducto('Empanada atun y sardina', 600, 'Empanadas muy polemicas', 5)