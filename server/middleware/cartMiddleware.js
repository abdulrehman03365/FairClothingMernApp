

verifyParams=(req,res,next)=>{
const {items}=req.body.parms
const {cartId}=req.params

if (req.method ==='POST')
{
    if (items.length()===0)
    {
    return    res.status(400).json({error:"Invalid data is provided"})
    }
  

    else {
        next()
    }

}
else if (req.method==='GET' || req.method==='PUT' || req.method ==='DELETE')
{
    if (isNaN(cartId) || cartId.trim()==='')
    {
    return    res.status(400).json({error:"Invalid Id is provided"})
    }

    else {
        next()
    }
}


}

module.exports={verifyParams}