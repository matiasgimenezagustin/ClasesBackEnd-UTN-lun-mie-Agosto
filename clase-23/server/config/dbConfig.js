/* Connexion con MONGODB */
const mongoose = require('mongoose')

const CONNECTION_STRING = process.env.CONNECTION_STRING

mongoose.connect(CONNECTION_STRING + 'productos_utn_noche', {
    useNewUrlParser: true,
})
.then(() =>{
    console.log('conexion exitosa')
})
.catch((err) => {
    console.error(err)
})

module.exports = mongoose