import {toast} from 'react-toastify'
import './preview.css'
import ManageMarques from '../../../adminPages/manageMarques/manageMarques';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { Alert } from 'react-bootstrap';
import { deleteMarque } from '../../../api';
function Preview({marqueDetails ,populatePreview ,setShowErrorAlert ,setErrorMessage }) {
 
  const navigate=useNavigate()  
  const {name , image ,location , status , capacity}= marqueDetails;

   async function handleEdit(id){
    const editViewProp=true
    
    navigate(`/manageMarques`,{state:{editViewProp , id} });

   }

   async function handleRemove(id){
    // const response=await fetch('http://localhost:8000/api/deleteMarque',{method:'POST',
    // 'credentials':'include', headers:{
    //     'Content-type':'application/json',
        
      
    //   }
    // ,body:JSON.stringify({id:id})})
    // const json_resp=response.json()
   
   try{
    const response = await deleteMarque(id)
    if (response.ok)
    
    {
      alert('Marque Deleted' + id)
      populatePreview()
      
    }
  
   }
   catch (error)
   {
    setShowErrorAlert(true)
    setErrorMessage('Error:'+ error)
   }
  }
    return (  <>
         <div id='preview-holder' style={{border:"1px solid" }}>

        <div id='st-preview'>
        <p id='pr-view'>{name}</p>
        <p>{location}</p>
        <img src={image} alt="Marque image" id="img-Preview"></img>
        <p>{status}</p>
        <p>{capacity}</p>

        </div>
        <div id="bt-preview">
        <button onClick={()=>handleEdit(marqueDetails._id)}>edit </button>

        <button onClick={()=>{handleRemove(marqueDetails._id)}}>remove</button>
        
        
        
        </div>
         </div>
        
    </>);

    }
export default  Preview;