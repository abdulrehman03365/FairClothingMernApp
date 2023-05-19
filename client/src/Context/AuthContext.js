import { createContext, useEffect, useState , } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider=({childern})=>{
const nevigate=useNavigate()
var currentTime=new Date().getTime();
const expiresIn=localStorage.getItem('expiresIn')
var expirationTime = new Date().getTime() + ( expiresIn * 1000); 
const [isLoggedIn,setIsLoggedIn]=useState(false)

const checkUserLogin=()=>{
    if (currentTime> expirationTime){
        localStorage.removeItem(token)
        localStorage.removeItem(expiresIn)
        console.log('Your Session is expired');
        setIsLoggedIn( false);
        nevigate("/")
        
    }
}

useEffect(()=>{
const interval = setInterval(()=>{if (isLoggedIn){checkUserLogin}},30)

return(
    clearInterval(interval)
)
},[])


return (<AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
    {childern}
</AuthContext.Provider>);
}

export{AuthContext,AuthProvider}