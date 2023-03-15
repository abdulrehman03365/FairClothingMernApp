import { useState } from "react";
import './bookMarque.css'
import Nevbar from "../../components/navBar/nevbar";
import MarqueView from "../../components/marqueView/marqueView";

function BookMarque() {
  const marqueDetails = [
    {
      name: "Niaz Marque",
      location: "Adiala Road",
      image: "./marqueImages/bilal.jpg",
      status:"booked",
      capacity:"1000"

      
    },
    {
      name: "Niaz Marque",
      location: "Adiala Road",
      image: "./marqueImages/bilal.jpg",
      status:"booked",
      capacity:"1000"
    },
    {
      name: "Niaz Marque",
      location: "Adiala Road",
      image: "./marqueImages/bilal.jpg",
      status:"booked",
      capacity:"1000"
    },
    {
      name: "Niaz Marque",
      location: "Adiala Road",
      image: "./marqueImages/bilal.jpg",
      status:"booked",
      capacity:"1000"
    }
  ];

  return (
    <div>
      <Nevbar />
      <div id="MarquePlaceHolder">
        {marqueDetails.map((marqueDetail) => (

          <MarqueView marqueDetail={marqueDetail} />
        ))}
      </div>
    </div>
  );
}

export default BookMarque;
