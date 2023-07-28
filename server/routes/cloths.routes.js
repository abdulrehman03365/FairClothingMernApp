const{ verifyClothsParam } = require ('../middleware/clothsMiddleware')
const { verifyJwtToken }  =require('../middleware/authJwt')
const clothsController =require ('../controllers/cloths.controller')
module.exports=function (app){
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
    next()
    })


    app.post("/api/addCloth",[verifyJwtToken,verifyClothsParam],clothsController.addCloth)
    app.get("/api/cloth/:clothId",[verifyJwtToken,verifyClothsParam],clothsController.getCloth)
    app.put("/api/cloth/:cartId",[verifyJwtToken,verifyClothsParam],clothsController.updateCloth)
    app.delete("/api/cloth/:cartId",[verifyJwtToken,verifyClothsParam],clothsController.deleteCloth)

 
}