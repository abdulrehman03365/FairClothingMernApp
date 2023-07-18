const mongoose=require('mongoose')
constsClothSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    image: {  type: String },
    capacity: { type: Number, required: true },
    status: { type: String, default: true },
  });
  
  const marque = mongoose.model('Marque', marqueSchema);
  
  module.exports = marque;