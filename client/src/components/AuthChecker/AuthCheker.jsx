import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch ,useSelector } from "react-redux";
import { setUserAuth, setUserType } from "../../slices/authSlice";
export default function AuthCheker(){
  const navigate = useNavigate();
  const expiresIn = localStorage.getItem('expiresIn');
  const expirationTime = new Date().getTime() + (expiresIn * 1000);
  const dispatch =useDispatch()
  const isAuthenticated=useSelector((state) => state.auth.isAuthenticated);
  var userType=useSelector((state) => state.auth.userType);
  
 

  const checkUserSessionTime = () => {
    
    var currentTime = new Date().getTime();
    const remTime= expirationTime-currentTime;
    console.log('Session Remaining Time :',remTime);
    console.log("Auth Checker value of userType is " + userType);
    console.log('user Type :',userType);
    if (currentTime > expirationTime) {
      localStorage.removeItem('token');
      localStorage.removeItem('expiresIn');     
      console.log('Your Session is expired');
      dispatch(setUserAuth(false))
      dispatch(setUserType(undefined))
      alert("Your Session is expired")
      if(userType=="user")
      
      navigate('signIn');

      else if (userType=="admin"){
        navigate('/admin/signIn')
      }

    }
  };

  useEffect(() => {

    const interval = setInterval(() => {
      if (isAuthenticated) {
        checkUserSessionTime();
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [isAuthenticated]);





}