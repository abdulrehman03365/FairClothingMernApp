import { useState } from 'react';
import {Alert , Button} from 'react-bootstrap'
import './alertComp.css'


function Alertcomp(props)
{
   const {varient ,message , show , onClose}=props
  

  

    
       
  
        return  <Alert id='alertbox'show={show} onClose={onClose} variant={varient} dismissible >{message} </Alert>
         
        
      
        }


export default Alertcomp;