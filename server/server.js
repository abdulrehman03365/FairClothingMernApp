const express = require('express');
const mysql=require('mysql2')
const app = express();
const http = require('http');
const server = http.createServer(app);
const functions = require('firebase-functions')
const multer =require('multer');
const path=require('path')
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const handlers=require('./lib/handlers');
const { join } = require('path');
const bcrypt =require('bcrypt');
const cors=require('cors')
const socketService=require('./services/socketService')
const cookieSession=require('cookie-session');
// const db = require('./model/index');
const { mongoose, cloth } = require('./model/index');
const flash = require('connect-flash-plus');
const { authJwtMiddleware } = require('./middleware');
app.set('port',process.env.PORT || 8000);
require('dotenv').config()
const admin = require('firebase-admin');
const clothsController =require ('./controllers/cloths.controller')
const clothRoutes=require('./routes/cloths.routes')

// Initialize Firebase Admin SDK
admin.initializeApp();
//Middlewares
const parentDir = path.dirname(__dirname);
app.use(express.static( path.join(parentDir, 'client', 'build')));
const buildPath=path.join(parentDir, 'client', 'build')
console.log("path is ", buildPath);
app.use(express.urlencoded({ limit: '10mb', extended: false }))
app.use(multer({limits: { fieldSize: 10 * 1024 * 1024 }}).any());
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const config = dotenv.config();
dotenvExpand.expand(config)   
app.use(express.json());
app.use(cors({
	credentials: true,
	origin: process.env.NODE_ENV=='development' ? 'http://localhost:3000':'https://fairclothing-f9c79.web.app/',
	allowedHeaders: ['Content-Type', 'Authorization']
  }));



app.use(cookieSession({
	name:'NodeJsBookingWebsite',
	secret:'COOKIE_SECRET',
	httpOnly:true,
	maxAge:1000*10*10 
	
	

}))
 







// app.use(bodyParser.json());
app.use('/api/cloth',clothRoutes)
// app.get('/api/cloth/getAll',clothsController.getAllCloths)
require('./routes/auth.routes.js')(app);
require('./routes/user.routes.js')(app);
require('./routes/cart.routes.js')(app);









//get mongodb connection
class MongoDBConnection{

   
    constructor(){
  
       
        if (!MongoDBConnection.instance)
        {
            const uri=process.env.URI;
            console.log("MongoDB uri :" ,process.env.URI);
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

const db=new MongoDBConnection();




// get mysql connection 
const pool=mysql.createPool({
	host:process.env.DB_HOST,
	user:process.env.DB_USER,
	password:process.env.DB_PASSWORD,
	connectionLimit:10,
	database:process.env.DB_DATABASE,
	multipleStatements:true

})

app.get('/api/auth/signIn',(req,res,next)=>{req.statusCode(200).send({message:"test sign In on gcf"})})

app.get('/call_sp',(req,res)=>{
	pool.getConnection((err,conn)=>{
		if (err)
		{
			console.log('error :' +err.stack );
		}
		conn.query('CALL sp_getAll()',(err,results,fields)=>{
			if (err)
		{
			console.log('error :' +err.stack );
		}
			console.log("fields =" + fields);
			console.log("results =" + results);
			res.sendStatus(200)
			

		})

		conn.query('CALL sp_count_5(?)',["math"],(err,results,fields)=>{
        if(err)
		console.log(err);
		
		console.log("result ="+ results[0][0].no_teachers);
			
		})



	})
	
})
socketService.initSocket(server);

// const viewPath=path.join(__dirname,'./views')
console.log(__dirname);







console.log("build path",  path.resolve(__dirname,"../client/build", "index.html"));
console.log(process.env.uri);


app.use(express.static(path.resolve(__dirname, '../client/build')));
app.get("/*", function (req, res) {
res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));

	
 })

 





// Check if running in Firebase environment

// Check if running in Firebase environment
const isFirebase = !!process.env.FIREBASE_CONFIG;

// Export app as a Firebase Cloud Function if running on Firebase
if (isFirebase) {
  exports.app = functions.https.onRequest( app);
} else {
app.listen(app.get('port'), function(){
	console.log('Express started on port ' + app.get('port') + ' in ' + app.get('env') + ' mode.');
});}
server.on('error',(err)=>{console.log("Error on server "+ err)});
server.on('listening', (err)=>{console.log("server started listning"+ err)});
// exports.app = functions.https.onRequest( app);

// module.exports = app;