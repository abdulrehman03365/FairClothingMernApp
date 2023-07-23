const{ verifyClothsParam } = require ('../middleware/clothsMiddleware')
const { verifyJwtToken }  =require('../middleware/authJwt')
const {addCloth} =require ('../controllers/cloths.controller')
 module.exports=function (app){
     app.use(function (req, res, next) {
         res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
     next()
     })


     app.post("/api/addCloth",[verifyClothsParam],addCloth)
    //  app.get("/api/cart/:cartId",verifyJwtToken,verifyCartParams,cartController.getCart)
    //  app.put("/api/cart/update/:cartId",verifyJwtToken,verifyCartParams,cartController.updateCart)
    //  app.delete("/api/update/:cartId",verifyJwtToken,verifyCartParams,cartController.deleteCart)

 
 }