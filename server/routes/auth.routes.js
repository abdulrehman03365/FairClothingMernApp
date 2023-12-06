const { application } = require('express')
const {verifySignup} = require('../middleware')
const AuthController = require('../controllers/auth.controller')
const bodyParser=require('body-parser')
module.exports = function (app) {
    
    // app.use(function (res, req, next) {
    //     res.header("Access-Control-Allow-Headers","Origin","Content-Type","Accept")
    // next()
    // })
    app.use(function (res, req, next) {
        res.header('Access-Control-Allow-Origin', 'https://fairclothing-f9c79.web.app');
        res.header("Access-Control-Allow-Headers","Origin","Content-Type","Accept")
    next()
    })

    app.use(function (req, res, next){
        res.header('Access-Control-Allow-Origin', 'https://fairclothing-f9c79.web.app/');
   
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
      });
    
    app.post("/api/auth/signUp",[verifySignup.checkEmptyfields,verifySignup.checkDuplicateUser,
    verifySignup.checkDuplicateEmail],
    AuthController.signUpController)

    
    app.post("/api/auth/signIn",[verifySignup.checkEmptyfields],AuthController.signInController)



    app.get("/api/auth/signout",AuthController.signOutController)



}