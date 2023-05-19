import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const currentTime = new Date().getTime();
  const expiresIn = localStorage.getItem('expiresIn');
  const expirationTime = new Date().getTime() + (expiresIn * 1000);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserLogin = () => {
    if (currentTime > expirationTime) {
      localStorage.removeItem('token');
      localStorage.removeItem('expiresIn');
      console.log('Your Session is expired');
      setIsLoggedIn(false);
      navigate('/');
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
