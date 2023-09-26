import './clothView.css';

import { setBookClicked, setBooked } from '../../slices/bookslice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingPreview from '../BookingPreview/BookingPreview';
export default function MarqueView({ marqueDetail }) {
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
 
  <div id="carouselExampleDark"  class="carousel carousel-dark slide  custom-dim" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" >
    {/* <h1 className='text-center'>Item 1</h1> */}
    </div>
    <div class="carousel-item" >
    {/* <h1 className='text-center'>Item 2</h1> */}

      {/* <img src="blue-cloth.jpg" class="d-block w-100" alt="..."/> */}
      
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       <div id='bottom_sec'>
         <div className='bottom_st'>
           <p id='status'>{marqueDetail.status}</p>
           <p id='capacity'>{marqueDetail.capacity}</p>
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
