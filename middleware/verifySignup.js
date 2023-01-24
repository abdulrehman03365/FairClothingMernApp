const db=require('../model')
const Roles=db.Roles;
const user=db.user;

checkEmptyfields=(req,res,next)=>{

    if (!req.body.username)
    if (!req.body.username)
    {
        res.status(400).send({'message':"User Name cannot be empty"})
        return

    }
    
    if (!req.body.email)
    {
        res.status(400).send({'message':"Email cannot be empty"})
        return
    }

    
    if (!req.body.password)
    {
        req.status(400).send({'message':"Email cannot be empty"})
        return
    }

 next()
}




checkDuplicateUser=async (req,res,next)=>{
await user.find({'name':req.body.username}
,function(err,result){

    if (err)
    {
        res.status(400).send({message:{err}})
    return;
    }
    
    console.log(result);
    if (result.length!=0)
    {
        
        res.status(500).send({message:'Failed ! username already exist',
    result :result});
        return ;
    }

    next()


})
}


checkDuplicateEmail=async (req,res,next)=>{
 await   user.findOne({'email':req.body.email}, function(err,result){

if(err)
{
res.status(500).send({message : err})
return;
}

console.log(result);
if (result.length!=0)

res.status(400).send({error :"Failed ! email already exist",result :result})
return ;
})


next()

}




verifyRolesExist=  (req,res,next)=>{
    if(req.body.roles)
{
    for (var i =0; i<req.roles.length ; i++)
    {
        if (!Roles.includes(req.roles[i]))
        {
            res.status(400).send(`Role ${req.roles[i]} does not exist`)
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