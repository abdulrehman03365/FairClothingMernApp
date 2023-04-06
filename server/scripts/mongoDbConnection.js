require('dotenv').config()
const mongoose =require('mongoose')
class MongoDBConnection{
   
    constructor(){
        if (!MongoDBConnection.instance)
        {
            const uri = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.gzyxqbq.mongodb.net/BookingApplicationDB?retryWrites=true&w=majority`
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