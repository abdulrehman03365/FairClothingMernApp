const{ verifyParams } = require ('../middleware/cartMiddleware')
const { verifyJwtToken }  =require('../middleware/authJwt')
const {createCart , getCart , updateCart , deleteCart} =require ('../controllers/cart.controller')
module.exports=function (app){
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
    next()
    })


    app.post("/api/cart",verifyJwtToken,verifyParams,createCart)
    app.get("/api/cart/:cartId",verifyJwtToken,verifyParams,getCart)
    app.put("/api/cart/update/:cartId",verifyJwtToken,verifyParams,updateCart)
    app.delete("/api/update/:cartId",verifyJwtToken,verifyParams,deleteCart)

 
}