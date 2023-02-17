const { application } = require('express')

const {verifySignup} = require('../middleware')
const AuthController = require('../controllers/auth.controller')

module.exports = function (app) {

    app.use(function (res, req, next) {
        res.header("Access-Control-Allow-Headers","Origin","Content-Type","Accept")
    next()
    })

    app.post("/api/auth/signup",[verifySignup.checkEmptyfields,verifySignup.checkDuplicateUser,verifySignup.checkDuplicateEmail],
    AuthController.signUpController)

    
    app.post("/api/auth/signIn",[verifySignup.checkEmptyfields],AuthController.signInController)

    app.get("/api/auth/signout",AuthController.signOutController)



}