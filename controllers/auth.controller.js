const db = require('../model');
const user=require('../model/user.model')
const role=require('../model/role.model');
const { user } = require('../model');
const bcrypt=require('bcrypt')


SignupController=(req,res,next)=>{

const myPass=req.body.Password
bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(myPass,salt, function(err,has){

            enc_pass=hash
        })
    })
    


const user = new user( 
{
    name : req.body.name,
    email: req.body.email,
    Password : enc_pass
}

)



    db.user.create({enc_pass},function(err,user){
        if (err)
        {
            console.log(err);
            res.status(500).send({"message":err.message})
            return;
        }


        if (req.body.roles)
        {

            role.find({name:{$in :req.body.roles}},function(err,roles){
                if(err)
                {
                    console.log(err);
                    res.status(404).send({'message':"Roles does not exist"})
                }

                
                
                user.roles=roles.map((role)=>{})

            })
        
        
        }






    })




}