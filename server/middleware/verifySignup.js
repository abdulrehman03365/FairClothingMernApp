
const db=require('../model')
const Roles=db.Roles;
const user=db.user;
checkEmptyfields=(req,res,next)=>{


if (!req.body.email.trim() || !req.body.password.trim())
res.status(400).send({message:'Fields must not be empty'})
next()
}




checkDuplicateUser=async (req,res,next)=>{
const result=await user.find({'name':req.body.username})

try{
    console.log("result of finding names "+ result);
    if (result.length!=0)
  {
   return res.status(500).send({message:'Failed ! username already exist'});
       

  }
  else
  {
    next()
  }
    
}
catch(error){

   return res.status(500).send({message:'Failed Verifying username'});
   

    

            

   


}
}


checkDuplicateEmail=async (req,res,next)=>{
    const result =await user.find({'email':req.body.email})
try{


    if (result.length!=0)
   { 
    return res.status(400).send({message :"Failed ! email already exist"})
    }
    else
    {
        next()
    }
}

catch(error){
   
   return res.status(500).send({error :"Failed Verifying email"})
     ;

}
}









verifyRolesExist=  (req,res,next)=>{
    if(req.body.roles)
{
    for (var i =0; i<req.body.roles.length ; i++)
    {
        if (!Roles.includes(req.body.roles[i]))
        {

            res.status(400).send(`Role ${req.body.roles[i]} does not exist`)
            return ;
        }


    }
}
    next()



    }

    module.exports={
        checkDuplicateEmail,
        checkDuplicateUser,
        checkEmptyfields
    }