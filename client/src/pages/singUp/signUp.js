import { Component, useEffect, useState } from "react";
import './signUp.css'
import { signUp } from "../../api";
import {Row,Col,Container,Form,Button} from "react-bootstrap"
import {set, useForm} from "react-hook-form"
import Nevbar from "../../components/navBar/nevbar";
function SignUpform(){
const {register, handleSubmit , formState : {errors}}=useForm();
const [showPassword,setShowPassword]=useState(false)
const [rememberUser,setRememberUser]=useState(false)
const [errorMessage, setErrorMessage] =useState('')
const [showErrorAlert ,setShowErrorAlert]=useState(false)
const [checkBoxes,setCheckBoxes]  = useState({adminSignUpCheck:'',userSignUpCheck:''})
const [validated, setValidated] = useState(false);
const [formData, setFormData]=useState({email:'',password:'',confirmPassword:''})
const [isPassMatched,setIsPassMatched]=useState('false');
// async function onSubmit (data){
// let roles =[]

// if (checkBoxes.userCheckBox)
// {
//   roles.push('user')
// }
// if (checkBoxes.adminCheckBox)
// {
//   roles.push('admin')
// }
  
//   data={
// ...data,
// roles:roles

//   }
//   const response =await signUp(data)
//   const jsonResp=await response.json();
//   try{
//     console.log("sigup api response",response);
//     if (response.ok)
//     {    
//      alert("User is created successfully")
                
//     }
//     else
//     {
//     console.log(jsonResp.message)
//     alert("Error SignIng Up"+ jsonResp.message)
//     // setErrorMessage(jsonResp.message)  
//     // setShowErrorAlert(true)
//     }



//   }
//   catch(error)
//   {
 
//     setErrorMessage("Error Signing In")  
//     setShowErrorAlert(true)
//   }
  
  


// } 

// const handlecheckBoxChange=(event)=>{

//   const {name ,checked}=event.target
//   setCheckBoxes((prevCheckedBoxes)=>({
  
//     ...prevCheckedBoxes,
//     [name]:checked
  
//   })

// )}


// const handleRememberUser=(event)=>{
// const {name,checked}=event.target;
// setRememberUser(checked)

// }

const handleCheckBoxChange = (event) => {
  const name = event.target.name;

  // Create an object to hold the updated checkbox values
  const updatedCheckBoxes = {
    adminSignUpCheck: name === "adminSignUpCheck",
    userSignUpCheck: name === "userSignUpCheck",
  };

  setCheckBoxes(updatedCheckBoxes);

  console.log(updatedCheckBoxes);
};




const  handleFormSubmit = async (event) => {
 
  if (isPassMatched)
  {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      
    } else {
      
      console.log('Form data submitted:', formData);
      let roles =[]
  
   if (checkBoxes.userSignUpCheck)
  {
     roles.push('user')
   }
   if (checkBoxes.adminSignUpCheck)
  {
    roles.push('admin')
  }
    
  var  data={
  ...formData,
  roles:roles
  
    }
  
  
  
    console.log('data object:', data);
    const response =await signUp(data)
    const jsonResp=await response.json();
    try{
      console.log("sigup api response",response);
      if (response.ok)
      {    
       alert("User is created successfully")
                  
      }
      else
      {
      console.log(jsonResp.message)
      alert("Error SignIng Up"+ jsonResp.message)
      // setErrorMessage(jsonResp.message)  
      // setShowErrorAlert(true)
      }
  
  
  
    }
    catch(error)
    {
   
      setErrorMessage("Error Signing In")  
      setShowErrorAlert(true)
    }
      
      
    }
    
    setValidated(true);
  }

  else
  {

alert(" Password Don't Matched ")
  }
 
 
};

const handlePasswordCheck =async (event) => {
 
  if (event.target.value=="password")
  {
        formData.password=event.target.value;
  }
  else
  {
        formData.confirmPassword=event.target.value
      

  }
  console.log("form Data", formData);
  console.log("Password", formData.password);
  console.log("confirmed Password", formData.confirmPassword);
  if (formData.confirmPassword===formData.password)
  {
setIsPassMatched(true)
  }
  else
  {
setIsPassMatched(false)
  alert("Password Don't matched")  

  }

 console.log("is Password Match",isPassMatched);
}
const handleDataChange=(event)=>{
  console.log("changed form field :",event.target.name);
  setFormData({...formData,[event.target.name]:event.target.value})
}


return(
  <>
  
{/*     
  <Row>
  <Col>
    <h1 className="custom text-center">Sign Up</h1>
  </Col>
</Row> */}

<Container className="my-auto custom-bg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , width : 'fit-content' }}>


<Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  
  <Col className="col-auto">
  
<h1 className="text-center">sign up</h1>
    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Form.Group controlId="signUpForm">
      <Form.Label>User Name</Form.Label>
        <Form.Control
          className="custom-form-control"
          required
          name="username"
          
          type="text"
          placeholder=""
          defaultValue=""
          style={{ width: '19rem' }}
          onChange={handleDataChange}
        />
        <Form.Control.Feedback type="invalid">User Name is required</Form.Control.Feedback>
        <Form.Label>Email</Form.Label>
        <Form.Control
          className="custom-form-control"
          required
          name="email"
         
          type="text"
          placeholder=""
          defaultValue=""
          style={{ width: '19rem' }}
          onChange={handleDataChange}
        />
        <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="custom-form-control"
          required
          name="password"
          onBlur={handlePasswordCheck}
          onChange={handleDataChange}
          type="password"
          id="password"
          placeholder=""
          defaultValue=""
          style={{ width: '19rem' }}
        />
       
          
          
                    
        
        <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          className="custom-form-control"
          required
          name="confirmPassword"
          id="confirmPassword"
          onBlur={handlePasswordCheck}
          onChange={handleDataChange}
          type="password"
          placeholder=""
          defaultValue=""
          style={{ width: '19rem' }}
        />
        <div>
          
        </div>
        <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
        {/* <Form.Check
        name="userSignUpCheck"
        onchange={handleCheckBoxChange} 
        label="User" />
        <Form.Check
        name="adminSignUp"
        onchange={handleCheckBoxChange} 
        label="Admin " /> */}

        <Row className="justify-content-between ">
          <Col>
              <Form.Check
               
                className="mt-2 justify-content-start"
                name="userSignUpCheck"
                checked={checkBoxes.userSignUpCheck}
                onChange={handleCheckBoxChange}
                label="User"
              />
          </Col>
          <Col className="justify-content-end">
            <Form.Check
              checked={checkBoxes.adminSignUpCheck}
              className="mt-2"
              name="adminSignUpCheck"
              onChange={handleCheckBoxChange}
              label="Admin"
            />
          </Col>
        </Row>
      </Form.Group>
      <Button className="btn btn-dark float-end mt-2 cust-signup-bt" type="submit">Sign Up</Button>
    </Form>
  </Col>
</Row>
</Container>
   
 
  </>
)
}














        


export default SignUpform;