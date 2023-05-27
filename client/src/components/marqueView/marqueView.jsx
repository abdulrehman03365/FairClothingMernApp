import './marqueView.css';
import { setBookClicked, setBooked } from '../../slices/bookslice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingPreview from '../BookingPreview/BookingPreview';
export default function MarqueView({ marqueDetail }) {
  const [showBookingPreview, setshowBookingPreview] = useState(true)
  const dispatch = useDispatch();
  const isBookClicked = useSelector((state) => state.book.isBookClicked);

  const bookMarque = (itemId) => {
    console.log('Value of isBookClicked before dispatch:', isBookClicked);
    dispatch(setBookClicked());
  };

  return (
    <>
     {showBookingPreview && (
        <div className='booking-preview-overlay'>
          <BookingPreview />
        </div>
      )}

<div className='marqueView' key={marqueDetail.id}>
       
       <div className='top_sec'>
         <h2>{marqueDetail.name}</h2>
         <p id='marqueLoc'>{marqueDetail.location}</p>
       </div>
 
       <img id='marqueImg' src={marqueDetail.img} alt='Marque Image' />
 
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
