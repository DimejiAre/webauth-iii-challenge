require('dotenv').config();
const express = require('express');
const helmet = require('helmet');

const auth = require('./routers/auth');
const users = require('./routers/users');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/auth', auth);
server.use('/api/users', users);

server.get('/', (req,res) => {
    res.json('Welcome to my API')
})

module.exports = server;