const express = require('express')
const hbs = require('hbs')
const mysql = require('mysql')


const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_posteos'
})

db.connect((err) =>{
    if(err){
        console.error(err)
    }
    else{
        console.log('Conexion exitosa con mysql')
    }
})


//handlebars CONFIG

app.set('view engine', 'hbs')
app.set('views' + __dirname + '/views')

app.get('/posts', (req, res) =>{
    const query = 'SELECT * FROM posts'
    db.query(query, (err, result)=>{
        if(err){
            console.error(err)
            return res.status(500).json({mensaje: 'internal server error'})
        }
        const posts = result
        res.render('posts', {posts})
    })
    
})

app.listen(8080, () =>{
    console.log('El servidor se esta escuchando en http://localhost:8080/posts')
})