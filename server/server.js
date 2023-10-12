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
const { mongoose } = require('./model/index');
const flash = require('connect-flash-plus');
const { authJwtMiddleware } = require('./middleware');
app.set('port',process.env.PORT || 8000);
require('dotenv').config()
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp();
//Middlewares
// console.log(join(__dirname,'public'));

app.use(express.json());
app.use(cors({
	credentials: true,
	origin: process.env.NODE_ENV=='development' ? 'http://localhost:3000':'https://fairclothing-f9c79.web.app',
	allowedHeaders: ['Content-Type', 'Authorization']
  }));

const parentDir = path.dirname(__dirname);
app.use(express.static( path.join(parentDir, 'client', 'build')));
const buildPath=path.join(parentDir, 'client', 'build')
console.log("path is ", buildPath);
app.use(express.urlencoded({ limit: '10mb', extended: false }))
app.use(multer({limits: { fieldSize: 10 * 1024 * 1024 }}).any());

// io.on('connection', (socket) => {
// 	console.log('a user connected via socket.io');
// 	socket.on('chat',(msg)=>{console.log('you recieved this message on socket:'+msg);})


//   });


app.use(cookieSession({
	name:'NodeJsBookingWebsite',
	secret:'COOKIE_SECRET',
	httpOnly:true,
	maxAge:1000*10*10 
	
	

}))


// Setting view engine
Handlebars=handlebars.create({defaultLayout:'main'});
// app.engine('handlebars',Handlebars.engine)
// app.set('view engine','handlebars');


// app.use(bodyParser.json());
require('./routes/auth.routes.js')(app);
require('./routes/user.routes.js')(app);
require('./routes/cart.routes.js')(app);
require('./routes/cloths.routes')(app)


app.post('/api/addMarque', (req, res) => {
  const base64Image=req.body.base64Image.replace(/^data:image\/\w+;base64,/, '')
  const buffer=Buffer.from(base64Image,'base64')
  
  res.sendStatus(200);
});











//get mongodb connection
const MongoDBConnection =require('../server/scripts/mongoDbConnection')
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

 





// // Check if running in Firebase environment
// const isFirebase = !!process.env.FIREBASE_CONFIG;

// // Export app as a Firebase Cloud Function if running on Firebase
// if (isFirebase) {
//   exports.app = functions.https.onRequest( app);
// } else {
// app.listen(app.get('port'), function(){
// 	console.log('Express started on port ' + app.get('port') + ' in ' + app.get('env') + ' mode.');
// });}

exports.app = functions.https.onRequest( app);

// module.exports = app;