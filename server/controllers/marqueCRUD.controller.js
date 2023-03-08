import { marque } from "../model"
async function addMarque(res,req,next){
const {name,location,image,capacity,status}=req.body

try{
    const newMarque= new marque({
        name: name,
        location: location,
        image: image,
        capacity: capacity,
        status: status
      });
    
      const savedMarque= await newMarque.save()
    
      res.status(201).json(savedMarque)
    }
    

catch(error)
{
    console.error(err);
    res.status(500).json({ error: 'Server error' });
}
}

module.exports={addMarque}