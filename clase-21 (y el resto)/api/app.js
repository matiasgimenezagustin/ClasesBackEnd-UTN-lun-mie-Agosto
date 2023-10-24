const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors')

const PORT = 4000

app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_ecommerce_tn_miercoles'
})


db.connect((err) =>{
    if(err){
        console.error(err)
    }
    else{
        console.log('conexion exitosa')
    }
})


app.get('/api/products', (req, res) =>{
    const query = 'SELECT * FROM products'
    db.query(query, (err, result) =>{
        if(err){
            res.status(500).json({content: 'DB error', ok: false})
        }
        else{
            res.status(200).json({products: result, ok: true})
        }
    })
})

app.listen(PORT, () =>{
    console.log(`El servidor se esta escuchando en http://localhost:${PORT}`)
})