import AdminHeader from "../../components/adminComponents/adminHeader/adminHeader";
import Preview from "../../components/adminComponents/preview/preview";
import {useForm} from "react-hook-form"
import { useState } from "react";
import './manageMarques.css'
import AWS from 'aws-sdk'
import {toast} from 'react-toastify'
function ManageMarques() {
  
  const {register, handleSubmit , formState : {errors}}=useForm();
  const [image,setImage]=useState()
  const [imagePreview,setImagePreview]=useState(null)  
  const []=useState(null)
  const [base64image,setBase64Image]=useState('');

  



  async function handleFormSubmit(data, event) {
    event.preventDefault();
    data['base64Image']=imagePreview;
    data['imageName']=image.name;
    data['imageType']=image.type;
   
  
    const formData = new FormData();
    
    for (const key in data) {
      formData.append(key, data[key]);
    }
    
 const response=  await fetch('http://localhost:8000/api/addMarque', {
      method: 'POST',
      credentials: 'include',
      body: formData
    });
  
  if(response.status==201)
  {
    toast.success("Marque is added successfuly")
  }
  
else if (response.status!=200){
  toast.error("Error adding marque")

}

  }
  
  function deleteMarque()
  {
    
  }
  function convertToBase64(file){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setBase64Image(reader.result)
    };
  }
  function handleImageChange(event){
    console.log(event.target.files);
    const file = event.target.files[0];
    setImage(file);
    convertToBase64(file)

  }
    return ( 
     <div>
        <AdminHeader/>
        
        <div className="search-div">
         <input className="searchTxt"></input>
         <button className="addNewBt">Add new</button>
        </div>
      
         <form onSubmit={handleSubmit(handleFormSubmit)} >
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