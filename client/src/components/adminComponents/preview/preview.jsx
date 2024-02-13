import {toast} from 'react-toastify'
import './preview.css'
import ManageMarques from '../../../adminPages/manageCloths/manageCloths';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { Alert } from 'react-bootstrap';
import Alertcomp from '../../alertComp';
import { deleteMarque , getallCloths , deleteCloth , updateCloth  } from '../../../api';

function Preview({ populatePreview ,clothId,clothDetails }) {
  const id =`carousel_${Date.now()}_${Math.floor(Math.random() * 1000)}`    
  console.log("value of clothDetails :" + clothDetails);
  console.log("value of key :" + clothId);
  const navigate=useNavigate()  
   async function handleEdit(clothId){
    
    console.log("clothId :" + clothId);
    navigate(`/manageCloths`,{state:{editViewProp:true , id:clothId} });

   }
   async function handleRemove(clothId){
     

  var data = await deleteCloth(clothId)
  console.log("response from delete cloth :" + data);
    if (data.ok)
    
    {
      alert('Marque Deleted' + id)
      populatePreview()
      
    }
  
   
  else
   {
   
   }
  }
    return (  <>


<div className='marqueView' key={clothId}>
       
       <div className='top_sec'>
         <h2>{clothDetails.name}</h2>
         
        <span onClick={()=>{handleEdit(clothId)}}>
        <i class="bi bi-pen"></i>
        </span>
       </div>






    

 
  <div id={id}  class="carousel slide  custom-dim " data-bs-ride="false"  >

   
  
  <div class="carousel-inner">
 
    {clothDetails.images.map((img, index) => (
      <div class={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
        <img src={img} class="d-block w-100" alt="cloth Image"/>
      </div>
    ))}
    

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target={"#"+id} data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target={"#"+id} data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
       <div id='bottom_sec'>
         <div className='bottom_st'>
           <p id='status'>{clothDetails.status}</p>
           <p id='capacity'>{clothDetails.quantity}</p>
         </div>
        <span className='icons' onClick={()=>{handleRemove(clothId)}}>
        <i class="bi bi-trash3"></i>
        </span>
       </div>

       
     </div>
        
    </>);

    }
export default  Preview;