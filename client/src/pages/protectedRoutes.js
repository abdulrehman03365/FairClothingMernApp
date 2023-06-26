import { Route, Navigate } from "react-router-dom";
import bookMarque from "./bookMarque/bookMarque";
import Cookies from 'js-cookie';
import { useSelector } from "react-redux";
import Alertcomp from "../components/alertComp";
import { useState } from "react";

export  function  ProtectedRoutes({component:Component ,...rest}) {
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