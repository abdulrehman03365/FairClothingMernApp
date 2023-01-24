const express = require('express');
const mysql=require('mysql2')
const app = express();
const path=require('path')
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const handlers=require('./lib/handlers');
const { join } = require('path');
const bcrypt =require('bcrypt');
const cors=require('cors')
const cookieSession=require('cookie-session');
const db = require('./model/index');
const { mongoose } = require('./model/index');


require('dotenv').config()

//Middlewares
// console.log(join(__dirname,'public'));
app.use(cors())
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))
// 

app.use(cookieSession({
	name:'NodeJsBokingWebsite',
	secret:'COOKIE_SECRET',
	httpOnly:true

}))

// Setting view engine
Handlebars=handlebars.create({defaultLayout:'main'});
app.engine('handlebars',Handlebars.engine)
app.set('view engine','handlebars');
app.set('port',process.env.PORT || 8000);


require('./routes/auth.routes.js')(app);


//get mongodb connection
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



app.get('/',(req,res)=>{res.render('home')
console.log(process.env);
})
app.get('/newsletter',(req,res)=>{res.render('newsletter',{style:'signup.css'})})
app.post('/api/newsletterSignup',
handlers.api.newsletterSignup)


app.get('/signIn',(req,res)=>{
	res.render('signIn')
})
app.get('/signup',(req,res)=>{
	res.render('signup')})


app.post('/signup-process',async (req,res)=>{
	const password = await bcrypt.hash(req.body.password,10)
	pool.getConnection(function(err,conn){
		if (err)
		console.log(err.stack);
		else{
			email=req.body.email
		conn.query("SELECT email from user where email =?",[email],(err,results,fields)=>{
			if (err)
			{
				console.log(err);
			}
			if(results.length !=0)
			{
			// alert('user with this email already exists')
			console.log('user with this email already exists');
			conn.release()
			res.sendStatus(409)
			
			}
			else{
				
			
				const userDetails = {
					uname:req.body.username,
					email:req.body.email,
					password:password

				}
				conn.query(`INSERT INTO user SET ?` ,[userDetails],(err,fields,results)=>{
					if (err)
					console.log("error: " + err.message);

					else (results)
				})

				// alert('user is created successfully')
				console.log('user is created successfuly');
				conn.release()
				res.sendStatus(201)
				
			}
		
			
		})}
	})
})

// app.post('/newsletter-signup/process',handlers.newsletterSignupProcess)
// app.get('newsletterSignupThank-you',handlers.newsLetterSignupThankYou)

app.listen(app.get('port'), function(){
	console.log('Express started on port ' + app.get('port') + ' in ' + app.get('env') + ' mode.');
});