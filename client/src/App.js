import { AuthContext,AuthProvider } from "./Context/AuthContext";
import adminSignIn from "./adminPages/adminSignIn/adminSignIn";
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
import AdminSignIn from "./adminPages/adminSignIn/adminSignIn";
import { useEffect } from "react";
import ManageMarques from './adminPages/manageMarques/manageMarques';
import './App.css'
import {configureStore} from '@reduxjs/toolkit'
import bookslice from "./slices/bookslice";
import { Provider } from "react-redux";
import store from './store/store'
import { useDispatch } from "react-redux";
import AuthCheker from "./components/AuthChecker/AuthCheker";

function App ()
 {
  
  {
    return ( 
      <Router>
      <AuthProvider>
      <Provider store={store}>
      <AuthCheker></AuthCheker>
      <div style={{height:'100vh' , display:'flex' ,flexDirection:'column'}}>
            <ToastContainer className="toast-container" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="signIn" element={<SignIn />} />
              <Route path="/admin/signIn" element={<AdminSignIn />} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="bookMarque" element={<ProtectedRoutes component={bookMarque} />} />
              <Route path="/admin" element={<ProtectedRoutes component={AdminHome}/>} />
              <Route path="/manageMarques" element={<ManageMarques />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
      </Provider>

      </AuthProvider>
    </Router>
     
     
    )

  } };




export default App