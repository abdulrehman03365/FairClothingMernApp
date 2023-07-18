

const mongoose=require('mongoose')
const {cloth}=require('./cloth.model')
const db ={}
db.mongoose=mongoose
db.Roles =['User','Admin','Owner']
db.user=require('./user.model')
db.role=require('./role.model')
db.marque=require('./marque.model')
db.cloth=cloth
db.cart=require('./cart.model')
module.exports=db