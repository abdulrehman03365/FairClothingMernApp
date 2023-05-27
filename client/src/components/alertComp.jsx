import { useEffect } from 'react';
import { useState } from 'react';
import {Alert , Button} from 'react-bootstrap'
import './alertComp.css'


function Alertcomp(props)
{
   const {varient ,message , show ,onClose }=props
  
   useEffect(()=>{
   let timeout;
        if(show)
        {
                
         timeout =setTimeout(() => {
               
               onClose()
         }, 2000);
        }


   return ()=> clearInterval(timeout);

   },[show,onClose])

    
       
  
return  <Alert id='alertbox' style={{'zIndex':1000}} variant={varient} show={show} onClose={onClose} dismissible >{message} </Alert>
         
        
      
        }


export default Alertcomp;