import { useState } from "react";
import './bookMarque.css'
import Nevbar from "../../components/navBar/nevbar";
import MarqueView from "../../components/clothView/ClothView";
import sendMessage from "../../services/chat";
import socket from "../../services/chat";
import { useEffect } from "react";
import { getallCloths } from "../../api";
import Footer from "../../components/Footer/Footer";
function BookMarque() {
  const [marqueDetails,setMarqueDetails]=useState([])
  useEffect((
   
  
   ) => {
    
const fetchMarques =async ()=>{
const data= await getallCloths()
setMarqueDetails(data)

}


    
fetchMarques() 
   }, []);

  function sendMessage() {
    socket.auth = { name: "Abdul-Rehman" };
    socket.connect();
  }

  
  return (
    <>
      
      <div className="container d-flex justify-content-center align-items-center "  id="MarquePlaceHolder">
        {marqueDetails.map((marqueDetail) => (
          <MarqueView key={marqueDetail._id} marqueDetail={marqueDetail} />
        ))} 
        
        
        
      </div>
     
    </>
  );
}

export default BookMarque;
