const {
  log} = require("firebase-functions/logger");
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
      
        if (req.body.roles.length !==0) {
          const roles = await role.find({ name: { $in: req.body.roles } });
      
          if (!roles.length) {
            res.status(404).send({ message: "Roles do not exist" });
            return;
          }
      
          
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
  log("sign In Controller is executing"); 
  try {
    const user_res = await User.findOne({'email': req.body.email}).populate('Roles').exec();
    console.log("user_res ", user_res);
    if (!user_res) {
      console.log('Invalid Email or password provided.');
      return res.status(400).send({message: 'Invalid Email or password'});
    }
  
    const isValidPassword = await bcrypt.compare(req.body.password, user_res.password);
  
    if (!isValidPassword) {
      console.log('Password is not valid');
      return res.status(401).send({message: 'Invalid Email or password'});
    }
  
    const token = jwt.sign({ id: user_res._id }, process.env.JWT_SECRET, { expiresIn: 1200 });
  
    req.session.token = token;
  
    const userCategory = user_res.Roles.map(role => role.name);
  
    console.log("Email and Password are correct and user is successfully logged in", {
      'userId': user_res._id,
      'userCategory': userCategory,
      'authToken': token
    });
  
    return res.status(200).send({
      'userId': user_res._id,
      'userCategory': userCategory,
      'authToken': token,
      'expiresIn': 1200
    });
  } catch (error) {
    console.error("Error occurred during SignIn Controller:", error);
    return res.status(500).send("Internal Server Error");
  }
  

    
 

    

}


signOutController =(req,res,next)=>

{

try{
req.session.token=null;
res.status(200).send({'message':"User is created Succfully"})
}
catch(err)
{
console.log("Error Signing Out", err);    
res.status(500).send({'message':"Error Signing Out"})

}


}


module.exports={
  signInController,
  signOutController,
  signUpController
}