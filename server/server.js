const express = require('express');
const mysql=require('mysql2')
const app = express();
const http = require('http');
const server = http.createServer(app);

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

//Middlewares
// console.log(join(__dirname,'public'));
//app.use(bodyParser.json());
app.use(express.json());
app.use(cors({credentials: true,
origin: 'http://localhost:3000',
methods: ['GET', 'POST', 'PUT', 'DELETE'],
allowedHeaders: ['Content-Type', 'Authorization']}))
app.use(express.static('public'));
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



require('./routes/auth.routes.js')(app);
require('./routes/user.routes.js')(app);



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


// const viewPath=path.join(__dirname,'./views')
console.log(__dirname);

app.get('/',(req,res)=>{
	
  
	res.sendFile(__dirname +"/views/home.html")


})







console.log(process.env.uri);
socketService.initSocket(server);

app.listen(app.get('port'), function(){
	console.log('Express started on port ' + app.get('port') + ' in ' + app.get('env') + ' mode.');
});