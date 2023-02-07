const db = require('../model');
const User=require('../model/user.model')
const role=require('../model/role.model');
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')
const flash=require('connect-flash')
var enc_pass=""
require('dotenv').config()




signUpController=  (req,res,next)=>{
  const  user = new User( 
        {
            name : req.body.username,
            email: req.body.email,
            password : enc_pass
        }
        
        )
    
const myPass=req.body.password
bcrypt.genSalt(10,(err,salt)=>{
if(err)
{
    console.log(err);
    res.status(500).send({"message":err.message})
    return;
}

        bcrypt.hash(myPass,salt, function(err,hash){
            if(err)
            {
                console.log(err);
                res.status(500).send({"message":err.message})
                return;
            }
            
          enc_pass=hash
        })
    })
    






    user.save( function(err, user){     
        if (err)
        {
            console.log(err);
            res.status(500).send({"message":err.message})
            return;
        }
        if (req.body.roles)
        {
           role.find({name:{$in :req.body.roles}}, function(err,roles){
                if(err)
                {
                    console.log(err);
                    res.status(404).send({'message':"Roles does not exist"})
                }
                user.roles=roles.map((role)=>{role._id})
                user.save( function(err,result){
                    
                    if(err)
                    {
                            console.log(err)
                            res.status(500).send({"message":err})
                            return;
                    }
                    
                    else

                    {

                        res.status(200).send({"message":'User is created successfuly'})
                        return;
                    }

                })

            })
          }

        else
        
        role.findOne({'name':"user"},function(err,result_user){
            if(err)
        {
            res.status(500).send({'message':err})
            console.log(err);
            return;

        }
            user.Roles=[result_user._id]
            user.save((err)=>{
                if(err)
                {
                    res.status(500).send({'message':err})
                }
            
            else

            {
                log(result_user)
                res.status(201).send({"message":"User is created successfully"})
            }
            
            })

        })






    })






}
signInController =(req,res,next)=>{

    User.findOne({'name':req.body.username},(err,user)=>{
  
       
        if(err)
        {
            console.log(err);
            res.status(500).send({"message":err.message})
            return;
        }
                                                                                                                                                                                                                                                                                                                      
        if (!user)
        {
            // res.status(402).send({'message': "User not found"})
            // req.flash('error','Invalid username or password')
            // res.redirect('/signIn')
            
            console.log('Invalid username or password provided.');
            res.status(402).send({message:'Invalid Username or password'})
            return;
        }
        else
        {

            isValidPassword=bcrypt.compare(req.body.password,user.password)
            if(!isValidPassword)
            {
                // alert('Error: Invalid Email or password')
                // req.redirect('/signIn')
                // return;
                console.log('Password is not valid');
                res.status(401).send('invalid password is provided')
                return;
            }

            if(isValidPassword)
            {
               
             const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:60000})
               
               req.session.token=token
               var authorities =[]
               for(i=0 ;i<user.roles;i++)
               {
                authorities.push("Role_"+user.roles[i].name.toUpperCase())
               }
               res.status(200).send({'userId':user._id,'authoroties':authorities,'authTocken':token})
               req.redirect('/')



            }
        }
    })

    
 

    

}


signOutController =(req,res,next)=>

{

try{
req.session.token=null;
res.status(200).send({'message':"User is created Succfully"})
}
catch(err)
{
res.status(500).send({'message':err})

}


}


module.exports={
  signInController,
  signOutController,
  signUpController
}