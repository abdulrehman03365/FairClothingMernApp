const imageService=require('../services/imageService')
const marque = require( "../model/marque.model");
const { query } = require('express');
const mongoose=require('mongoose')
async function addMarque(req,res,next){
   const {name,location,status ,imageName , imageType,base64Image}=req.body
   const  imageURL = await imageService.upload(imageName,base64Image,imageType) 


   const capacity= parseInt (req.body.capacity);
try{
    const newMarque= new marque({
        name: name,
        location: location,
        image: imageURL,
        capacity: capacity,
        status: status
      });
    
      const savedMarque= await newMarque.save()
    
      res.status(201).json(savedMarque)
    }
    

catch(error)
{
    console.error(error);
    res.status(500).json({ message:  "Error adding Marque"});
}
}


async function deleteMarque(req,res,next){
    console.log("type of Id:"+req.body.id);
    console.log("Id is valid or not :"+mongoose.Types.ObjectId.isValid(req.body.id));
const result =await marque.findByIdAndDelete(req.body.id)

try{
    
if(!result)
{
throw new Error('Marque not found')
}
else{
   
    res.json({message:'Marque Deleted' , })
}
}
catch(error){
console.log('Error'+ error );
res.status(400).json({'message':error.message})
}
}

async function updateMarque(req,res,next){
try{
    const {name,location,status ,imageName , imageType,base64Image}=req.body
    const  image = await imageService.upload(imageName,base64Image,imageType) 
    const capacity= parseInt (req.body.capacity);
    const response = await marque.findByIdAndUpdate(req.query.id ,{name,location,status,capacity,image}, { new: true })
    if(response)
    {
        res.status(200).json(response)

    }

}
catch(error)
{
  console.log("Error :"+ error);
  res.status(500).json({message:"Unable to Update"})
}    



}



async function getallMarques(req,res,next)
{

try{

    let {location} = req.query;
    console.log("location"+ location)
    // Trim the location parameter
    if (location=='All') 
    {
        const marques=await marque.find()
        res.status(200).json(marques)
        
    
    }
   else {
    console.log("location inside API ",location);
    const marques=await marque.find({location:location})
        res.status(200).json(marques)
   }
}
catch(error)
{
    console.log("error in finding all marques :" + error);
    res.status(500).json({error:error.message})
}



}


async function getMarque(req,res,next){
    try{
       
       
        const marques=await marque.findById(req.query.id)
        res.status(200).json(marques)
    }
    catch(error)
    {
        console.log("error in finding all marques :" + error);
        res.status(500).json({error:error.message})
    }
       

}
module.exports={addMarque,deleteMarque,getallMarques ,updateMarque , getMarque }









// // Create a new Marque
// async function createMarque(req, res) {
//     try {
//       const marque = new Marque(req.body);
//       await marque.save();
//       res.status(201).json(marque);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   }
  
//   // Read all Marques
//   async function getAllMarques(req, res) {
//     try {
//       const marques = await Marque.find();
//       res.json(marques);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   }
  
//   // Read a Marque by ID
//   async function getMarqueById(req, res) {
//     try {
//       const marque = await Marque.findById(req.params.id);
//       if (!marque) throw new Error('Marque not found');
//       res.json(marque);
//     } catch (err) {
//       res.status(404).json({ error: err.message });
//     }
//   }
  
//   // Update a Marque by ID
//   async function updateMarqueById(req, res) {
//     try {
//       const updates = Object.keys(req.body);
//       const allowedUpdates = ['name', 'location', 'image', 'capacity', 'status'];
//       const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
//       if (!isValidOperation) throw new Error('Invalid updates');
//       const marque = await Marque.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//       if (!marque) throw new Error('Marque not found');
//       res.json(marque);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   }
  
//   // Delete a Marque by ID
//   async function deleteMarqueById(req, res) {
//     try {
//       const marque = await Marque.findByIdAndDelete(req.params.id);
//       if (!marque) throw new Error('Marque not found');
//       res.json({ message: 'Marque deleted successfully' });
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   }