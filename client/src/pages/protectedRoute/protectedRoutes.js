import { Route, Navigate, useNavigate } from "react-router-dom";
import {bookMarque} from '../bookMarque/bookMarque'
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from "react-redux";
import Alertcomp from "../../components/alertComp";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation  } from "react-router-dom";
import { setUserType } from "../../slices/authSlice";
export  function  ProtectedRoutes({component:Component ,...rest}) {
const navigate=useNavigate()
const location=useLocation()
const dispatch=useDispatch()
  useEffect(()=>{
    if (location.pathname=='/admin')
    {
      dispatch(setUserType("admin"))
    }

},[location.pathname])

const userType=useSelector((state)=>state.auth.userType)

const token=localStorage.getItem('token')

 console.log("tocken is :" + token);
 console.log("Protected routes value of userType is " + userType);
 if (token)
 {
   return (
    <>
  <Component  > </Component>
    </>
    
    );
 }
 else
 {
  
  
  return (
    <>
  {userType=="undefined" &&  <Navigate to="/signIn"></Navigate>}  
  {userType=="user" &&  <Navigate to="/signIn"></Navigate>}
  {userType=="admin" &&  <Navigate to="/admin/signIn"></Navigate>}
    </>
   
    )

 }

 
}