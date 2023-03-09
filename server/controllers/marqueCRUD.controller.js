const   marque = require( "../model/marque.model")
async function addMarque(req,res,next){

const {name,location,image,status}=req.body
const capacity= parseInt (req.body.capacity);
// console.log(typeof capacity);
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
    console.error(error);
    res.status(500).json({ error: error });
}
}

module.exports={addMarque}