import { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BecomePartner from "../becomePartner/becomePartner";
import Nevbar from "../../components/navBar/nevbar";
function Home(){

 const [value,setValue]=useState("initial value")
        return( 
            <div>
              <Nevbar></Nevbar>

      

            </div>
       )
    }
    
    


export default Home