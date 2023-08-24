const db = require('../model');
const User=require('../model/user.model')
const role=require('../model/role.model');
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')
const flash=require('connect-flash');
const { request } = require('express');
const { Roles } = require('../model');
var enc_pass=""
require('dotenv').config()




signUpController= async (req,res,next)=>{
  console.log('inside signUp Controller');
  var  user = new User( 
        {
            name : req.body.username,
            email: req.body.email,
            password : enc_pass
        }
        
        )
    
const myPass=req.body.password


    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(myPass,salt);
        user.password=hash;
        console.log("User Object :",user);
        const savedUser = await user.save();
      
        if (req.body.roles) {
          const roles = await role.find({ name: { $in: req.body.roles } });
      
          if (!roles.length) {
            res.status(404).send({ message: "Roles do not exist" });
            return;
          }
      
          savedUser.Roles = roles.map(role => role._id);
        } else {
          const resultRole = await role.findOne({ name: "user" });
          savedUser.Roles = [resultRole._id];
        }
      
        await savedUser.save();
        console.log("Created User Data", user)
        res.status(201).send({ message: "User is created successfully" });
      } catch (err) {
        console.error(err);
      
        if (err instanceof mongoose.Error.ValidationError) {
          res.status(400).send({ message: err.message });
        } else {
          res.status(500).send({ message: "Internal Server Error" });
        }
      }
      






}



signInController =async (req,res,next)=>{
   
    User.findOne({'email':req.body.email}).populate('Roles').exec(async(err,user_res)=>{
  
       
        if(err)
        {
            console.log(err);
            console.log("error finding email",err.message);
            res.status(500).send({"message":"Error siging In"})
            return;
        }
                                                                                                                                                                                                                                                                                                                      
        if (!user_res)
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
            console.log("user Data", user_res);
            bcrypt.compare(req.body.password, user_res.password)
            .then(isValidPassword => {
                if (!isValidPassword) {
                    console.log("isValidPassword" ,isValidPassword);
                    console.log('Password is not valid');
                    res.status(401).send('Invalid password provided');
                    return;
                }
        
                const token = jwt.sign({ id: user_res._id }, process.env.JWT_SECRET, { expiresIn: 1200 });
        
                req.session.token = token;
        
                const userCategory = user_res.Roles.map(role => role.name);
        
                console.log("Email and Password are correct and user is successfully logged in", {
                    'userId': user_res._id,
                    'userCategory': userCategory,
                    'authToken': token
                });
        
                res.status(200).send({
                    'userId': user_res._id,
                    'userCategory': userCategory,
                    'authToken': token,
                    'expiresIn': 1200
                });
            })
            .catch(error => {
                console.error("Error occurred during password comparison:", error);
                res.status(500).send("Internal Server Error");
            });
        
           
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