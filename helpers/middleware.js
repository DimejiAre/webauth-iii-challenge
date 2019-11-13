const jwt = require('jsonwebtoken');

module.exports = {
    restricted
}

function restricted(req,res,next){
    const token = req.headers.authorization
    if(req.headers.authorization){
        jwt.verify(
            token,
            process.env.JWT_SECRET,
            (err, decodedToken) => {
                if(err){
                    res.status(401).json({message: err.message})
                } else {
                    req.decodedToken = decodedToken
                    next()
                }
            }
        )
    }
    else {
        res.status(400).json({message: 'No Credentials provided'})
    }
}