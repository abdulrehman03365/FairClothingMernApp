import { Component , useState } from "react";
import Footer from '../../components/Footer/Footer'
import './signIn.css'
import Button from 'react-bootstrap/Button';
import {Alert} from 'react-bootstrap'
import {useForm} from "react-hook-form"
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import Alertcomp from "../../components/alertComp";
import { signIn } from "../../api";
import Nevbar from "../../components/navBar/nevbar";
import { useDispatch , useSelector } from "react-redux";
import { setUserAuth , setUserType } from "../../slices/authSlice";
import userCatagory from "../../utils/utils"; 
import { useEffect } from "react";
function SignIn()
   
 {
    const dispatch=useDispatch();  
    const { isLoggedIn, setIsLoggedIn }=useContext(AuthContext)
    const {register, handleSubmit , formState : {errors} }=useForm();
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] =useState('')
    const [showErrorAlert ,setShowErrorAlert]=useState(false)
    const navigate = useNavigate();

     function handleResetPass(){
 console.log("Reset Password is called");
    }
    async function handleSignIn(data,event){
      
      event.preventDefault()
        try{
          const response =await signIn(data)
          if (response.ok)
          {    
            dispatch(setUserAuth(true))
            dispatch(setUserType("user")) 
             
            navigate("/bookMarque")

                      
          }


        }
        catch(error)
        {
          console.log("Error SignIng In :"+error);
          setErrorMessage("Error Sigining In")  
          setShowErrorAlert(true)
        }
        }

      
        
        return(

            <>
      
      <Nevbar></Nevbar>
      {showErrorAlert && <Alertcomp varient={"danger"} show={showErrorAlert} onClose={()=>{setShowErrorAlert(false)}} message={errorMessage} ></Alertcomp>}
      
      <div className="formContainer">
      <div className="logInForm" >
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>

        <h1 className="title">Log In</h1>
  
        <div className="inputContainer">
          <input type="text" {...register("email",{required:true , pattern :{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:'Plz enter a valid email'}})}    className="input" name ="email"  />
          <label for="" className="label">Email</label>

        </div>
        {errors.email?.type==='required'  && <p style={{ color: 'red' }} role={'alert'}>Email is required</p>}
        {errors.email?.type==='pattern'&&<p style={{ color: 'red' }} role={'alert'}>Plz enter a valid email</p>}
        
  
        <div className="inputContainer-pass">
          <input type="text" {...register("password",{required:true , minlength:8})}  className="input" name="password" />
          <label for="" className="label">Password</label>
        </div>
        {errors.password?.type==='required' && <p style={{ color: 'red' }} role={'alert'}>Password is required</p>}
        <a onClick={handleResetPass}>Click here to reset password</a>
        <input type="submit" className="submitBtn" value="Log In"/>

      </form>
      
        {/* {successMessage && <div>{successMessage}</div>}
        {errorMessage && <div>{errorMessage}</div>} */}
    </div> 
   
      </div>
      {/* <Footer></Footer> */}
      </>
       
            
        )}
     
export default SignIn;