import './clothView.css';
import Carousel from 'react-bootstrap/Carousel';
import { setBookClicked, setBooked } from '../../slices/bookslice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingPreview from '../BookingPreview/BookingPreview';
export default function MarqueView({ marqueDetail }) {
  const id =`carousel_${Date.now()}_${Math.floor(Math.random() * 1000)}`  
  const [showBookingPreview, setshowBookingPreview] = useState(false)
  const dispatch = useDispatch();
  const isBookClicked = useSelector((state) => state.book.isBookClicked);

  const bookMarque = (itemId) => {
    setshowBookingPreview(true)
    console.log('Value of is BookClicked before dispatch:', isBookClicked);
    dispatch(setBookClicked());
  };
  
  const handlePreviewShow = ()=>{
    setshowBookingPreview(false)
  }


  return (
    <>
     {showBookingPreview && (
        <div className='booking-preview-overlay'>
          <BookingPreview  handlePreviewShow={handlePreviewShow}/>
        </div>
      )}

<div className='marqueView' key={marqueDetail.id}>
       
       <div className='top_sec'>
         <h2>{marqueDetail.name}</h2>
         <p id='marqueLoc'>{marqueDetail.location}</p>
       </div>







       {/* <div id={id} class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    
  {marqueDetail.images.map((img, index) => (
      <div class={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
        <img src={img} class="d-block w-100" alt="cloth Image"/>
      </div>
    ))}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target={id} data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target={id} data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}

 
  <div id={id}  class="carousel slide  custom-dim " data-bs-ride="false"  >

   
  
  <div class="carousel-inner">
 
    {marqueDetail.images.map((img, index) => (
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
           <p id='status'>{marqueDetail.status}</p>
           <p id='capacity'>{marqueDetail.quantity}</p>
         </div>
         <div className='bottom_end'>
           <button id='book_btn' onClick={() => bookMarque(marqueDetail.id)}>
             Book
           </button>
         </div>
       </div>
     </div>
    </>
   
  );
}
