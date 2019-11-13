const express = require('express');
const router = express.Router();
const db = require('../helpers/dbModels');

const generateToken = require('../helpers/generateToken');

router.post('/register', async (req,res) => {
    try{
        const user = req.body;
        let result = await db.registerUser(user)
        const token = generateToken(result)
            res.status(201).json({
                message: `Welcome ${result.username}`,
                token: token
            })
    }
    catch (error){
        res.status(500).json({error: `An error occurred during registeration. ${error}`})
    }
})

router.post('/login', async (req,res) => {
    try{
        const payload = req.body;
        let user = await db.loginUser(payload)
        if(user){
            const token = generateToken(user)
            res.status(200).json({
                message: `Welcome ${user.username}`,
                token: token
            })
        } else {
            res.status(401).json({message: `.You shall not pass. invalid credentials`})
        }
    }
    catch (error){
        res.status(500).json({error: `An error occurred while logging in. ${error}`})
    }
})

module.exports = router;