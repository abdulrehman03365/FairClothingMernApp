import { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import '../navBar/nevbar.css'
function Nevbar() {

    
    return (
        
      <div><nav id="navbar" class="">
      <div class="nav-wrapper">
       
        <div class="logo">
       
          <a> Booking Website</a>
        </div>
    
       
        <ul id="menu">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/signUp'} className="nav-link">Sign Up</Link></li>
          <li><Link to={'/signIn'} className="nav-link">Sign In</Link></li>
          <li><Link to={'/bookMarque'} className="nav-link">Book Marque</Link></li>
        </ul>
        </ul>
      </div>
    </nav>
    
    
    
    <div class="menuIcon">
      <span class="icon icon-bars"></span>
      <span class="icon icon-bars overlay"></span>
    </div>
    
    
    <div class="overlay-menu">
      <ul id="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
    </div></div>

        
      
    )
}




export default Nevbar