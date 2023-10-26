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

app.get('/api/product/:pid', (req, res) =>{
    const {pid } = req.params
    const query =  'SELECT * FROM products WHERE id = ?'
    db.query(query, [pid], (err, result) =>{
        if(err){
            console.error(err)
            res.status(500).json({ok:false, error: 'Problemas al intententar buscar el producto en la DB'})
        }
        else{
            if(result){
                res.json({product: result[0], ok: true})
            }
            else{
                res.status(404).json({ok:false, error: 'producto no encontrado'})
            }
        }
    })

})


app.delete('/api/product/:pid', (req, res) =>{

    const {pid} = req.params
    const query = 'DELETE FROM products WHERE id = ?'
    db.query(query, [pid], (err, result) =>{
        if(err){
            console.error(err)
            res.status(500).json({ok: false, error: 'no se pudo eliminar el producto'})
        }
        else{
            res.status(200).json({ok:true})
        }
    })

})

app.put('/api/product/:pid', (req, res) =>{
    const {pid} = req.params
    const {stock} = req.query
    if(!stock){
        return res.status(400).json({error: 'falta el parametro stock', stock: false})
    }

    const query =  'UPDATE products SET stock = ? WHERE id = ?'
    db.query(query, [stock, pid], (err, result) =>{
        console.log(result)
        if(err){
            console.error(err)
            res.status(500).json({error: 'No se pudo actualizar el producto', ok:false})
        }
        else{
            const query = 'SELECT * FROM products WHERE id = ?'
            db.query(query, [pid], (err, result) =>{
                if(!err){
                    res.status(200).json({mensaje: 'producto actualizado correctamente', ok: true, product: result[0]})
                }
            } )
           
        }
    })
})

app.listen(PORT, () =>{
    console.log(`El servidor se esta escuchando en http://localhost:${PORT}`)
})