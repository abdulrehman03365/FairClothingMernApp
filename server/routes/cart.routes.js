import { verifyParams } from "../middleware/cartMiddleware"
module.exports=function (app){
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
    next()
    })


    app.post("/api/cart",verifyParams,cartController.createCart)
    app.get("/api/cart/:cartId",verifyParams,cartController.getCart)
    app.put("/api/cart/update/:cartId",verifyParams,cartController.updateCart)
    app.delete("/api/update/:cartId",verifyParams,cartController.deleteCart)

 
}