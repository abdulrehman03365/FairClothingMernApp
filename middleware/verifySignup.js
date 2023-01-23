const db=require('../model')
const Roles=db.Roles;
const user=db.user;
checkDuplicateUser=(req,res,next)=>{
user.findOne({'user':req.body.username}
,function(err,result){

    if (err)
    {
        res.status(400).send({message:{err}})
    return;
    }

    if (result)
    {
        res.status(500).send({message:'Failed ! username already exist'});
        return ;
    }

    next()


})
}


checkDuplicateEmail=(req,res,next)=>{
    user.findOne({'email':req.body.email},function(res,result){

if(err)
{
res.status(500).send({message : err})
return;
}

if (result)

res.status(400).send('Failed ! email already exist')
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
        checkDuplicateUser
    }