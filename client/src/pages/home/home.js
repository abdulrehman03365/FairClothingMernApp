import { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BecomePartner from "../becomePartner/becomePartner";
function Home(){

 const [value,setValue]=useState("initial value")
        return( 
            <div>
        <h1>Welcome to Booking website Home Page</h1>
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/signUp'} className="nav-link">SignUp</Link></li>
          <li><Link to={'/signIn'} className="nav-link">SignIn</Link></li>
          <li><Link to={'/becomePartner'} className="nav-link">BecomePartner</Link></li>
        </ul>

            </div>
       )
    }
    
    


export default Home