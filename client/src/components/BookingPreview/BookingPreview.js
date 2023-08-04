import './BookingPreview.css'
import { useState } from 'react'
import closeIcon from "../../assets/icons/close.png"
export default function BookingPreview({handlePreviewShow}){
    

 


    
    return(
    <>
    <div className="ParentContainer" >
    <div className='Top-div'>
        <div></div>
    <h1>Cart</h1>
    {   }
    <div>
    
    <img className='closeImg' onClick={handlePreviewShow} src={closeIcon}  />
    </div>
   
    </div>
    <div className='Middle-div'></div>
    <div className='Bottom-div'></div>
    </div>
    
    </>)
}