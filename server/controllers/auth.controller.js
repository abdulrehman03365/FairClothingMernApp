const db = require('../model');
const User=require('../model/user.model')
const role=require('../model/role.model');
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')
const flash=require('connect-flash');
const { request } = require('express');
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
                user.Role=roles.map((role)=>{role._id})
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
            user.Role=[result_user._id]
            user.save((err)=>{
                if(err)
                {
                    res.status(500).send({'message':err})
                }
            
            else

            {
                log("Created User details " + result_user)
                res.status(201).send({"message":"User is created successfully"})
            }
            
            })

        })






    })






}
signInController = (req,res,next)=>{
   
    User.findOne({'email':req.body.email},async(err,email)=>{
  
       
        if(err)
        {
            console.log(err);
            console.log("error finding email",err.message);
            res.status(500).send({"message":"Error siging In"})
            return;
        }
                                                                                                                                                                                                                                                                                                                      
        if (!email)
        {
            // res.status(402).send({'message': "User not found"})
            // req.flash('error','Invalid username or password')
            // res.redirect('/signIn')
            
            console.log('Invalid Email or password provided.');
            res.status(400).send({message:'Invalid Email or password'})
            return;
        }
        else
        {

            isValidPassword=  bcrypt.compare(req.body.password,email.password)
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
               
             const token=jwt.sign({id:email._id},process.env.JWT_SECRET,{expiresIn:1200})
               
               req.session.token=token
              
               var authorities =[]
               for(i=0 ;i<email.roles;i++)
               {
                authorities.push("Role_"+email.roles[i].name.toUpperCase())
               }
               console.log("Email and Password are correct and user is successfuly Loged In",{'userId':email._id,
               'authoroties':authorities,'authToken':token});
               res.status(200).send({'userId':email._id,'authoroties':authorities,'authToken':token,'expiresIn':1200})
              



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
console.log("Error Signing In", err);    
res.status(500).send({'message':"Error Signing In"})

}


}


module.exports={
  signInController,
  signOutController,
  signUpController
}