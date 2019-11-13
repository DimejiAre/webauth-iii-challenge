require('dotenv').config();
const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req,res) => {
    res.json('Welcome to my API')
})

module.exports = server;