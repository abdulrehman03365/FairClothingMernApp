import { Component, useEffect, useState } from "react";
import './signUp.css'
import { signUp } from "../../api";
import {Row,Col,Container,Form,Button} from "react-bootstrap"
import {useForm} from "react-hook-form"
import Nevbar from "../../components/navBar/nevbar";
function SignUpform(){
const {register, handleSubmit , formState : {errors}}=useForm();
const [rememberUser,setRememberUser]=useState(false)
const [errorMessage, setErrorMessage] =useState('')
const [showErrorAlert ,setShowErrorAlert]=useState(false)
const [checkBoxes,setCheckBoxes]  = useState({userCheckBox:false,adminCheckBox:false})
const [validated, setValidated] = useState(false);

const [formData, setFormData]=useState({email:'',password:'',confirmPassword:''})
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


const handleCheckBoxChange=(event)=>{
  const {name ,checked}=event.target
  
  setCheckBoxes((checkboxes)=>({...checkboxes,[name]:checked}))
  console.log(checkBoxes);
}

const  handleFormSubmit = async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.stopPropagation();
    
  } else {
    
    console.log('Form data submitted:', formData);
    let roles =[]

 if (checkBoxes.userCheckBox)
{
   roles.push('user')
 }
 if (checkBoxes.adminCheckBox)
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
};

const handleDataChange=(event)=>{
  setFormData({...formData,[event.target.name]:event.target.value})
}













  return(
    <>
    <Nevbar></Nevbar>
      
      
    {/* <div className="signupformContainer">
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
          User Sign Up
          </label>
          <label style={{paddingLeft:'1rem' }}>
          <input type="checkbox" name="adminCheckBox" checked={checkBoxes.adminCheckBox} onChange={handlecheckBoxChange} />
          Admin Sign Up
          </label>

        

        </div>
        <div  >  <label >
          <input type="checkbox" name="userCheckBox" checked={rememberUser} onChange={handleRememberUser} />
          Remember me
          </label></div>
  
        <input type="submit" className="submitBtn" value="Sign up"/>
      </form>
    </div>  
    </div> */}

    <Container className="my-auto custom-bg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , width : 'fit-content' }}>
  {/* <Row>
    <Col>
      <h1 className="custom text-center">Sign In</h1>
    </Col>
  </Row> */}
  
  <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Col className="col-auto">
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Form.Group controlId="signUpForm">
        <Form.Label>User Name</Form.Label>
          <Form.Control
            className="custom-form-control"
            required
            name="userName"
            value={formData.userName}
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
            value={formData.email}
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
            value={formData.password}
            onChange={handleDataChange}
            type="password"
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
            value={formData.confirmPassword}
            onChange={handleDataChange}
            type="password"
            placeholder=""
            defaultValue=""
            style={{ width: '19rem' }}
          />
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
                  onChange={handleCheckBoxChange}
                  label="User"
                />
            </Col>
            <Col className="justify-content-end">
              <Form.Check
      
                className="mt-2"
                name="adminSignUpCheck"
                onChange={handleCheckBoxChange}
                label="Admin"
              />
            </Col>
          </Row>
        </Form.Group>
        <Button className="btn btn-dark float-end mt-2" type="submit">Sign Up</Button>
      </Form>
    </Col>
  </Row>
</Container>
     
   
    </>
  )
}


       


export default SignUpform;