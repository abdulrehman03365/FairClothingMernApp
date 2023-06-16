import './adminHome.css'

import {useState,useEffect} from 'react';
import {  toast , ToastContainer} from "react-toastify";
import { Link } from "react-router-dom";
import Preview from '../components/adminComponents/preview/preview';
import { Alert } from 'react-bootstrap';
import Alertcomp from '../components/alertComp';
import AdminHeader from '../components/adminComponents/adminHeader/adminHeader';

import { getallMarques, signIn } from '../api';
function AdminHome() {
 
  const [errorMessage,setErrorMessage]=useState('')
  const [showErrorAlert ,setShowErrorAlert]=useState(false)
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [marquees,setMarquees]=useState();
  const updateScreenSize = () => {
      setScreenSize(window.innerWidth);
    };
  
    async function populatePreview()
    {
      const data=await getallMarques()
    
      setMarquees(data )
      
    }

    async function populatingApis()
    { await signIn({email:'abdulrehman03365@gmail.com',password:'Cmadak402'})
    populatePreview()
    console.log('marques :'+marquees);}
    
    useEffect(
      
     
     ()=>{
     const populatePreview=async ()=>{
      await signIn({email:'abdulrehman03365@gmail.com',password:'Cmadak402'})
      
      const data=await getallMarques()
    
      setMarquees(data )
    }
     


      
     
     
  populatePreview()
  // populatingApis()
  }, []);
  
    return (
      <>
   
{showErrorAlert && <Alertcomp varient={"danger"}  show={showErrorAlert} onClose={()=>{ setShowErrorAlert(false)}} message={errorMessage} ></Alertcomp>}     
<div className="adminPanel" style={{width:'100vw'}}>
       
      
       <AdminHeader></AdminHeader>
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