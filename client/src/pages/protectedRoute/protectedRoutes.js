// import { Route, Navigate, useNavigate, Link } from "react-router-dom";
// import {bookMarque} from '../bookMarque/bookMarque'
// import Cookies from 'js-cookie';
// import { useDispatch, useSelector } from "react-redux";
// import Alertcomp from "../../components/alertComp";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useLocation  } from "react-router-dom";
// import { setUserType } from "../../slices/authSlice";
// export  function  ProtectedRoutes({component:Component ,...rest}) {
// const navigate=useNavigate()
// const location=useLocation()
// const dispatch=useDispatch()
//   useEffect(()=>{
//     if (location.pathname=='/admin')
//     {
//       dispatch(setUserType("admin"))
//     }

// },[location.pathname])

// const userType=useSelector((state)=>state.auth.userType)

// const token=localStorage.getItem('token')

//  console.log("tocken is :" + token);
//  console.log("Protected routes value of userType is " + userType);
//  console.log("user type",userType);
//  if (token)
//  {
//    return (
//     <>
//   <Component  > </Component>
//     </>
    
//     );
//  }
//  else
//  {
  
  
//   return (
//     <>
    

//   {typeof userType==="undefined" &&  <Navigate to="/signIn"></Navigate>}  
//   {userType=="user" &&  <Navigate to="/signIn"></Navigate>}
//   {userType=="admin" &&  <Navigate to="/admin/signIn"></Navigate>}
//   </> 
//     )

//  }

 
// }


import { Route, useNavigate } from "react-router-dom";
import { bookMarque } from '../bookMarque/bookMarque';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from "react-redux";
import Alertcomp from "../../components/alertComp";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setUserType } from "../../slices/authSlice";

export function ProtectedRoutes({ component: Component, ...rest }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const userType = useSelector((state) => state.auth.userType);

  const token = localStorage.getItem('token');

  console.log("tocken is :" + token);
  console.log("Protected routes value of userType is " + userType);
  console.log("user type", userType);

  useEffect(() => {
    if (!token) {
          if (location.pathname=='/admin')
    {
      dispatch(setUserType("admin"))
    }
     else if (typeof userType === "undefined" || userType === "user") {
        navigate("/signIn");
      } else if (userType === "admin") {
        navigate("/admin/signIn");
      }
    }
  }, [token, userType, navigate]);

  return (
    <>
      {token ? <Component /> : null}
    </>
  );
}
