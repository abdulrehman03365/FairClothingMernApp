import './adminHome.css'

import {useState,useEffect} from 'react';
import {  toast , ToastContainer} from "react-toastify";
import { Link } from "react-router-dom";
import Preview from '../components/adminComponents/preview/preview';
import AdminHeader from '../components/adminComponents/adminHeader/adminHeader';
import { getallMarques } from '../api';
function AdminHome() {
 


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

    useEffect(() => {
      populatePreview()
      console.log('marques :'+marquees);
      // window.addEventListener('resize', updateScreenSize);
      // return () => window.removeEventListener('resize', updateScreenSize);
    }, []);
  
    return (
      <>
   
     
<div className="adminPanel">
       
   
       <AdminHeader></AdminHeader>
         <div className="container-fluid">
             
         </div>
         <div id="manage-main-div">
         {console.log(marquees)}
         {marquees?.map((marquee) => (<Preview populatePreview={populatePreview  } key={marquee._id} marqueDetails={marquee} />))}
 
 
 </div>
         <footer className="footer">
           <p>© 2023 All Rights Reserved</p>
         </footer>
       </div>
      </>
      
    );
  }

export default AdminHome;