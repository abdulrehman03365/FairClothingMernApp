import { Component, useEffect, useState } from "react";
import './signUp.css'
import {useForm} from "react-hook-form"
import Nevbar from "../../components/navBar/nevbar";
function SignUpform(){
const {register, handleSubmit , formState : {errors}}=useForm();
const [checkBoxes,setCheckBoxes]  = useState({userCheckBox:false,adminCheckBox:false})
const [rememberUser,setRememberUser]=useState(false)
function onSubmit (data){
  

  
  fetch('https:\\localhost:8000\\api\auth\signup',{method:'POST',
  headers:{
    'Content-type':'applicaion/json'
  
  }, 
  
  body :JSON.stringify(data)} ).
  then(
    response=>{if (response.ok)alert('Successfully signed Up;')}
  )
  .catch(error => {
    console.error('Error:', error);
    alert('Error:', error)
  });


} 

const handlecheckBoxChange=(event)=>{
  const {name ,checked}=event.target
  setCheckBoxes((prevCheckedBoxes)=>({
  
    ...prevCheckedBoxes,
    [name]:checked
  
  })

)}


const handleRememberUser=()=>{

}

  return(
    <>
    <Nevbar></Nevbar>
      
      
    <div className="signupformContainer">
    <div className="signUpForm" >
      <form className="form" onSubmit={handleSubmit(onSubmit)}>

        <h1 className="title">Sign up</h1>
        <div className="inputContainer">
          <input type="text" {...register("username",{required:true})} aria-invalid={errors.username ? "true" : "false"} className="input" name="username"  />
          <label  className="label">Username</label>
        </div>
        {errors.username?.type==='required' && <p role={'alert'}>Username is required</p>}
  
        <div className="inputContainer">
          <input type="text" {...register("email",{required:true , pattern :{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:'Plz enter a valid email'}})}    className="input" name ="email"  />
          <label  className="label">Email</label>

        </div>
        {errors.email?.type==='required' && <p role={'alert'}>Email is required</p>}
        {errors.email?.type==='pattern'&&<p role={'alert'}>Plz enter a valid email</p>}
        
  
        <div className="inputContainer">
          <input type="text" {...register("password",{required:true , minlength:8})}  className="input" name="password" />
          <label  className="label">Password</label>
        </div>
        {errors.password?.type==='required' && <p role={'alert'}>Password is required</p>}
        
  
        <div className="inputContainer">
          <input type="text" {...register("confirmPassword",{required:true , minlength:8})} className="input" name="confirmPassword"/>
          <label  className="label">Confirm Password</label>
        </div>
        {errors.confirmPassword?.type==='required' && <p role={'alert'}>Confirm password is required</p>}

        <div>
          <label >
          <input type="checkbox" name="userCheckBox" checked={checkBoxes.userCheckBox} onChange={handlecheckBoxChange} />
          User SignUp
          </label>
          <label >
          <input type="checkbox" name="userCheckBox" checked={checkBoxes.adminCheckBox} style={{paddingLeft:'1.2rem'}} onChange={handlecheckBoxChange} />
          Admin SignUp
          </label>

        

        </div>
        <div>  <label >
          <input type="checkbox" name="userCheckBox" checked={rememberUser} onChange={handleRememberUser} />
          Remember me
          </label></div>
  
        <input type="submit" className="submitBtn" value="Sign up"/>
      </form>
    </div>  
    </div>
     
   
    </>
  )
}


       


export default SignUpform;