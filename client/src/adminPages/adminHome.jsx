import './adminHome.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {useState,useEffect} from 'react';
import {  toast , ToastContainer} from "react-toastify";
import { Link } from "react-router-dom";
import Preview from '../components/adminComponents/preview/preview';
import { Alert } from 'react-bootstrap';
import Alertcomp from '../components/alertComp';
import AdminHeader from '../components/adminComponents/adminHeader/adminHeader';
import { setUserAuth } from '../slices/authSlice';
import { getallMarques, signIn , getallCloths } from '../api';

import { useDispatch } from 'react-redux';


function AdminHome() {

  const [errorMessage,setErrorMessage]=useState('')
  const [showErrorAlert ,setShowErrorAlert]=useState(false)
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [cloths,setcloths]=useState();
  const [clothDelete,setClothDelet]=useState(false);
  const [selectedOption,setSelectedOptions]=useState('')
  var citiesOptions=['karachi','Rawalpindi','Islamabad']
  const dispatch=useDispatch();

  const updateScreenSize = () => {
      setScreenSize(window.innerWidth);
    };
  
    const populatePreview=async ()=>{
      const email=process.env.REACT_APP_EMAIL
      const pass=process.env.REACT_APP_PASSWORD
    //  const response= await signIn({email:'abdulrehman03365@gmail.com',password:'Cmadak402'})
    //  if(response.ok)
    //  {
    //   dispatch(setUserAuth(true))
    //  }
   
      const data=await getallCloths()
      setClothDelet(true)
      setcloths(data )
    }

    
    useEffect(
      
     
     ()=>{

      console.log("Email",process.env.EMAIL);
      console.log("Delete variable :", clothDelete );

      
     
     
  populatePreview()

  }, []);
  
   const handleFilterSelection=async(event)=>{
setSelectedOptions(event.target.value)
const data=await getallMarques(selectedOption)
setcloths(data )
    }

    const handleSearch=async (event)=>{
     

    }

    return (
      <>
   
{showErrorAlert && <Alertcomp varient={"danger"}  show={showErrorAlert} onClose={()=>{ setShowErrorAlert(false)}} message={errorMessage} ></Alertcomp>}     
<div className="adminPanel" style={{width:'100vw'}}>
       
      
       
       <div className='searchContainer' style={{width:'100vw' ,}}>
        
        {/* <select name="search-select" id="cities-filter" value={selectedOption} onChange={handleFilterSelection}>
        <option value="" disabled hidden >
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: '0.3vw' }} />
        Search by City</option>
        {citiesOptions.map((city) => (
    <option key={city} value={city}>
      {city}
    </option>
  ))}

        </select> */}

       
       </div>
         <div className="container-fluid">
             
         </div>
         <div id="manage-main-div">
         {console.log(cloths)}
         {cloths?.map((cloth) => (<Preview populatePreview={populatePreview  } clothId={cloth._id} clothDetails={cloth}  />))}
 
 
 </div>
         
       </div>
      </>
      
    );
  }

export default AdminHome;