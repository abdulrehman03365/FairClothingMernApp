import { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import '../navBar/nevbar.css'
function Nevbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
    console.log("set Show value" + showMenu);
  }
    
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
    
    
    
    <div class="menuIcon" onClick={toggleMenu}>
      
      <span class="icon icon-bars"></span>
      <span class="icon icon-bars overlay"></span>
    </div>
    
    
    {showMenu && (<div class="overlay-menu">
      <ul id="menu">
      <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/signUp'} className="nav-link">SignUp</Link></li>
          <li><Link to={'/signIn'} className="nav-link">SignIn</Link></li>
          <li><Link to={'/bookMarque'} className="nav-link">Book</Link></li>
        </ul>
    </div>)}</div>

        
      
    )
}




export default Nevbar