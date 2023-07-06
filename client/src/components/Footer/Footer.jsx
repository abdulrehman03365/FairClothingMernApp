import { DropdownButton , Dropdown , Button} from "react-bootstrap"

export default function Footer()
{


    return(
        
        <>
        <div className="Footer-Container"  style={{display:"flex" , flexDirection:"column" ,alignItems:"center"}}>
       
         <footer>
          <div className="Footer-top" style={{"display":"flex" , flexDirection:"row"}} >
          <div className="Contact-div">
            <h1>Contact Us</h1>
          </div>
          <div className="Info-div">
            <h1>Information</h1>
          </div>
          <div className="Newsletter-div">
            <h1>NewsLetter SignUp</h1>
          </div>
          </div>
         
         <div class="Footer-bottom"  style={{"textAlign":"center"}}>
         <p>© All Rights Reserved by Developer &nbsp; <a href="#">Abdul-Rehman.</a></p>

</div>
         </footer>

        </div>
       
        </>)
}


