import qs from 'qs';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AdminHeader from '../../components/adminComponents/adminHeader/adminHeader';
import Preview from '../../components/adminComponents/preview/preview';
import { addMarque, updateMarque, updateCloth, getMarque, getallCloths, addCloth, getCloth } from '../../api';
import './manageCloths.css';
import { useLocation, useParams } from 'react-router-dom';

function ManageCloths() {
  const location = useLocation();
  const [editView, setEditView] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [updated, setUpdated] = useState(false);
  const [validated, setValidate] = useState(false);
  const [formData, setformData] = useState({ name: '', sku: '', quantity: '', status: '', images: [] });
  const [clothId, setClothId] = useState('');

  useEffect(() => {
    const fetchAndPopulate = async (id) => {
      const respData = await getCloth(id);
      console.log("respData :" + JSON.stringify(respData));
      setformData({
        ...formData,
        name: respData.name,
        sku: respData.sku,
        quantity: respData.quantity,
        status: respData.status,
        images: []
      });
      var imagesResp=respData.images
      imagesResp.map((imgUrl)=>{
        
        const newImageObj = {
          imageUrl: imgUrl,
          base64Image: "",
          imageName:"",
          imageType:"",
        };
    
       setformData((prevFormData)=>{return{...prevFormData,images:[...prevFormData.images,newImageObj]}});
        
      })
      
      console.log("FormData :" , formData)
    };
 
    if (location.state && location.state.editViewProp !== null) {
      setClothId(location.state.id);
      fetchAndPopulate(location.state.id);
      setValidate(true);
      setEditView(location.state.editViewProp);
      
    }

    console.log("FormData Changed :" , formData)
  }, [editView],formData);

  function convertToBase64(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  }

  const handleImageChange = async (event) => {
    let files = event.target.files;
    let base64Result = await convertToBase64(files[0]);
    let newImageObj = {
      imageUrl: "",
      base64Image: base64Result,
      imageName: files[0]?.name || "",
      imageType: files[0]?.type || "",
    };

    setformData((prevFormData)=>{return{...prevFormData,images:[...prevFormData.images,newImageObj]}});
  };

  function handleRemoveImage(indexToRemove){
    setformData((prevFormData) => {
      let newFormData = [...prevFormData];
      newFormData.images.splice(indexToRemove, 1);
      return newFormData;
    });

  }

  async function handleFormSubmit(data, event) {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity() === false) {
      toast.error("Plz enter cloth details");
      event.stopPropagation();
    }

    setValidate(true);
    console.dir(formData);
    if (editView) {
      console.dir(formData );
      const data = await updateCloth(clothId, formData);
        setEditView(false)
        setUpdated(true)
      } else {
        console.dir(formData );
        await addCloth(formData);
    }
  }

  const handleChange = (e, name) => {
    const { value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

 function handleRemoveImage(indexToRemove){

 
  setformData((prevFormData) => {
    const newFormData = { ...prevFormData };
    newFormData.images.splice(indexToRemove, 1);
    return newFormData;
  }); 
 }


 
  return (
    <div>
      <Container className='d-flex m-auto mt-5 justify-content-center border flex-wrap align-items-center flex-column custom-holder'>
        <h2 className="text-center mb-3">Add Cloth</h2>

        <Form noValidate validated={validated} onSubmit={(event) => handleFormSubmit(formData, event)} className='p-xs-4 mt-3 mb-2' style={{ border: "1px-solid" }}>
          <Row className="mb-3 align-items-center">
            <Form.Group as={Col} md={5} className='custom-input' controlId="forClothName">
              <Form.Label>Cloth Name:</Form.Label>
              <Form.Control type="text" placeholder="" value={formData.name} required onChange={(event) => { handleChange(event, 'name') }} />
              <Form.Control.Feedback type="invalid">
                Please enter a name.
              </Form.Control.Feedback>
            </Form.Group>
            <Col md={2}></Col>
            {/* Empty column for space */}
            <Form.Group as={Col} md={5} controlId="forClothSKU">
              <Form.Label>Cloth SKU:</Form.Label>
              <Form.Control type="text" value={formData.sku} placeholder="" required onChange={(event) => { handleChange(event, 'sku') }} />
            </Form.Group>
            <Form.Control.Feedback type="invalid">
              Please enter a SKU.
            </Form.Control.Feedback>
            <Col md={2}></Col>
          </Row>
          <Row className="mb-3 align-items-center">
            <Form.Group as={Col} md={5} controlId="forClothQuantity">
              <Form.Label>Quantity:</Form.Label>
              <Form.Control type="text" value={formData.quantity} placeholder="" required onChange={(event) => { handleChange(event, 'quantity') }} />
            </Form.Group>
            <Form.Control.Feedback type="invalid">
              Please enter a Quantity.
            </Form.Control.Feedback>
            <Col md={2}></Col>
            {/* Empty column for space */}
            <Form.Group as={Col} md={5} controlId="forClothStatus">
              <Form.Label>Status:</Form.Label>
              <Form.Control type="text" value={formData.status} placeholder="" required onChange={(event) => { handleChange(event, 'status') }} />
              <Form.Control.Feedback type="invalid">
                Please enter Status.
              </Form.Control.Feedback>
            </Form.Group>
            <Col md={2}></Col>
          </Row>

          <Row className='d-flex align-items-center justify-content-center ' style={{ position: "relative" }}>
            <Form.Group as={Col} md={5} className='w-auto p-2' controlId="images">
              <Form.Label style={{ position: "absolute", left: "10px", top: "25%" }}>Images :</Form.Label>
              <Form.Control type="file" required className='custom-input' onChange={handleImageChange} />
            </Form.Group>
          </Row>
          <Row> </Row>
          <Row className='d-flex justify-content-center align-items-center p-4'>
            <Button type="submit" className='w-auto d-flex submit-bt' style={{ "background": "black" }}>{editView ? "Submit" : "Update"} </Button>
          </Row>
          <Row className='d-flex justify-content-center flex-col align-items-center '>
            {formData.images.map((imgObject, index) => (
              <>
                <div className='p-2 custom-image-holder' key={index}>
                  {console.log("formData" ,formData)}
                  {console.log("editView" ,editView)}
                  <img src={editView && imgObject.imageUrl ? imgObject.imageUrl : imgObject.base64Image} style={{ width: '200px' }} alt={`Preview ${index}`} />
                  <Button
                    className="cross-button"
                    style={{ position: "absolute", backgroundColor: "black", top: "-13px", left: "186px" }}
                    onClick={() => handleRemoveImage(index)}>
                    <i className="bi bi-x-square-fill"></i>
                  </Button>
                </div>
              </>
            ))}
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default ManageCloths;
