const imageService=require('../services/imageService')
const marque = require( "../model/marque.model")
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
    res.status(500).json({ error: error });
}
}


async function deleteMarque(req,res,next){
    
const result =marque.findByIdAndDelete(req.params.id)
try{
if(!result)
{
throw new Error('Marque not found')
}
else{
    res.json({message:'Marque Deleted'})
}
}
catch(error){
console.log('Error'+ error );
res.status(400).json({'Error':error.message})
}
}

async function updateMarque(req,res,next){
try{
    const {name ,location, status , capacity ,image}=req.params
    const response = await marque.findByIdAndUpdate(req.params.id,{name,location,status,capacity,image}, { new: true })
    if(response)
    {
        res.status(200).json(response)

    }

}
catch(error)
{
  console.log("Error :"+ error);
  res.status(500).json({Error:"Unable to Update"})
}    



}



async function getallMarques(req,res,next)
{

try{

    const marques=await marque.find()
    res.status(200).json(marques)
}
catch(error)
{
    console.log("error in finding all marques :" + error);
    res.status(500).json({error:error.message})
}


}
module.exports={addMarque,deleteMarque,getallMarques ,updateMarque }









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