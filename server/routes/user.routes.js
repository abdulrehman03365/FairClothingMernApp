const { application } = require('express')
const {addMarque,deleteMarque, getallMarques,getMarque , updateMarque}=require('../controllers/marqueCRUD.controller')
const {authJwtMiddleware,marqueCRUD} = require('../middleware')
const {AuthController} = require('../controllers/auth.controller')
const express = require('express');
const multer=require('multer')

module.exports = function (app) {

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
    next()
    })


   app.post("/api/addMarque",authJwtMiddleware.verifyJwtToken,marqueCRUD.validateParameters,addMarque)
   app.post("/api/deleteMarque",authJwtMiddleware.verifyJwtToken,deleteMarque)
   app.get("/api/getallMarques",authJwtMiddleware.verifyJwtToken,getallMarques)
   app.get("/api/getMarque",authJwtMiddleware.verifyJwtToken,getMarque)
   app.post("/api/updateMarque",authJwtMiddleware.verifyJwtToken, updateMarque)
   




}