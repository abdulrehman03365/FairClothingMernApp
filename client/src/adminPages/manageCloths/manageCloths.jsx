import qs from 'qs';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AdminHeader from '../../components/adminComponents/adminHeader/adminHeader';
import Preview from '../../components/adminComponents/preview/preview';
import { addMarque,updateMarque,updateCloth ,getMarque ,getallCloths, addCloth } from '../../api';
import './manageCloths.css';
import {useLocation, useParams} from 'react-router-dom'
function ManageCloths() {
  const location = useLocation()
    
  
    
    let id, editViewProp;
    if (location.state && location.state.id) {
      id = location.state.id;
      editViewProp = location.state.editViewProp;
    }
  const [editView, setEditView] = useState(false);
  const {register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [base64Image,setBase64Image]=useState([]);
  const [updated, setUpdated]=useState(false)

  useEffect(() => {
    setEditView(editViewProp)
   const  fetchAndPopulate=async()=> {
      const respData = await getallCloths();
      setValue('name', respData.name);
      setValue('sku', respData.sku);
      setValue('quantity', respData.quantity);
      console.log("image url:"+respData.images);
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
      setImagePreview(prevPreviews=>[...prevPreviews,reader.result]);
      setBase64Image(prevBase64Images=>[...prevBase64Images,reader.result])
  }}

  function handleImageChange(event) {
    var files = event.target.files;
    if (files.length >1)
    {
     
      files.map((file,index)=>{ 
        setImages(prevFiles=>[...prevFiles,files[0]]);
        convertToBase64(files[0]);})
      
    }
    else
    {
      setImages(prevFiles=>[...prevFiles,files[0]]);
      convertToBase64(files[0]);
    }
    
  }

  async function handleFormSubmit(data, event) {
  
    console.log("i m clicked");
    event.preventDefault();
    var imagesObj=[]
    images.map((image,index)=>{[...imagesObj,{image:base64Image[index],
                                              imageName:image[index]?.name,
                                              imageType:image[type]?.type}]})
    
    
    const formData=new FormData();
    for (const key in data)
    {
    formData.append(key,data[key])
    }

    if (editViewProp) {
      const data=await updateCloth(id, formData);
      toast.success('Cloth is Updated successfully!');
      setEditView(false)
      setUpdated(true)
      setValue('name', data.name);
      setValue('sku', data.sku);
      setValue('quantity', data.quantity);
      etImagePreview(data.image);
      setValue('status', data.status);
    } else {
      await addCloth(formData);
      toast.success('Cloth is added successfully!');

    }


  }

    return ( 
     <div>
     
{/*         
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

      */}
    
      <Container className='d-flex mt-5 justify-content-center border flex-wrap  align-items-center flex-column ' >
      <h2 className="text-center mb-3">Add Cloth</h2>
  
   
      <Form onSubmit={handleSubmit(handleFormSubmit)} className='p-xs-4 mt-3 mb-2  '  style={{border:"1px-solid"}} >
        <Row className="mb-3 align-items-center">
          <Form.Group as={Col} md={5} controlId="formFirstName">
            <Form.Label>Cloth Name:</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Col md={2}></Col> {/* Empty column for space */}
          <Form.Group as={Col} md={5} controlId="formLastName">
            <Form.Label>Cloth SKU:</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Col md={2}></Col>
        </Row>
        <Row className="mb-3 align-items-center">
          <Form.Group as={Col} md={5} controlId="formFirstName">
            <Form.Label>Quantity:</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Col md={2}></Col> {/* Empty column for space */}
          <Form.Group as={Col} md={5} controlId="formLastName">
            <Form.Label>Status:</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Col md={2}></Col>
        </Row>

       
         <Row  className='d-flex align-items-center justify-content-center ' style={{position:"relative"}}>
         <Form.Group as={Col} md={5 } className='w-auto p-2'  controlId="images">
            <Form.Label  style={{position : "absolute" , left:"10px"  , top :"25%"}}>Images :</Form.Label>
            <Form.Control type="file" placeholder=""  />
          </Form.Group>
         </Row>
         <Row> </Row>
        <Row className='d-flex justify-content-center align-items-center p-4'>
         <Button className='w-auto d-flex submit-bt' style={{"background":"black"}}>Submit </Button>
        
        </Row>
        <Row>
  {images.map((img, index) => (
    <img key={index} src={URL.createObjectURL(img)} style={{ width: '200px' }} alt={`Preview ${index}`} />
  ))}
</Row>

      </Form>
    </Container>


     </div>
     );
}

export default ManageCloths;