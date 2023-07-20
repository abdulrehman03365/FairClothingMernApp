verifyClothsParam=(req,res,next)=>{

    if(req.method==='POST')
    {
       const {name,sku,images, quantity ,status }=req.body;
       if (!name ||!sku || !images || !quantity || !status  )
       {
        return res.status(400).json({ error: 'Invalid data is provided' });

       }
       else{
            next()
       }
       
    }

    else if(req.method==='GET')
    {
        const {clothId}=req.params;

        if(!clothId)
        {
            return res.status(400).json({ error: 'Invalid data is provided' });

        }
        else{
            next()
        }

    }

    else if ( req.method==='DELETE')
    {
        const {clothId}=req.params;

        if (!clothId)
        {
 
            return res.status(400).json({ error: 'Invalid data is provided' });

        }
        else{
            next()
        }

    }

    else if (req.method==='PUT' )
    {
        if (clothId || !name || !sku || !quantity || status ) {
            return res.status(400).json({ error: 'Invalid data is provided' });
          } else {
            next();
          }
    }

}

module.exports={verifyClothsParam}