import { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../navBar/nevbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useSelector } from "react-redux";
import logo from "../../assets/logo-color.png"
import { Navbar , Container , Nav , NavDropdown } from "react-bootstrap";

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
    //    <>
    //    <nav id="navbar" >
    //    <div className="nav-wrapper">  
    //    <div className="logo">
    //    <img className="Logo-img" src={logo} ></img>
    //     </div>
    
        
    //     <ul id="menu">
    //     <ul className="navbar-nav mr-auto">
    //       {!isAuthenticated && userType!='admin' &&(<li><Link to={'/signUp'} className="nav-link">Sign Up</Link></li>)}
    //       {!isAuthenticated && userType!='admin' &&(<li><Link to={'/signIn'} className="nav-link">Sign In</Link></li>)}     
    //       {userType!='admin'&&<li><Link to={'/bookMarque'} className="nav-link">Book Marque</Link></li>}
    //     </ul>
    //     </ul>
    //   </div>

    //   <div className="menuIcon" onClick={toggleMenu}>
      
    //   <span className="icon icon-bars"></span>
    //   <span className="icon icon-bars overlay"></span>
    //   </div>
    //    </nav>
   
     
    
    
    
  
    
    
    // {showMenu && (<div class="overlay-menu">
    //   <ul id="menu">
         
    //       {!isAuthenticated&&<li><Link to={'/signUp'} className="nav-link">Sign Up</Link></li>}
    //       {!isAuthenticated&&<li><Link to={'/signIn'} className="nav-link">Sign In</Link></li>}
    //       {isAuthenticated&&<li><Link to={'/signOut'} className="nav-link">Sign In</Link></li>}
    //       <li><Link to={'/bookMarque'} className="nav-link">Book</Link></li>
    //     </ul>
    // </div>)}
    //    </>

    <>
 <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="nav-brand" href="#home">Fair Clothing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href='/signUp'>Sign Up</Nav.Link>
            <Nav.Link href='/SignIn'>Sign In</Nav.Link>
            <Nav.Link href='/bookMarque'>Book Marque</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
        
      
    )
}




export default Nevbar