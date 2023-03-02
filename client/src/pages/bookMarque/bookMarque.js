import { Component } from "react";
import { useState, useEffect } from "react";
import './bookMarque.css'
import Nevbar from "../../components/navBar/nevbar";
import MarqueView from "../../components/marqueView/marqueView";
function bookMarque()
{
 
  // const [viewCount,setCount]=useState([])
 const marqueDetails=[{
  name:"Niaz Marque",
  location :'Adiala Road',
  img:"./marqueImages/bilal.jpg"} ,
{name:"Niaz Marque",
location :'Adiala Road',
img:"client/public/marqueImages/bilal.jpeg"},
{name:"Niaz Marque",
location :'Adiala Road',
img:"client/public/marqueImages/bilal.jpeg"},
{name:"Niaz Marque",
location :'Adiala Road',
img:"client/public/marqueImages/bilal.jpeg"}]

//  async function loadMarqueData()
//    {

//   //  response= await fetch()
    
  

//    }
   
//  useEffect(

// ()=>{

// loadMarqueData()

// }

//  )



    return(
   
    <div>
    <Nevbar></Nevbar>
  
    <div id="MarquePlaceHolder">
    <MarqueView marqueDetail={marqueDetails[0]} />
    {/* {marqueDetails.map((marqueDetail)=>{<MarqueView marqueDetail={marqueDetail} />})} */}
    </div>

    </div>
    
    )
  
   
}

export default bookMarque