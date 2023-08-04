const mongoose=require('mongoose')
const clothSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sku:{type:String,require:true},
    images: [{  type: String }],
    quantity: { type: Number, required: true },
    status: { type: String, default: true },
  });
  
  const cloth =new mongoose.model('Cloth',clothSchema);
  
  module.exports = {cloth,clothSchema};