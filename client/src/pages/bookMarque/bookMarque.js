import { useState } from "react";
import './bookMarque.css'
import Nevbar from "../../components/navBar/nevbar";
import MarqueView from "../../components/clothView/ClothView";
import sendMessage from "../../services/chat";
import socket from "../../services/chat";
import { useEffect } from "react";
import { getallCloths } from "../../api";
import Footer from "../../components/Footer/Footer";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function BookMarque() {
  const [clothDetails,setClothDetails]=useState([])
  useEffect((
   
  
   ) => {
    
const fetchCloths =async ()=>{
const data= await getallCloths()
setClothDetails(data)

}


    
fetchCloths() 
   }, []);

  function sendMessage() {
    socket.auth = { name: "Abdul-Rehman" };
    socket.connect();
  }

  
  return (
    <>
  
      <div className="container d-flex justify-content-center align-items-center "  id="MarquePlaceHolder">
        {clothDetails.map((marqueDetail) => (
          <MarqueView key={marqueDetail._id} marqueDetail={marqueDetail} />
        ))} 
        
        
        
      </div>
     
    </>
  );
}

export default BookMarque;
