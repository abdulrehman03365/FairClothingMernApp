
const db=require('../model')
const Roles=db.Roles;
const user=db.user;
checkEmptyfields=(req,res,next)=>{


if (!req.body.email.trim() || !req.body.password.trim())
res.status(400).send({message:'Signup Field must not be empty'})
next()
}




checkDuplicateUser= (req,res,next)=>{
 user.find({'name':req.body.username}
,function(err,result){

    if (err)
    {
    return    res.status(400).send({message:{err}})
    
    }
try{
    console.log(result);
    if (result.length!=0)
  {
   return res.status(500).send({message:'Failed ! username already exist'});
       

  }
    
}
catch(error){

    res.status(500).send({message:'Failed Verifying username'});
    return ;

    

            
}


    next()


})
}


checkDuplicateEmail= (req,res,next)=>{
    user.find({'email':req.body.email}, function(err,result){

if(err)
{
return res.status(500).send({message : err.message});

}
try{

    console.log("Duplicate Email result " + result);
    if (result.length!=0)
   { 
    return res.status(400).send({error :"Failed ! email already exist"})
    }
}

catch(error){
   
   return res.status(500).send({error :"Failed Verifying email"})
     ;

}
})


next()

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