const db = require('../data/dbConfig');
const bcrypt = require('bcryptjs');

module.exports = {
    registerUser,
    loginUser
}

function registerUser(user){
    user.password = bcrypt.hashSync(user.password)
    return db('users').insert(user)
}

async function loginUser(user){
    let result = await db('users').where({username: user.username}).first()
    if (result && bcrypt.compareSync(user.password, result.password)){
        return result
    } else {
        return null
    }
}