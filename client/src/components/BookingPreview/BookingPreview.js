import './BookingPreview.css'
import { useState } from 'react'
import closeIcon from "../../assets/icons/close.png"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export default function BookingPreview({handlePreviewShow}){
    

 


    
    return(
    <>



    
<Modal className='customModal' show={true} onHide={handlePreviewShow}>
  <div class="ParentContainer"  >
      <div className='Top-div'>
          <div></div>
      <h1>Cart</h1>
      {   }
      <button type="button" class="btn-close" onClick={handlePreviewShow}  aria-label="Close"></button>
      {/* <div>
      
      <img className='closeImg' onClick={handlePreviewShow} src={closeIcon}  />
      </div> */}
    
      </div>
      <div className='Middle-div'></div>
      <div className='Bottom-div'></div>
      </div>
    
    </Modal>

    <div role="dialog" aria-modal="true" class="fade modal show" tabindex="-1">
      
    </div>

{/* <div >
<div class="ParentContainer"  >
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
</div> */}
  
    
    </>)
}