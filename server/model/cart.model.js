const mongoose =require('mongoose')
const {clothSchema}=require('./cloth.model.js')
const cartSchema=new mongoose.Schema({
items:[clothSchema],
userId:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},
Qquantity:{type:Number,required:true}

})
const cart=mongoose.model('cart',cartSchema);
module.exports=cart;