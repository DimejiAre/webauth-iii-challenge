const db = require('../data/dbConfig');
const bcrypt = require('bcryptjs');

module.exports = {
    registerUser
}

function registerUser(user){
    user.password = bcrypt.hashSync(user.password)
    return db('users').insert(user)
}