import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faEnvelope,faMobilePhone } from '@fortawesome/free-solid-svg-icons'
import { DropdownButton , Dropdown , Button} from "react-bootstrap"
import './Footer.css'
export default function Footer()
{


    return(
        
       <>
       <footer className="Footer-Container" >
      <div className="Footer-top">
        <div className="Contact-div">
          <h5 className="Footer-Heading">Contact Us</h5>
          <ul className="Footer-List">
            <li className="Footer-ListItem">
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '0.3vw' }} />
              welisten@FairClothing.com
            </li>
            <li className="Footer-ListItem">
              <FontAwesomeIcon icon={faMobilePhone} style={{ marginRight: '0.3vw' }} />
              +92 3022448152
            </li>
          </ul>
        </div>
        <div className="Info-div">
          <h5 className="Footer-Heading">Information</h5>
          <ul className="Footer-List">
            <li className="Footer-ListItem">About Us</li>
            <li className="Footer-ListItem">Privacy Policy</li>
          </ul>
        </div>
        <div className="Newsletter-div">
          <h5 className="Footer-Heading">Newsletter SignUp</h5>
          <p className="Footer-Description">Subscribe to our Newsletter for Exclusive Updates</p>
        </div>
      </div>
      <div className="Footer-bottom">
        <p className="Bottom-text">
          © All Rights Reserved by Developer <a href="https://github.com/abdulrehman03365">Abdul-Rehman.</a>
        </p>
      </div>
    </footer>
       </>)
}


