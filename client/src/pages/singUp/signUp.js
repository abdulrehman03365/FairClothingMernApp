import { Component } from "react";
import './signUp.css'
import {useform} from "react-hook-form"

function SignUpform(){

const {register, handleSubmit , formState : {errors}}=useform();

const onSubmit = (data)=>console.log(data);


  return(
    <>
     <div class="signUpForm" >
      <form class="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 class="title">Sign up</h1>
  
        <div class="inputContainer">
          <input type="text" {...register("email",{required:true})}    class="input" name ="email" required />
          <label for="" class="label">Email</label>
        </div>
  
        <div class="inputContainer">
          <input type="text" {...register("username",{required:true})}  class="input" name="username" required />
          <label for="" class="label">Username</label>
        </div>
  
        <div class="inputContainer">
          <input type="text" {...register("password",{required:true , minlength:8})}  class="input" name="password" required minlength="8"/>
          <label for="" class="label">Password</label>
        </div>
  
        <div class="inputContainer">
          <input type="text" {...register("password",{required:true , minlength:8})} class="input"/>
          <label for="" class="label">Confirm Password</label>
        </div>
  
        <input type="submit" class="submitBtn" value="Sign up"/>
      </form>
    </div> 
    </>
  )
}


       


export default SignUpform;