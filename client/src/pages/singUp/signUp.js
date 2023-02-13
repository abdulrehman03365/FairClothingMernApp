import { Component } from "react";
import './signUp.css'
import {useForm} from "react-hook-form"

function SignUpform(){

const {register, handleSubmit , formState : {errors}}=useForm();

function onSubmit (data){
  fetch('https:\\localhost:3000\\api\auth\signup',{method:'POST',
  headers:{
    'Content-type':'applicaion/json'
  
  }, 
  body :JSON.stringify(data)} ).then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


} 

};


  return(
    <>
     <div className="signUpForm" >
      <form className="form" onSubmit={handleSubmit(onSubmit)}>

        <h1 className="title">Sign up</h1>
        <div className="inputContainer">
          <input type="text" {...register("username",{required:true})} aria-invalid={errors.username ? "true" : "false"} className="input" name="username"  />
          <label for="" className="label">Username</label>
        </div>
        {errors.username?.type==='required' && <p role={'alert'}>Username is required</p>}
  
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
        
  
        <div className="inputContainer">
          <input type="text" {...register("confirmPassword",{required:true , minlength:8})} className="input" name="confirmPassword"/>
          <label for="" className="label">Confirm Password</label>
        </div>
        {errors.confirmPassword?.type==='required' && <p role={'alert'}>Confirm password is required</p>}
  
        <input type="submit" className="submitBtn" value="Sign up"/>
      </form>
    </div> 
    </>
  )
}


       


export default SignUpform;