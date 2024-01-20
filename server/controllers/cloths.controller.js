const {cloth} =require( '../model/cloths.model')
const {upload}=require('../services/imageService')

async function uploadImages(images) {
    const images_url=[]
    try {
      await Promise.all(
        images.map(async (image) => {
          try {
            const imageUrl = await upload(image.imageName, image.image, image.imageType);
            images_url.push(imageUrl);
          } catch (error) {
            console.error(`Error uploading image (${image.imageName}):`, error.message);
            // Handle or log the error as needed
          }
        })
      );

  
    //   console.log('All images uploaded successfully:', images_url);
      return images_url;
    } catch (error) {
      console.error('Error during image upload process:', error.message);
      // Handle or log the error as needed
      throw error;
    }
  }
addCloth=async(req,res,next)=>{
    try{
        const {name ,sku ,images ,quantity ,status}=req.body 
        
        const images_url=await uploadImages(images)
      
        const newCloth = new cloth({name,sku,images: images_url,quantity,status})
        

        console.log("images url value :" + images_url[0]);
        console.log("value of image URL :" + typeof images_url);
        console.log("value of newCloth :" + newCloth);
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
       
      
  const  cloths=await cloth.find()
    if(!cloths)
    {
    res.status(404).json({message:"cloth not found"})
    }
    else
    {res.status(200).json({cloth:cloths})}
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

module.exports={addCloth , getCloth , updateCloth , deleteCloth , getAllCloths}