import './preview.css'
function Preview({marqueDetails}) {

   

    return (  <>
         <div id='preview-holder' style={{border:"1px solid" }}>

        <div id='st-preview'>
        <p id='pr-view'>marqueDetails.name</p>
        <p>marqueDetails.location</p>
        <img src={marqueDetails.image} alt="Marque image" id="img-Preview"></img>
        <p>marqueDetails.status</p>
        <p>marqueDetails.capacity</p>

        </div>
        <div id="bt-preview">
        <button onClick={()=>handleEdit(marqueDetails._id)}>edit </button>

        <button onClick={()=>{handleRemove(marqueDetails._id)}}>remove</button>
        </div>
         </div>
        
    </>);
}

export default Preview;