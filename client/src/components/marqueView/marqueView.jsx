import './marqueView.css';
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
 
       <img id='marqueImg' src={marqueDetail.image} alt='Marque Image' />
 
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
