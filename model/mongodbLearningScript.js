const mongoose =require("mongoose")
const userModel=require('./user.model')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const user= require('./user.model')
const role=require('./role.model')
const db=require('./index')
const uri = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.gzyxqbq.mongodb.net/BookingApplicationDB?retryWrites=true&w=majority`
mongoose.set('strictQuery', true);
mongoose.connection.on('error',(error)=>{console.error('connection disconnected :');})
mongoose.connection.on('connected',(data)=>{console.log('connected to mongodb');})
mongoose.connection.on('connecting',()=>{console.log('connecting');})
mongoose.connection.on('close',()=>{console.log('connection closed');})
mongoose.connect(uri,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(
    ()=>{
//addrole()
//adduser()
//getAllRoles()
// createUser()
//updateUser()
//  findRoles()


    })

  function findRoles()
{
  role.find({name:{$in :['user','admin']}},function(err,roles){
    if(err)
    {
        console.log(err);
        res.status(404).send({'message':"Roles does not exist"})
    }

    console.log(roles[0])
    
    // user.roles=roles.map((role)=>{})

})}

// function addrole()
// {const role =db.role;
// new role({name:'owner'}).save((err,res)=>{if (err)
// console.error(err)
// else 
// console.log(res,'\n')
// console.log('Role is successfully added')});
// }

// function createUser(){

// user({name:'abdul',email:'abdulrehman03365@gmail.com'
// ,password:'Cmadak402!'}).save((err,res)=>{if (err)console.log(err)
//   else
//   console.log(res);})
// }
// function getAllRoles(){

// const role=db.role  
// role.find({},(err,res)=>{if (err) console.log(err)
//   else
//   console.log(res);})
// }

// function updateUser(){
// user.findOneAndUpdate({name:'abdul'},
// {password:'Cmadak402@'},
// {returnDocument:'after'},(err,res)=>{
//   if (err)
//   {console.log('error'+err);
//   }
//   else
//   console.log(res);
// })

// }



// mongoose.connection.close()
