const{ verifyCartParams } = require ('../middleware/cartMiddleware')
const { verifyJwtToken }  =require('../middleware/authJwt')
const cartController =require ('../controllers/cart.controller')
module.exports=function (app){
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
    next()
    })


    app.post("/api/cart",[verifyJwtToken,verifyCartParams],cartController.createCart)
    app.get("/api/cart/",[verifyJwtToken,verifyCartParams],cartController.getCart)
    app.put("/api/cart/update/",[verifyJwtToken,verifyCartParams],cartController.updateCart)
    app.delete("/api/update/",[verifyJwtToken,verifyCartParams],cartController.deleteCart)

 
}