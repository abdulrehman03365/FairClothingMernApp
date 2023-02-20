import { Component , useState } from "react";
import './signIn.css'
import {Alert} from 'react-bootstrap'
import {useForm} from "react-hook-form"
import {useNavigate} from 'react-router-dom'
import Alertcomp from "../../components/alertComp";
 function SignIn()
   {
    const {register, handleSubmit , formState : {errors}}=useForm();
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] =useState('')
    const [showErrorAlert ,setShowErrorAlert]=useState('false')
    const navigate = useNavigate();
    
    async function handleSignIn(data,event){
        event.preventDefault()
        try{
          const response= await fetch('http://localhost:8000/api/auth/signIn',{method:'POST',
        headers:{
          'Content-type':'application/json'
        
        }, 
        body :JSON.stringify(data)}  )
          if (response.ok)
          {
            console.log(response);
            setSuccessMessage("Successfully Loged In")
            navigate("/becomePartner")
            

          }  
          else if (response.status!=200)
          {
          const jsonResp= await response.json()
          console.error('Error:'+ jsonResp.message);
          setErrorMessage("Error :" + jsonResp.message)
          setShowErrorAlert(true)
          }


        }
        catch(error)
        {
          setErrorMessage(error.message)
         
          setShowErrorAlert(true)
        }
        }

        const [show,setShow]=useState(false);

        return(

            <>
      
      <Alert show={showErrorAlert} message={errorMessage} varient={"danger"} dismissible onClose={()=>{showErrorAlert(false)}} 
      />
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
        
        {/* {successMessage && <div>{successMessage}</div>}
        {errorMessage && <div>{errorMessage}</div>} */}
    </div> 
      </>
       
            
        )}
     
export default SignIn;