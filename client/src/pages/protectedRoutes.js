import { Route, Navigate } from "react-router-dom";
import bookMarque from "./bookMarque/bookMarque";
import Cookies from 'js-cookie';
import Alertcomp from "../components/alertComp";
import { useState } from "react";

export  function  ProtectedRoutes({component:Component ,...rest}) {


const token=localStorage.getItem('token')
 console.log("tocken is :" + token);
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
    <Navigate to="/signIn"></Navigate>
    </>
   
    )

 }

 
}