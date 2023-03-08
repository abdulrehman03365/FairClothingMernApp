const { application } = require('express')
const {addMarque}=require('../controllers/marqueCRUD.controller')
const {authJwtMiddleware,marqueCRUD} = require('../middleware')
const {AuthController} = require('../controllers/auth.controller')


module.exports = function (app) {

    app.use(function (res, req, next) {
        res.header("Access-Control-Allow-Headers","Origin","Content-Type","Accept")
    next()
    })

   app.post("/api/addMarque",marqueCRUD.validateParameters,addMarque)


}