import './marqueView.css'


export default function MarqueView({marqueDetail})
{

return(

    <div className='marqueView'>
    <div className='top_sec'>
    <h2>{marqueDetail.name}</h2>
     <p id='marqueLoc'>{marqueDetail.location}</p>
    </div>
     
     <img id='marqueImg' src={marqueDetail.img}></img>

    <div id='bottom_sec'>
     <div className='bottom_st'>
        <p id='status'>{marqueDetail.status}</p>
        <p id='capacity'>{marqueDetail.capacity}</p>
     </div>
     <div className='bottom_end'>
         <button id='book_btn'>Book</button>
    </div>
     
     
     </div>
    </div>
)


    
    
}