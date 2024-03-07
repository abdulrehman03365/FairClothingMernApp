const { cloth } =require( '../model/cloths.model')
const {upload}=require('../services/imageService')

async function uploadImages(images) {
  
  
  
  const images_url=[]
    try {
      await Promise.all(
        images.map(async (imageObject) => {
      if(imageObject.base64Image)
      {
        try {
          const imageUrl = await upload(imageObject.imageName, imageObject.base64Image, imageObject.imageType);
          images_url.push(imageUrl);
        } catch (error) {
          console.error(`Error uploading image (${imageObject.imageName}):`, error.message);
          // Handle or log the error as needed
        }
      }
      else
      {
         images_url.push(imageObject.imageUrl)
      }
        })
      );

  
    //   console.log('All images uploaded successfully:', images_url);
      return images_url;
    } catch (error) {
      console.error('Error during image upload process:', error.message);
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
const  clothId = req.params.clothId   
const retrievedCloth=await cloth.findById(clothId)
if(!retrievedCloth)
{
res.status(404).json({message:"cloth not found"})
}
else
{res.status(200).json({cloth:retrievedCloth})}
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
        
        const clothId=req.params.clothId 
        const {name ,sku ,images ,quantity ,status}=req.body  
        const images_url=await uploadImages(images)
        const  updatedCloth={name ,sku ,images:images_url,quantity ,status}
        const  Cloth=await cloth.findByIdAndUpdate(clothId,updatedCloth,{new:true})
        
        if(!Cloth)
        {
        res.status(404).json({message:"cloth not found"})
        }
        else
        {res.status(200).json({message:"cloth successfully updated",cloth:cloth})}
        
        }
        catch(error){
        console.error("Error getting cloth",error);
        res.status(500).json({message:"Failed to update Cloth"})
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