import { useState } from 'react';
import {Alert , Button} from 'react-bootstrap'
import './alertComp.css'


function Alertcomp(props)
{
   const {varient ,message , show ,onClose }=props
  

    
       
  
        return  <Alert id='alertbox' variant={varient} show={show} onClose={onClose} dismissible >{message} </Alert>
         
        
      
        }


export default Alertcomp;