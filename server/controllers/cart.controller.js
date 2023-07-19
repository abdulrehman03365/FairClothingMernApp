import cart from '../model/cart.model'
createCart=async(req,res,next)=>{
    try{
        const userId=req.userId
        const {items,quantity}=req.body.params
        const newCart = new cart({userId:userId,items:items,quantity:quantity})
        await newCart.save()
        res.status(200).json({message:'Cart created successfully', cart:newCart})
        }
        catch(error){
        console.error("Error creating cart", error);
        res.status(500).json({message:"Failed to createCart"})
        }
}

getCart =async(req,res,next)=>{
try{
const userId=req.userId    
await cart.findById({userId})
if(!cart)
{
res.status(404).json({error:"cart not found"})
}
else
{res.status(200).json({cart:cart})}
}
catch(error){
console.error("Error getting cart",error);
res.status(500).json({message:"Failed to retrive Cart data"})
}
}

updateCart= async (req,res,next)=>{
    try{
        const userId=req.userId
        const {items,quantity}=req.body.params
        await cart.findByIdAndUpdate({userId},{userId:userId,items:items,quantity:quantity},{new:true})
        
        if(!cart)
        {
        res.status(404).json({error:"cart not found"})
        }
        else
        {res.status(200).json({cart:cart})}
        
        }
        catch(error){
        console.error("Error getting cart",error);
        res.status(500).json({message:"Failed to updateCart"})
        }
}

deleteCart=async(req, res ,next)=>{
    try{
        const userId=req.userId
        await cart.findByIdAndDelete({userId})
        
        if(!cart)
        {
        res.status(404).json({error:"cart not found"})
        }
        else
        {res.status(200).json({cart:cart})}
        
        }
        catch(error){
        console.error("Error getting cart",error);
        res.status(500).json({message:"Error deleting cart"})
        }
}

module.exports={createCart , getCart , updateCart , deleteCart}