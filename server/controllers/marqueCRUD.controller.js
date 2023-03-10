const imageService=require('../services/imageService')
const   marque = require( "../model/marque.model")
async function addMarque(req,res,next){
   const {name,location,status ,imageName , imageType,base64Image}=req.body
   imageURL = await imageService.upload(imageName,base64Image,imageType) 



const capacity= parseInt (req.body.capacity);
// console.log(typeof capacity);
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

module.exports={addMarque}