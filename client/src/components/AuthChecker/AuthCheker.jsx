import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { setUserAuth } from "../../slices/authSlice";
export default function AuthCheker(){
  const navigate = useNavigate();
  const expiresIn = localStorage.getItem('expiresIn');
  const expirationTime = new Date().getTime() + (expiresIn * 1000);
  const dispatch =useDispatch()
  const isAuthenticated=useSelector((state) => state.auth.isAuthenticated);
  
  

  const checkUserLogin = () => {
   
    var currentTime = new Date().getTime();
    const remTime= expirationTime-currentTime;
    console.log('Session Remaining Time :',remTime);
    if (currentTime > expirationTime) {
      localStorage.removeItem('token');
      localStorage.removeItem('expiresIn');
      
      console.log('Your Session is expired');
      dispatch(setUserAuth(false))
      alert("Your Session is expired")
      navigate('/');

    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAuthenticated) {
        checkUserLogin();
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [isAuthenticated]);

}