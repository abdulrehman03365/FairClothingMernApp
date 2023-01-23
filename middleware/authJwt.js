const jwt = require('jsonwebtoken');
const { Roles } = require('../model');

verifyJwtToken=(req,res,next)=>{

    token = req.session.token;

    if(!token)
    {
res.status(403).send({'message':"Tocken is not provided"})
return;    
}

    if (token)
    {
           jwt.verify(token,secret,function (err,decoded){
            if(err)
            {
                console.log(err);
            res.status(401).send({'message':"unauthenticated"})                
        return;    
        }

            else
            {
                req.userId=decoded.id;

            next()
            }
           })
           
    }


}


isadmin=(req,res,next)=>{

}

isUser=(req,res,next)=>{

}


isOwner=(req,res,next)=>{

}



login=(req,res,next)=>{

}

signOut=(req,res,next)=>{}
