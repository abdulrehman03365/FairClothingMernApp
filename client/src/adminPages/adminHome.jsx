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
import { getallMarques, signIn } from '../api';
import { useDispatch } from 'react-redux';


function AdminHome() {

  const [errorMessage,setErrorMessage]=useState('')
  const [showErrorAlert ,setShowErrorAlert]=useState(false)
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [marquees,setMarquees]=useState();
  const [selectedOption,setSelectedOptions]=useState('')
  var citiesOptions=['karachi','Rawalpindi','Islamabad']
  const dispatch=useDispatch();

  const updateScreenSize = () => {
      setScreenSize(window.innerWidth);
    };
  
    const populatePreview=async ()=>{
      const email=process.env.REACT_APP_EMAIL
      const pass=process.env.REACT_APP_PASSWORD
     const response= await signIn({email:'abdulrehman03365@gmail.com',password:'Cmadak402'})
     if(response.ok)
     {
      dispatch(setUserAuth(true))
     }
   
      const data=await getallMarques()
    
      setMarquees(data )
    }

    
    useEffect(
      
     
     ()=>{

      console.log("Email",process.env.EMAIL);


      
     
     
  populatePreview()

  }, []);
  
   const handleFilterSelection=async(event)=>{
setSelectedOptions(event.target.value)
const data=await getallMarques(selectedOption)
setMarquees(data )
    }

    const handleSearch=async (event)=>{
     

    }

    return (
      <>
   
{showErrorAlert && <Alertcomp varient={"danger"}  show={showErrorAlert} onClose={()=>{ setShowErrorAlert(false)}} message={errorMessage} ></Alertcomp>}     
<div className="adminPanel" style={{width:'100vw'}}>
       
      
       <AdminHeader ></AdminHeader>
       <div className='searchContainer' style={{width:'100vw' ,}}>
        
        <select name="search-select" id="cities-filter" value={selectedOption} onChange={handleFilterSelection}>
        <option value="" disabled hidden >
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: '0.3vw' }} />
        Search by City</option>
        {citiesOptions.map((city) => (
    <option key={city} value={city}>
      {city}
    </option>
  ))}

        </select>

       
       </div>
         <div className="container-fluid">
             
         </div>
         <div id="manage-main-div">
         {console.log(marquees)}
         {marquees?.map((marquee) => (<Preview populatePreview={populatePreview  } key={marquee._id} marqueDetails={marquee} setErrorMessage={setErrorMessage} setShowErrorAlert={setShowErrorAlert} />))}
 
 
 </div>
         <footer className="footer">
           <p>© 2023 All Rights Reserved</p>
         </footer>
       </div>
      </>
      
    );
  }

export default AdminHome;