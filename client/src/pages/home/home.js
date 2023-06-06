import { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import bookMarque from "../bookMarque/bookMarque";
import Nevbar from "../../components/navBar/nevbar";
import Footer from "../../components/Footer/Footer";
function Home(){


 const [value,setValue]=useState("initial value")
        return( 
            < >
              <Nevbar></Nevbar>
              <div className="Body" style={{height:'40%'}}></div>
              <Footer></Footer>
      

            </>
       )
    }
    
    


export default Home