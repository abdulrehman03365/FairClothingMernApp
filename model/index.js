const db ={}
db.Roles =['User','Admin','Owner']
db.user=require('./user.model')
db.role=require('./role.model')
module.exports=db