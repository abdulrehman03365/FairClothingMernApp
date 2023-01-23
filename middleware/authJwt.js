const jwt = require('jsonwebtoken');
const { Roles } = require('../model');
require('dotenv').config

verifyJwtToken = (req, res, next) => {

    token = req.session.token;

    if (!token) {
        res.status(403).send({ 'message': "Tocken is not provided" })
        return;
    }

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) {
                console.log(err);
                res.status(500).send({ 'message': "Authentication error" })
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
