import { Component , useState } from "react";
import Footer from '../../components/Footer/Footer';
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

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {Container} from "react-bootstrap";

function SignIn()
   
 {
    const [validated, setValidated] = useState(false);
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
  
          const jsonResp = await response.json();

          if (response.ok)
          {    
            
      
        localStorage.setItem('token',jsonResp.authToken)
        localStorage.setItem('expiresIn',jsonResp.expiresIn)
            dispatch(setUserAuth(true))
            dispatch(setUserType("user")) 
             
            navigate("/bookMarque")

                      
          }

          else {
          setErrorMessage("Error Sigining In" + jsonResp.message )  
          setShowErrorAlert(true)

          }


        }

        catch(error)
        {
          console.log("Error SignIng In :"+error);
          setErrorMessage("Error Sigining In")  
          setShowErrorAlert(true)
        }
        }

      
        const handleFormSubmit = (event) => {
          event.preventDefault();
        
          const form = event.currentTarget;
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }else {
        
            const formData = new FormData(form);
            for (let [name, value] of formData.entries()) {
                console.log(`${name}: ${value}`);
            }
        }
    
      
          setValidated(true);
          
        };   
        return(


<>
<Nevbar></Nevbar>

<Container className="my-auto " >
<Row>
  <Col>
  <h1 className="custom text-center">Sign In</h1>
  </Col>
</Row>
  
  <Row >

  <Col sm={4}></Col>
  
  

<Col className="d-flex justify-content-center" sm={4}>

  
<Form  noValidate validated={validated} onSubmit={handleFormSubmit}>



 
        <Form.Group controlId="signInForm">
          <Form.Label>Email</Form.Label>
          <Form.Control className="custom-form-control"
            required
            type="text"
            placeholder=""
            defaultValue=""
      
          />
          <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
          <Form.Label>Password</Form.Label>

   <Form.Control
   
    className="custom-form-control"
    required
     type="password"
     placeholder=""
     defaultValue=""
   />
   <Form.Control.Feedback  type="invalid">Password is required</Form.Control.Feedback>

   <Form.Check
          
          label="Save Password"
         
        
        />
        </Form.Group>

        <Button type="submit">Sign In</Button>




</Form>

</Col>

<Col sm={4}></Col>
  </Row>


</Container>



</>




















    //         <>
      
    //   <Nevbar></Nevbar>
    //   {showErrorAlert && <Alertcomp varient={"danger"} show={showErrorAlert} onClose={()=>{setShowErrorAlert(false)}} message={errorMessage} ></Alertcomp>}
      
    //   <div className="formContainer">
    //   <div className="logInForm" >
    //   <form className="form" onSubmit={handleSubmit(handleSignIn)}>

    //     <h1 className="title">Log In</h1>
  
    //     <div className="inputContainer">
    //       <input type="text" {...register("email",{required:true , pattern :{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:'Plz enter a valid email'}})}    className="input" name ="email"  />
    //       <label for="" className="label">Email</label>

    //     </div>
    //     {errors.email?.type==='required'  && <p style={{ color: 'red' }} role={'alert'}>Email is required</p>}
    //     {errors.email?.type==='pattern'&&<p style={{ color: 'red' }} role={'alert'}>Plz enter a valid email</p>}
        
  
    //     <div className="inputContainer-pass">
    //       <input type="text" {...register("password",{required:true , minlength:8})}  className="input" name="password" />
    //       <label for="" className="label">Password</label>
    //     </div>
    //     {errors.password?.type==='required' && <p style={{ color: 'red' }} role={'alert'}>Password is required</p>}
    //     <a onClick={handleResetPass}>Click here to reset password</a>
    //     <input type="submit" className="submitBtn" value="Log In"/>

    //   </form>
      
    //     {/* {successMessage && <div>{successMessage}</div>}
    //     {errorMessage && <div>{errorMessage}</div>} */}
    // </div> 
   
    //   </div>
    //   {/* <Footer></Footer> */}
    //   </>
       
            



        )}
     
export default SignIn;