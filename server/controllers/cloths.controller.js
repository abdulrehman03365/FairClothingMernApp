const {cloth} =require( '../model/cloths.model')
addCloth=async(req,res,next)=>{
    try{
        const {name ,sku ,images ,quantity ,status}=req.body  
        const newCloth = new cloth({name,sku,images,quantity,status})
        await newCloth.save()
        res.status(200).json({message:'Cloth added successfully', cloth:newCloth})
        }
        catch(error){
        console.error("Error adding cloth", error);
        res.status(500).json({message:"Failed to add cloth"})
        }
}

getCloth =async(req,res,next)=>{
try{
const {clothId}= req.body    
const cloth=await cloth.findById({clothId})
if(!cloth)
{
res.status(404).json({message:"cloth not found"})
}
else
{res.status(200).json({cloth:cloth})}
}
catch(error){
console.error("Error getting cloth",error);
res.status(500).json({message:"Failed to retrive Cloth data"})
}
}

getAllCloths =async(req,res,next)=>{
    try{
      
  const  cloth=await cloth.find()
    if(!cloth)
    {
    res.status(404).json({message:"cloth not found"})
    }
    else
    {res.status(200).json({cloth:cloth})}
    }
    catch(error){
    console.error("Error getting cloth",error);
    res.status(500).json({message:"Failed to retrive Cloth data"})
    }
    }

updateCloth= async (req,res,next)=>{
    try{
        
        const clothId=req.body 
        const {name ,sku ,images ,quantity ,status}=req.body  
        const  updatedCloth={name ,sku ,images ,quantity ,status}
        const  cloth=await cloth.findByIdAndUpdate(clothId,updatedCloth,{new:true})
        
        if(!cloth)
        {
        res.status(404).json({message:"cloth not found"})
        }
        else
        {res.status(200).json({message:"cloth successfully updated",cloth:cloth})}
        
        }
        catch(error){
        console.error("Error getting cloth",error);
        res.status(500).json({message:"Failed to updateCart"})
        }
}


deleteCloth=async(req, res ,next)=>{
    try{
        const {clothId}=req.body
        
       const deletedCloth= await cloth.findByIdAndDelete(clothId)
        if(!deletedCloth)
        {
        res.status(404).json({error:"cloth not found"})
        }
        else
        {res.status(200).json({message:"cloth deleted successfuly"})}
        
        }
        catch(error){
        console.error("Error getting cloth",error);
        res.status(500).json({message:"Error deleting cloth"})
        }
}

module.exports={addCloth , getCloth , updateCloth , deleteCloth}