import { useState } from "react";
import { Link } from "react-router-dom";
function AdminHeader() {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu(!showMenu);
    console.log("set Show value" + showMenu);

  }

  return(<>
      <nav id="navbar" className="">
      <div className="nav-wrapper">
       
        <div className="logo">
       
          <a href="/admin/home"  style={{textDecoration:"none" , color:"rgb(13, 26, 38)"}}> Admin Panel</a>
        </div>
    
        
        <ul id="menu">
        <ul className="navbar-nav mr-auto">
         
          
          {<li><Link to={'/admin/SignIn'} className="nav-link">Sign In</Link></li>}
          {<li><Link to={'/manageCloths'} className="nav-link">manage Cloths</Link></li>}
        </ul>
        </ul>
      </div>
    </nav>
    
    
    
    <div className="menuIcon" onClick={toggleMenu}>
      
      <span className="icon icon-bars"></span>
      <span className="icon icon-bars overlay"></span>
    </div>
    
    
 
  </>)
}

export default AdminHeader;