import { Component } from "react";
import './signIn.css'
import {useForm} from "react-hook-form"
import {useNavigate} from 'react-router-dom'
 function SignIn()
   {
    const {register, handleSubmit , formState : {errors}}=useForm();
     const navigate = useNavigate();
      function handleSignIn(data,event){
        event.preventDefault()
        fetch('http://localhost:8000/api/auth/signIn',{method:'POST',
        headers:{
          'Content-type':'applicaion/json'
        
        }, 
        body :JSON.stringify(data)} ).then(data => {
          console.log('Success:', data);
          navigate("/becomePartner")
          
        })
        .catch(error => {
          console.error('Error:', error);
        });
       }



        return(

            <>
      
      
      <div className="logInForm" >
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>

        <h1 className="title">Log In</h1>
  
        <div className="inputContainer">
          <input type="text" {...register("email",{required:true , pattern :{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:'Plz enter a valid email'}})}    className="input" name ="email"  />
          <label for="" className="label">Email</label>

        </div>
        {errors.email?.type==='required' && <p role={'alert'}>Email is required</p>}
        {errors.email?.type==='pattern'&&<p role={'alert'}>Plz enter a valid email</p>}
        
  
        <div className="inputContainer">
          <input type="text" {...register("password",{required:true , minlength:8})}  className="input" name="password" />
          <label for="" className="label">Password</label>
        </div>
        {errors.password?.type==='required' && <p role={'alert'}>Password is required</p>}

        <input type="submit" className="submitBtn" value="Log In"/>
      </form>
    </div> 
      </>
       
            
        )}
     
export default SignIn;