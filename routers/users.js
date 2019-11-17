const express = require('express');
const router = express.Router();
const restricted = require('../helpers/middleware').restricted;
const db = require('../helpers/dbModels');

router.get('/', [restricted], async (req,res) => {
    try{
        const department = req.decodedToken.department
        let users = await db.getUsers(department)
        res.status(200).json(users)  
    }
    catch (error){
        res.status(500).json({error: `An error occurred while retrieving users. ${error}`})
    }
})

module.exports = router