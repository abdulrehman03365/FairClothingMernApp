import './adminHome.css'
import {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import Preview from '../components/adminComponents/preview/preview';
import AdminHeader from '../components/adminComponents/adminHeader/adminHeader';
function AdminHome() {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
  
    const updateScreenSize = () => {
      setScreenSize(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener('resize', updateScreenSize);
      return () => window.removeEventListener('resize', updateScreenSize);
    }, []);
  
    return (
      <div className="adminPanel">
      <AdminHeader></AdminHeader>
        <div className="container-fluid">
          <h1>Welcome to Admin Panel</h1>
        </div>
        <div id="manage-main-div">

<Preview/>

</div>
        <footer className="footer">
          <p>© 2023 All Rights Reserved</p>
        </footer>
      </div>
    );
  }

export default AdminHome;