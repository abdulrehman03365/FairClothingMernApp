import { useState } from "react";
import './bookMarque.css'
import Nevbar from "../../components/navBar/nevbar";
import MarqueView from "../../components/clothView/ClothView";
import sendMessage from "../../services/chat";
import socket from "../../services/chat";
import { useEffect } from "react";
import { getallMarques } from "../../api";
import Footer from "../../components/Footer/Footer";
function BookMarque() {
  const [marqueDetails,setMarqueDetails]=useState([])
  useEffect((
   
  
   ) => {
    
const fetchMarques =async ()=>{
const data= await getallMarques('All')
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
      <Nevbar />
      <div className="container d-flex justify-content-center align-items-center " style={{height :"100%"}} id="MarquePlaceHolder">
        {/* {marqueDetails.map((marqueDetail) => (
          <MarqueView key={marqueDetail._id} marqueDetail={marqueDetail} />
        ))}  */}
        <MarqueView marqueDetails marqueDetail={{id:1,location:"kh",image:"src" ,status:"booked" ,capaciy:"cap"}}></MarqueView>
        
        <MarqueView marqueDetails marqueDetail={{id:1,location:"kh",image:"src" ,status:"booked" ,capaciy:"cap"}}></MarqueView>
        
      </div>
     
    </>
  );
}

export default BookMarque;
