import './BookingPreview.css'
import closeIcon from '../../assets/icons/close.png'
export default function BookingPreview(){


    
    return(
    <>
    <div className="ParentContainer" >
    <div className='Top-div'>
   
    <input type="button" style={{backgroundImage:`url(${closeIcon})` }} />
    </div>
    <div className='Middle-div'></div>
    <div className='Bottom-div'></div>
    </div>
    
    </>)
}