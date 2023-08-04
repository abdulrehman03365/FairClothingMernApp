import qs from 'qs';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import AdminHeader from '../../components/adminComponents/adminHeader/adminHeader';
import Preview from '../../components/adminComponents/preview/preview';
import { addMarque,updateMarque,updateCloth ,getMarque ,getallCloths, addCloth } from '../../api';
import './manageMarques.css';
import {useLocation, useParams} from 'react-router-dom'
function ManageMarques() {
  const location = useLocation()
    
  
    
    let id, editViewProp;
    if (location.state && location.state.id) {
      id = location.state.id;
      editViewProp = location.state.editViewProp;
    }
  const [editView, setEditView] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [base64Image,setBase64Image]=useState('');
  
  const [updated, setUpdated]=useState(false)

  useEffect(() => {
    setEditView(editViewProp)
   const  fetchAndPopulate=async()=> {
      const respData = await getallCloths(id);
      setValue('name', respData.name);
      setValue('sku', respData.sku);
      setValue('quantity', respData.quantity);
      console.log("image url:"+respData.image);
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
  
    // console.log("i m clicked");
    // event.preventDefault();
    // data['images'] = base64Image;
    // data['imageName'] = image?.name;
    // data['imageType'] = image?.type;
    
    // const formData=new FormData();
    // for (const key in data)
    // {
    // formData.append(key,data[key])
    // }

    // if (editViewProp) {
    //   const data=await updateCloth(id, formData);
    //   toast.success('Cloth is Updated successfully!');
    //   setEditView(false)
    //   setUpdated(true)
    //   setValue('name', data.name);
    //   setValue('sku', data.sku);
    //   setValue('quantity', data.quantity);
    //   setImagePreview(data.image);
    //   setValue('status', data.status);
    // } else {
    //   await addCloth(formData);
      toast.success('Cloth is added successfully!');

    // }


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
            <label>Cloth Name</label>
            {errors.name?.type==='required' && <p role={'alert'} style={{"color":"red"}}>Cloth name is required</p>}
           
            <input className="add-marque-input" {...register("sku",{required:true})}></input>
            <label>Cloth SKU</label>
            {errors.location?.type==='required' && <p role={'alert'} style={{"color":"red"}}>SKU is required</p>}
            
            <input className="add-marque-input" {...register("quantity",{required:true})}></input>
            <label>Quantity</label>
            {errors.capacity?.type==='required' && <p role={'alert'} style={{"color":"red"}}>Quantity is required</p>}

            <input className="add-marque-input" {...register("status",{required:true})}></input>
            <label>Status</label>
            {errors.status?.type==='required' && <p style={{"color":"red"}} role={'alert'}>Status is required</p>}

            <label htmlFor="image">Image: </label>
            <input type="file" id="imageInput" onChange={handleImageChange}  ></input>
            {imagePreview && (
            <img src={imagePreview} alt="Image preview" style={{ width: '200px' }} /> )}
            <input type={"submit"} style={{ display: 'inline-block', width: 'auto' }} value="Add Cloth"></input>



           
            </div>
            


         </form>

     




     </div>
     );
}

export default ManageMarques;