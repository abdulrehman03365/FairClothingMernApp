// const { default: mongoose, Schema } = require("mongoose");

const mongoose = require('mongoose')

const schema =mongoose.Schema;
const user=mongoose.model('user' ,new schema({name:String 
    ,email:String
    ,password:String,
    Role:[{type:mongoose.Schema.Types.ObjectId,
    ref:'Role'}]}))

    
    module.exports=user;