import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  var currentTime = new Date().getTime();
  const expiresIn = localStorage.getItem('expiresIn');
  const expirationTime = new Date().getTime() + (expiresIn * 1000);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  

  const checkUserLogin = () => {
   
    var currentTime = new Date().getTime();
    console.log(currentTime);
    console.log(expirationTime);
    const remTime= expirationTime-currentTime;
    console.log('Remaining Time :',remTime);
    if (currentTime > expirationTime) {
      localStorage.removeItem('token');
      localStorage.removeItem('expiresIn');
      console.log('Your Session is expired');
      setIsLoggedIn(false);
      navigate('/');
      alert("Your Session is expired")

    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLoggedIn) {
        checkUserLogin();
      }
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
