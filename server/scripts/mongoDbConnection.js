const dotenv = require('dotenv');
const   dotenvExpand = require('dotenv-expand');
const   config = dotenv.config();
dotenvExpand.expand(config)   

const mongoose =require('mongoose')
class MongoDBConnection{

   
    constructor(){
  
       
        if (!MongoDBConnection.instance)
        {
            const uri=process.env.uri;
            console.log(process.env.uri);
            mongoose.set('strictQuery', true);
            mongoose.connection.on('error',(error)=>{console.error('connection to MongoDB disconnected :');})
            mongoose.connection.on('connected',(data)=>{console.log('connected to mongoDB');})
            mongoose.connection.on('connecting',()=>{console.log('connecting to mongodb');})
            mongoose.connection.on('close',()=>{console.log('MongoDB connection closed');})
            mongoose.connect(uri,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
              }).then(()=>{
              console.log("You are connected successfully to MongoDB");
            })
        
             return MongoDBConnection.instance =mongoose.connection;
        }

        else

       return MongoDBConnection.instance;
    }
}

module.exports = MongoDBConnection;