const { application } = require('express')

const {verifySignup} = require('../middleware')
const AuthController = require('../controllers/auth.controller')

module.exports = function (app) {

    app.use(function (res, req, next) {
        res.header("Access-Control-Allow-Headers","Origin","Content-Type","Accept")
    }


    )

    app.post('/api/auth/signUp',[verifySignup.checkDuplicateUser,verifySignup.checkDuplicateEmail],
    AuthController.signUpController)
    
    
    app.get('api/auth/signIn',AuthController.signInController)


}