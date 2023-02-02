const { application } = require('express')

const {authJwtMiddleware} = require('../middleware')
const AuthController = require('../controllers/auth.controller')

module.exports = function (app) {

    app.use(function (res, req, next) {
        res.header("Access-Control-Allow-Headers","Origin","Content-Type","Accept")
    next()
    })

    app.get("/become-Partner",authJwtMiddleware.verifyJwtToken,(req,res)=>{

     res.sendFile("F:/NodeJsLearning/NodeJsBookingWebSite/views/become-Partner.html")})




}