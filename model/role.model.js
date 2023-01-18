const mongoose = require("mongoose");
const role=mongoose.model('role',new  mongoose.Schema({name:String}))
module.exports=role;