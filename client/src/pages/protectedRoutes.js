import { Route, Navigate } from "react-router-dom";
import BecomePartner from "./becomePartner/becomePartner";
import Cookies from 'js-cookie';
import Alertcomp from "../components/alertComp";
export function ProtectedRoutes({component:Component ,...rest}) {
//   const isAuthenticated = localStorage.getItem("token");
 
const tocken=Cookies.get('NodeJsBoockingWebsite')
 console.log("tocken is :" + tocken);
 if (tocken)
 {
   return (
    <>
    <Component/> 
    <Navigate to="/signIn"/>
    </>
     
    );
 }
 else
 {
  
  return (
    <Alertcomp varient={"success"}  message={"Your Login session is expired"} ></Alertcomp>
  )

 }

 
}