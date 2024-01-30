import qs from 'qs';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
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
  const [validated,setValidate]=useState(false)
  const [formData,setformData]=useState({name : '',sku: '',quantity:'',status:''})
  useEffect(() => {
    var imagesObj = [];

    for (let index = 0; index < images.length; index++) {
      const imageObject = {
        image: base64Image[index],
        imageName: images[index].name,
        imageType: images[index].type,
      };

      imagesObj.push(imageObject);
    }

    setformData((prevFormData) => ({
      ...prevFormData,
      images: imagesObj,
    }));
  
 
  console.log("Form Data :" ,formData) 
  console.log("Images :",images);
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
    
  }, [editViewProp, base64Image,images]);

  function convertToBase64(file){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview([...imagePreview,reader.result]);
      setBase64Image([...base64Image,reader.result])
  }}

  const handleImageChange=(event)=> {
  var files = event.target.files;
  convertToBase64(files[0])
  const updatedImages=[...images,files[0]]
  setImages(updatedImages);
  }

const handleRemoveImage =(indexToRemove)=>{
  setImages((prevImages)=>{
  const newImages=[...prevImages];
  newImages.splice(indexToRemove,1);
  return newImages;
});
  

  setBase64Image((prevBase64Images)=>{
    const newBase64Images=[...base64Image];
    newBase64Images.splice(indexToRemove,1)
    return newBase64Images;
    
  })
  setformData((prevFormData)=>{
    const newFormData = { ...prevFormData };
    newFormData.images.splice(indexToRemove, 1);
    return newFormData;    

  })

}
  async function handleFormSubmit(data, event) {
  console.log("Form Data :" ,formData)   
  event.preventDefault()
  const form = event.target;
  if(form.checkValidity()===false)
  {
     toast.error("Plz enter cloth details")
     event.stopPropogation()
  }

  setValidate(true)


  
  
    
  

    if (editViewProp) {
      const data=await updateCloth(id, formData);
     
      setEditView(false)
      setUpdated(true)
      setValue('name', data.name);
      setValue('sku', data.sku);
      setValue('quantity', data.quantity);
      setImagePreview(data.image);
      setValue('status', data.status);
    } else {
      await addCloth(formData);
      

    }

  }
  const handleChange =(e,name)=>{
    const { value } = e.target;
  setformData({
    ...formData,
    [name]: value,
  });

    
  }

    return ( 
     <div>
     

    
      <Container className='d-flex mt-5 justify-content-center border flex-wrap  align-items-center flex-column ' >
      <h2 className="text-center mb-3">Add Cloth</h2>
  
   
      <Form noValidate validated={validated} onSubmit={(event)=>handleFormSubmit(formData , event)} className='p-xs-4 mt-3 mb-2  '  style={{border:"1px-solid"}} >
        <Row className="mb-3 align-items-center">
          <Form.Group  as={Col} md={5} className='custom-input ' controlId="forClothName">
            <Form.Label>Cloth Name:</Form.Label>
            <Form.Control type="text" placeholder="" required onChange={(event)=>{handleChange(event,'name')}}/>
            <Form.Control.Feedback type="invalid">
          Please enter a name.
        </Form.Control.Feedback>
          </Form.Group>
          <Col md={2}></Col> {/* Empty column for space */}
          <Form.Group as={Col}  md={5} controlId="forClothSKU">
            <Form.Label>Cloth SKU:</Form.Label>
            <Form.Control type="text" placeholder="" required onChange={(event)=>{handleChange(event,'sku')}}/>
          </Form.Group>
          <Form.Control.Feedback type="invalid">
          Please enter a SKU.
        </Form.Control.Feedback>
          <Col md={2}></Col>
        </Row>
        <Row className="mb-3 align-items-center">
          <Form.Group as={Col} md={5} controlId="forClothQuantity">
            <Form.Label>Quantity:</Form.Label>
            <Form.Control type="text" placeholder="" required onChange={(event)=>{handleChange(event,'quantity')}} />
          </Form.Group>
          <Form.Control.Feedback type="invalid">
          Please enter a Quantity.
        </Form.Control.Feedback>
          <Col md={2}></Col> {/* Empty column for space */}
          <Form.Group as={Col} md={5}  controlId="forClothStatus">
            <Form.Label>Status:</Form.Label>
            <Form.Control type="text" placeholder="" required onChange={(event)=>{handleChange(event,'status')}}/>
            <Form.Control.Feedback type="invalid">
          Please enter Status.
        </Form.Control.Feedback>
          </Form.Group>
          <Col md={2}></Col>
        </Row>

       
         <Row  className='d-flex align-items-center justify-content-center ' style={{position:"relative"}}>
         <Form.Group as={Col} md={5 } className='w-auto p-2'  controlId="images">
            <Form.Label  style={{position : "absolute" , left:"10px"  , top :"25%"}}>Images :</Form.Label>
            <Form.Control type="file" required className='custom-input' onChange={handleImageChange} />
          </Form.Group>
         </Row>
         <Row> </Row>
        <Row className='d-flex justify-content-center align-items-center p-4'>
         <Button type="submit" className='w-auto d-flex submit-bt'  style={{"background":"black"}}>Submit </Button>
        
        </Row>
        <Row>
  {images.map((img, index) => (
  
      
    <><Col style={{position:"relative"}}>
    <img key={index} src={URL.createObjectURL(img)} style={{ width: '200px' }} alt={`Preview ${index}`} />
    <Button
    className="cross-button"
    style={{position:"absolute" , backgroundColor:"black" , top:"-13px" , left:"186px" }}
    onClick={() => handleRemoveImage(index)}>
  
    <i className="bi bi-x-square-fill"></i>
    </Button>
    </Col>
                                             
  </>
    
  ))}
</Row>

      </Form>
    </Container>


     </div>
     );
  }

export default ManageCloths;