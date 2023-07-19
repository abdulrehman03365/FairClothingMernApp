import cart from '../model/cart.model'

async function craeteCart(req,res,next){
try{
const newCart = new cart()
await newCart.save()
res.status(200).json({message:'Cart created successfully', cart:newCart})
}
catch(error){
console.error("Error creating cart", error);
}
}

getCart=()=>{

}

updateCart=()=>{

}

deleteCart=()=>{

}

module.exports={createCart , getCart , updateCart , deleteCart}