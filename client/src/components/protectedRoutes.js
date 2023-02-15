import { Route, Navigate } from "react-router-dom";
import BecomePartner from "./becomePartner/becomePartner";
export function ProtectedRoutes({component:Component ,...rest}) {
//   const isAuthenticated = localStorage.getItem("token");
const isAuthenticated=true;

  return (
   isAuthenticated ? <Component/> : <Navigate to="/signIn"/>
  );
}