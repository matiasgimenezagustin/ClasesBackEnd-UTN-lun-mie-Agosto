const users = [
    {
        username: 'pepe',
        password: 'pepe14'
    },
    {
        username: 'lulu',
        password: 'lulu14'
    },
    {
        username: 'juan',
        password: 'juan14'
    },
]
const login = (userToLogin) =>{
    return users.some(user =>user.password == userToLogin.password && user.username == userToLogin.username)
}
module.exports = {login}