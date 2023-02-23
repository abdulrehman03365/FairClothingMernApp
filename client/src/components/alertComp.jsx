import { useState } from 'react';
import {Alert , Button} from 'react-bootstrap'
import './alertComp.css'


function Alertcomp(props)
{
   const {varient ,message }=props
  
  const [show,setShow]=useState(true)
  const handleClose=()=>{setShow(false)}
    
       
  
        return  <Alert id='alertbox'show={show} onClose={handleClose} variant={varient} dismissible >{message} </Alert>
         
        
      
        }


export default Alertcomp;