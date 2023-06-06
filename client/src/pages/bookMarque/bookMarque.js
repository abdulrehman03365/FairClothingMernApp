import { useState } from "react";
import './bookMarque.css'
import Nevbar from "../../components/navBar/nevbar";
import MarqueView from "../../components/marqueView/marqueView";
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
const data= await getallMarques()
setMarqueDetails(data)
}


    
   fetchMarques() 
   }, []);

  function sendMessage() {
    socket.auth = { name: "Abdul-Rehman" };
    socket.connect();
  }

  
  return (
    <div>
      <Nevbar />
      <div id="MarquePlaceHolder">
        {marqueDetails.map((marqueDetail) => (
          <MarqueView key={marqueDetail._id} marqueDetail={marqueDetail} />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BookMarque;
