

const mongoose=require('mongoose')
const db ={}
db.mongoose=mongoose
db.Roles =['User','Admin','Owner']
db.user=require('./user.model')
db.role=require('./role.model')
db.marque=require('./marque.model')
module.exports=db