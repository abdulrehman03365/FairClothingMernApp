import AdminHeader from "../../components/adminComponents/adminHeader/adminHeader";
import Preview from "../../components/adminComponents/preview/preview";
import {useForm} from "react-hook-form"
import { useState } from "react";
import './manageMarques.css'

function ManageMarques() {
  const AWS = require('aws-sdk')
  const {register, handleSubmit , formState : {errors}}=useForm();
  const [image,setImage]=useState()
  const [imagePreview,setImagePreview]=useState(null)
  const []=useState(null)
  

  async function uploadImage()
  {
     

  }

  async function handleFormSubmit(data, event) {
    event.preventDefault();

    
    const formData = new FormData();
    
    for (const key in data) {
      formData.append(key, data[key]);
    }
    
    await fetch('http://localhost:8000/api/addMarque', {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        'Content-type': 'application/x-www-form-urlencoded'
      }), 
      body: formData 
    });
  }
  function handleImageChange(event){
    console.log(event.target.files);

    const file = event.target.files[0];
  
    setImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
  
    };

   
  }
    return ( 
     <div>
        <AdminHeader/>
        
        <div className="search-div">
         <input className="searchTxt"></input>
         <button className="addNewBt">Add new</button>
        </div>
      
         <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="add-marque-form" style={{"marginTop":50 , "display":"flex" ,
       "flexDirection":"column" , "alignContent":"center"  , "justifyContent":"center" , "marginRight":"30%" , "marginLeft":"30%"}}>

            <input className="add-marque-input" {...register("name",{required:true})}></input>
            <label>Marque Name</label>
            {errors.name?.type==='required' && <p role={'alert'} style={{"color":"red"}}>Marque name is required</p>}
           
            <input className="add-marque-input" {...register("location",{required:true})}></input>
            <label>Marque Location</label>
            {errors.location?.type==='required' && <p role={'alert'} style={{"color":"red"}}>Location is required</p>}
            
            <input className="add-marque-input" {...register("capacity",{required:true})}></input>
            <label>Capacity</label>
            {errors.capacity?.type==='required' && <p role={'alert'} style={{"color":"red"}}>Capacity is required</p>}

            <input className="add-marque-input" {...register("status",{required:true})}></input>
            <label>Status</label>
            {errors.status?.type==='required' && <p style={{"color":"red"}} role={'alert'}>Status is required</p>}

            <label htmlFor="image">Image: </label>
            <input type="file" id="imageInput" onChange={handleImageChange}  ></input>
            {imagePreview && (
            <img src={imagePreview} alt="Image preview" style={{ width: '200px' }} /> )}
            <input type={"submit"} style={{ display: 'inline-block', width: 'auto' }} value="Add Marque"></input>



           
            </div>
            


         </form>

     




     </div>
     );
}

export default ManageMarques;