import AdminHeader from "../../components/adminComponents/adminHeader/adminHeader";
import Preview from "../../components/adminComponents/preview/preview";
import {useForm} from "react-hook-form"
import './manageMarques.css'
import { useState } from "react";
function ManageMarques() {

  const [imagePreview,setImagePreview]=useState(null)
  const []=useState(null)

  function handleSubmit(data,event) {
    event.preventDefault()
  } 
  const handleImageChange=()=>{
    
  }
    return ( 
     <div>
        <AdminHeader/>
        
        <div className="search-div">
         <input className="searchTxt"></input>
         <button className="addNewBt">Add new</button>
        </div>
      
         <form onSubmit={handleSubmit}>
            <div className="add-marque-form" style={{"marginTop":50 , "display":"flex" ,
       "flexDirection":"column" , "alignContent":"center"  , "justifyContent":"center" , "marginRight":"30%" , "marginLeft":"30%"}}>

            <input className="add-marque-input" {...register("name",{required:true})}></input>
            <label>Marque Name</label>
            {errors.name?.type==='required' && <p role={'alert'}>name is required</p>}
           
            <input className="add-marque-input" {...register("location",{required:true})}></input>
            <label>Marque Location</label>
            {errors.location?.type==='required' && <p role={'alert'}>Location is required</p>}
            
            <input className="add-marque-input" {...register("capacity",{required:true})}></input>
            <label>Capacity</label>
            {errors.capacity?.type==='required' && <p role={'alert'}>Capacity is required</p>}

            <input className="add-marque-input" {...register("status",{required:true})}></input>
            <label>Status</label>
            {errors.status?.type==='required' && <p role={'alert'}>Status is required</p>}

            <label htmlFor="image">Image: </label>
            <input type="file" id="imageInput" onChange={handleImageChange} {...register("image",{required:true})}></input>
            {imagePreview && (
            <img src={imagePreview} alt="Image preview" style={{ width: '200px' }} /> )}
            <input type={"submit"} value="Add Marque"></input>



           
            </div>
            


         </form>

     




     </div>
     );
}

export default ManageMarques;