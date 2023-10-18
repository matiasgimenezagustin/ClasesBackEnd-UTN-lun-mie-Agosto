const express = require('express')
const hbs = require('hbs')
const mysql = require('mysql')


/* const app = express() */

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