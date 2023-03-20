const { application } = require('express')
const {addMarque,deleteMarque, getallMarques , updateMarque}=require('../controllers/marqueCRUD.controller')
const {authJwtMiddleware,marqueCRUD} = require('../middleware')
const {AuthController} = require('../controllers/auth.controller')
const express = require('express');
const multer=require('multer')

module.exports = function (app) {

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
    next()
    })


   app.post("/api/addMarque",marqueCRUD.validateParameters,addMarque)
   app.post("/api/deleteMarque",deleteMarque)
   app.get("/api/getallMarques",getallMarques)
   app.post("/api/updateMaque", updateMarque)
   




}