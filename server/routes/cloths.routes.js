const{ verifyClothsParam } = require ('../middleware/clothsMiddleware')
const { verifyJwtToken }  =require('../middleware/authJwt')
const clothsController =require ('../controllers/cloths.controller')
const express = require('express')
const clothsRoutes = express.Router();





    
    
         
        clothsRoutes.post("/addCloth",clothsController.addCloth)
        clothsRoutes.get("/:clothId",clothsController.getCloth)
        clothsRoutes.put("/:clothId",clothsController.updateCloth)
        clothsRoutes.get("/",clothsController.getAllCloths)
        clothsRoutes.delete("/:clothId",clothsController.deleteCloth)
        
    
 
        module.exports = clothsRoutes;

