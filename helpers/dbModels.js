const db = require('../data/dbConfig');
const bcrypt = require('bcryptjs');

module.exports = {
    registerUser,
    loginUser,
    getUsers
}

async function registerUser(user){
    user.password = bcrypt.hashSync(user.password)
    const id = await db('users').insert(user)
    const result = await db('users').where({id: id[0]}).first()
    if(result){
        return result
    } else {
        return null
    }
}

async function loginUser(user){
    let result = await db('users').where({username: user.username}).first()
    if (result && bcrypt.compareSync(user.password, result.password)){
        return result
    } else {
        return null
    }
}

function getUsers(department){
    return db('users').select('id','username','department').where({department: department})
}