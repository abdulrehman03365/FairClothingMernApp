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
    

    <>
 <Navbar expand="lg" className="bg-body-tertiary  justify-content-start">
      <Container>
      <Navbar.Brand className="nav-brand">
        <Link to="/">
          <img
            src={logo} // Use the imported logo variable as the src
            alt="Fair Clothing Logo"
            width="180"
            height="20"
            className="img-fluid" // Add the "img-fluid" class for responsive images
          />
     
        </Link>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         
          <Nav className="ms-auto">
              {/* Use Link for client-side navigation */}
              <Link to="/signUp" className="nav-link">
                Sign Up
              </Link>
              <Link to="/signIn" className="nav-link">
                Sign In
              </Link>
              <Link to="/bookMarque" className="nav-link">
                Book Marque
              </Link>
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
        
      
    )
}




export default Nevbar