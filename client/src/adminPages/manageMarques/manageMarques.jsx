import qs from 'qs';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import AdminHeader from '../../components/adminComponents/adminHeader/adminHeader';
import Preview from '../../components/adminComponents/preview/preview';
import { addMarque,updateMarque ,getMarque } from '../../api';
import './manageMarques.css';
import {useLocation, useParams} from 'react-router-dom'
function ManageMarques() {
  const location = useLocation()
  console.log("id:"+location.state.id);
  const id =location.state.id;
  const editViewProp=location.state.editViewProp;
  const [editView, setEditView] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [base64Image,setBase64Image]=useState('');
  
  const [updated, setUpdated]=useState(false)

  useEffect(() => {
    setEditView(editViewProp)
    async function fetchAndPopulate() {
      const respData = await getMarque(id);
      setValue('name', respData.name);
      setValue('location', respData.location);
      setValue('capacity', respData.capacity);
      setImagePreview(respData.image);
      setValue('status', respData.status);
    }
    console.log("EditViewProp :"+editViewProp);
    if (editViewProp ) {
      fetchAndPopulate();
    }
  }, [editViewProp]);

  function convertToBase64(file){

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setBase64Image(reader.result)

  }}
  
  async function handleFormSubmit(data, event) {
    event.preventDefault();
    data['base64Image'] = imagePreview;
    data['imageName'] = image?.name;
    data['imageType'] = image?.type;
    
    const formData=new FormData();
    for (const key in data)
    {
    formData.append(key,data[key])
    }

    if (editViewProp) {
      const data=await updateMarque(id, data);
      toast.success('Marque has been Updated successfully!');
      setEditView(false)
      setUpdated(true)
      setValue('name', data.name);
      setValue('location', data.location);
      setValue('capacity', data.capacity);
      setImagePreview(data.image);
      setValue('status', data.status);
    } else {
      await addMarque(null, data);
      toast.success('Marque has been added successfully!');

    }


  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    setImage(file);
    convertToBase64(file);
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