import { DropdownButton , Dropdown , Button} from "react-bootstrap"
import './footer.css'
export default function Footer()
{


    return(
        
        <>
        <div className="Footer-Container"  style={{display:"flex",marginTop:"auto" , flexDirection:"column"  ,alignItems:"center"}}>
       
         <footer>
          <div className="Footer-top" style={{"display":"flex"  , gap:"10vw", flexDirection:"row"}} >
          <div className="Contact-div">
          <h5 className="Footer-Headings">Contact Us </h5>
            <ul className="Footer-List">
              <li className="Footer-ListItems">welisten@FairClothing.com</li>
              <li className="Footer-ListItems">+92 3022448152</li>
            </ul>
          </div>
          <div className="Info-div">
            <h5 className="Footer-Heading">Information</h5>
            <ul className="Footer-List">
              <li className="Footer-ListItems">About Us</li>
              <li className="Footer-ListItems">Privacy Policy</li>
            </ul>
          </div>
          <div className="Newsletter-div">
            <h5 className="Footer-Heading">NewsLetter SignUp</h5>
            <ul className="Footer-List">Subscribe to our  Newsletter for Exclusive Updates</ul>
          </div>
          </div>
         
         <div class="Footer-bottom"  style={{"textAlign":"center" }}>
         <p>© All Rights Reserved by Developer <a href="#">Abdul-Rehman.</a></p>

</div>
         </footer>

        </div>
       
        </>)
}


