import './BookingPreview.css'
import { useState } from 'react'
import closeIcon from '../../assets/icons/close.png'
export default function BookingPreview({handlePreviewShow}){
    

 


    
    return(
    <>
    <div className="ParentContainer" >
    <div className='Top-div'>
    <h1>Booking</h1>
    {/*  style={{backgroundImage:`url(${closeIcon})` }} */}
    <input type="button" value="close" onClick={()=>{handlePreviewShow()}} />
    </div>
    <div className='Middle-div'></div>
    <div className='Bottom-div'></div>
    </div>
    
    </>)
}