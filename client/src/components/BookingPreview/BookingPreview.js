import './BookingPreview.css'
import { useState } from 'react'
import closeIcon from '../../assets/icons/close.png'
export default function BookingPreview({handlePreviewShow}){
    

 


    
    return(
    <>
    <div className="ParentContainer" >
    <div className='Top-div'>
        <div></div>
    <h1>Booking</h1>
    {   }
    <input type="button" value="close" style={{backgroundImage:`url(${closeIcon})` }} onClick={()=>{handlePreviewShow()}} />
    </div>
    <div className='Middle-div'></div>
    <div className='Bottom-div'></div>
    </div>
    
    </>)
}