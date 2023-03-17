import {toast} from 'react-toastify'
import './preview.css'
function Preview({marqueDetails}) {

    const {name , image ,location , status , capacity}= marqueDetails;

   async function handleEdit(id){
         
   }

   async function handleRemove(id){
    const response=await fetch('http://localhost:8000/api/deleteMarque',{method:'POST',
    'credentials':'include', headers:{
        'Content-type':'/json'
      
      }
    ,body:JSON.stringify({id:id})})
    const json_resp=response.json()
    if (response.ok)
    toast.success('Marque Deleted')
    else
    toast.error('Error Deleting Marque :'+json_resp['Error'])


   }
    
    return (  <>
         <div id='preview-holder' style={{border:"1px solid" }}>

        <div id='st-preview'>
        <p id='pr-view'>{name}</p>
        <p>{location}</p>
        <img src={image} alt="Marque image" id="img-Preview"></img>
        <p>{status}</p>
        <p>{capacity}</p>

        </div>
        <div id="bt-preview">
        <button onClick={()=>handleEdit(marqueDetails._id)}>edit </button>

        <button onClick={()=>{handleRemove(marqueDetails._id)}}>remove</button>
        </div>
         </div>
        
    </>);
}

export default Preview;