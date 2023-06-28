const mongoose = require("mongoose");
const role=mongoose.model('roles',new  mongoose.Schema({name:String}))
module.exports=role;