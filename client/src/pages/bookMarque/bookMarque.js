import { useState } from "react";
import './bookMarque.css'
import Nevbar from "../../components/navBar/nevbar";
import MarqueView from "../../components/marqueView/marqueView";
import sendMessage from "../../services/chat";
import socket from "../../services/chat";
import { useEffect } from "react";

function BookMarque() {
  useEffect(() => {}, []);

  function sendMessage() {
    socket.auth = { name: "Abdul-Rehman" };
    socket.connect();
  }

  const marqueDetails = [
    {
      id: 1,
      name: "Niaz Marque",
      location: "Adiala Road",
      image: "./marqueImages/bilal.jpg",
      status: "booked",
      capacity: "1000"
    },
    {
      id: 2,
      name: "Niaz Marque",
      location: "Adiala Road",
      image: "./marqueImages/bilal.jpg",
      status: "booked",
      capacity: "1000"
    },
    {
      id: 3,
      name: "Niaz Marque",
      location: "Adiala Road",
      image: "./marqueImages/bilal.jpg",
      status: "booked",
      capacity: "1000"
    },
    {
      id: 4,
      name: "Niaz Marque",
      location: "Adiala Road",
      image: "./marqueImages/bilal.jpg",
      status: "booked",
      capacity: "1000"
    }
  ];

  return (
    <div>
      <Nevbar />
      <div id="MarquePlaceHolder">
        {marqueDetails.map((marqueDetail) => (
          <MarqueView key={marqueDetail.id} marqueDetail={marqueDetail} />
        ))}
      </div>
    </div>
  );
}

export default BookMarque;
