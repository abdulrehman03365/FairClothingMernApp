import { AuthContext,AuthProvider } from "./Context/AuthContext";
import {toast, ToastContainer } from "react-toastify";
import AdminHome from './adminPages/adminHome';
import Home from './pages/home/home';
import bookMarque from './pages/bookMarque/bookMarque';
import SignIn from './pages/signIn/signIn';
import SignUp from './pages/singUp/signUp';
import { ReactDOM , Browser, Component, useState } from 'react';
import NotFound from './pages/notFound/notFound';
import { ProtectedRoutes } from './pages/protectedRoutes';
import {BrowserRouter as Router , Routes , Route , Link , useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import ManageMarques from './adminPages/manageMarques/manageMarques';
import './App.css'

function App ()
 {
   useEffect(()=>{

    
   },[])
  

 
  {
    return ( 

      <>
       
        <Router>
       
        <div>
          <ToastContainer className={"toast-container"} />
            <Routes>
              <Route  path='/' element={<Home/>} />
              <Route path="signIn" element={<SignIn/>} />
              <Route path ="signUp" element={<SignUp/>} />
              <Route path="bookMarque" element={<ProtectedRoutes component={bookMarque} />}/>
              <Route path='/admin' element={<AdminHome/>}/>
              <Route path='/manageMarques' element={<ManageMarques/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path="/manageMarques" element={<ManageMarques/>} />
            </Routes>
          </div>
       
        </Router>
      </>
  
     
     
    )

  };
}



export default App