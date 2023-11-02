const User = require("../models/userModel");
const bcrypt = require('bcrypt')


const createUser = async (user) =>{
    const hashedPassword = await bcrypt.hash(user.contrasena, 10)
    user.role = 'user'
    user.contrasena = hashedPassword
    const newUser = new User(user)
    return await newUser.save()
}

const getUser = async () =>{

} 
/* Vefica si el usuario ya existe */
const verifyExistUser = async () =>{

}

module.exports = {getUser, verifyExistUser, createUser}