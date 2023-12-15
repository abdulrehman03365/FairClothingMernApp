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
   
 {  const [showPassword,setShowPassword]=useState(false)
    const [validated, setValidated] = useState(false);
    const dispatch=useDispatch();  
    const { isLoggedIn, setIsLoggedIn }=useContext(AuthContext)
    const {register, handleSubmit , formState : {errors} }=useForm();
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] =useState('')
    const [showErrorAlert ,setShowErrorAlert]=useState(false)
    const navigate = useNavigate();
    const [formData, setFormData]=useState({email:'',password:'',savePassword:false})
     function handleResetPass(){
      console.log("Reset Password is called");
    }
    async function handleSignIn(data){
      
    
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

    
        
        const  handleFormSubmit = (event) => {
          event.preventDefault();
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.stopPropagation();
            // setShowError(true);
          } else {
            // setShowError(false);
            console.log('Form data submitted:', formData);
            const {savePassword,...newformData}=formData
            handleSignIn(newformData)
            // You can perform your authentication logic here
          }
          
          setValidated(true);
        };
      
        const handleDataChange=(event)=>{
          setFormData({...formData,[event.target.name]:event.target.value})
        }

        const handleCheckBoxChange=(event)=>{
          setFormData({...formData,[event.target.name]:event.target.checked})
          localStorage.setItem("email",formData.email)
          localStorage.setItem("password",formData.password)

        }

        return(

        

<>


{/* <Container className="my-auto custom-bg" >
<Row>
  <Col>
  <h1 className="custom text-center">Sign In</h1>
  </Col>
</Row>
  
  <Row >


  
  

<Col  >

  
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

  </Row>


</Container> */}

<Container className="my-auto custom-bg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , width : 'fit-content' }}>
  {/* <Row>
    <Col>
      <h1 className="custom text-center">Sign In</h1>
    </Col>
  </Row> */}
  
  <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Col className="col-auto">
      <h1 className="text-center">Sign In</h1>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Form.Group controlId="signInForm">
          <Form.Label>Email</Form.Label>
          <div className="input-group">
          <Form.Control
            className="custom-form-control"
            required
            name="email"
            value={formData.email}
            type="text"
            placeholder=""
            defaultValue=""
            style={{ width: '19rem' }}
            onChange={handleDataChange}
          />

          </div>
           
               
          <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
          <Form.Label>Password</Form.Label>
          <div className="input-group">
          <Form.Control
            className="custom-form-control"
            required
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleDataChange}
            
            placeholder=""
            defaultValue=""
            style={{ width: '19rem' }}
          />
          <div className="input-group-append"  style={{ position : "absolute" , right:"0" }}>

          <span
            className="input-group-text border-0 bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
            style={{ cursor: 'pointer' }}>
              {showPassword ? (
              <i className="bi bi-eye-slash-fill"></i>
            ) : (
              <i className="bi bi-eye-fill"></i>
            )}       
            </span>

          </div>
         

         
         

          <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
          <Form.Check className="mt-2"
          name="savePassword"
          onchange={handleCheckBoxChange} 
          label="Save Password" />
        </Form.Group>
        <Button className=" btn btn-dark float-end cust-signIn-bt" type="submit">Sign In</Button>
      </Form>
    </Col>
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
       
            



        )
        


        };   
        
      
     
export default SignIn;