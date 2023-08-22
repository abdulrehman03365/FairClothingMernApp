import { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../navBar/nevbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useSelector } from "react-redux";

function Nevbar() {
  const [showMenu, setShowMenu] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userType = useSelector((state)=>state.auth.userType)
  
  console.log("value of isAuthenticated  state : " +isAuthenticated);
  function toggleMenu() {
    setShowMenu(!showMenu);
    console.log("set Show value" + showMenu);
  }
    
    return (
       <>
      <nav id="navbar" className="">
      <div className="nav-wrapper">  
      <div className="logo">
          <a> {userType === 'admin' ? 'Admin Panel' : 'Fair Clothing'}</a>
        </div>
    
        
        <ul id="menu">
        <ul className="navbar-nav mr-auto">
          {!isAuthenticated && userType!='admin' &&(<li><Link to={'/signUp'} className="nav-link">Sign Up</Link></li>)}
          {!isAuthenticated && userType!='admin' &&(<li><Link to={'/signIn'} className="nav-link">Sign In</Link></li>)}
          
          {!userType!='admin'&&<li><Link to={'/bookMarque'} className="nav-link">Book Marque</Link></li>}
        </ul>
        </ul>
      </div>
    </nav>
    
    
    
    <div className="menuIcon" onClick={toggleMenu}>
      
      <span className="icon icon-bars"></span>
      <span className="icon icon-bars overlay"></span>
    </div>
    
    
    {showMenu && (<div class="overlay-menu">
      <ul id="menu">
         
          {!isAuthenticated&&<li><Link to={'/signUp'} className="nav-link">Sign Up</Link></li>}
          {!isAuthenticated&&<li><Link to={'/signIn'} className="nav-link">Sign In</Link></li>}
          {isAuthenticated&&<li><Link to={'/signOut'} className="nav-link">Sign In</Link></li>}
          <li><Link to={'/bookMarque'} className="nav-link">Book</Link></li>
        </ul>
    </div>)}
       </>

        
      
    )
}




export default Nevbar