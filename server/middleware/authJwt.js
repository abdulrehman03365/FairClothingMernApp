const jwt = require('jsonwebtoken');
const { Roles } = require('../model');
require('dotenv').config

verifyJwtToken = (req, res, next) => {

    token = req.headers.authorization.split(' ')[1];
    
    if (!token) {
        console.log("Auth tocken is not ");
        res.status(403).send({ 'message': "Auth tocken is not provided" })
        return;
    }

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) {
                console.log(err);
                res.status(500).send({ 'Error': "Authentication error" })
                return;
            }

            else {
                req.userId = decoded.id;

                next()
            }
        })

    }


}


isadmin = (req, res, next) => {

}

isUser = (req, res, next) => {

}


isOwner = (req, res, next) => {

}



login = (req, res, next) => {

}

signOut = (req, res, next) => { }

module.exports={verifyJwtToken}