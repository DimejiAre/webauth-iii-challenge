const express = require('express');
const router = express.Router();
const db = require('../helpers/dbModels');

router.post('/register', async (req,res) => {
    try{
        const user = req.body;
        let result = await db.registerUser(user)
        res.status(201).json({message: `user ${result} successfully registered`})
    }
    catch (error){
        res.status(500).json({error: `An error occurred during registeration. ${error}`})
    }
})

module.exports = router;