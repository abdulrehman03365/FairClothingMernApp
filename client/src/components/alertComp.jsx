import { useState } from 'react';
import {Alert , Button} from 'react-bootstrap'
import './alertComp.css'


function Alertcomp(props)
{
   const {varient ,message}=props

  

    
       

        return  <Alert id='alertbox' varient={varient} dismissible >{message} </Alert>
         
        
      
        }


export default Alertcomp;