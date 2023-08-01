import { Button } from "react-bootstrap"
export default function  Practice(){
function manuplateDom(){

}

return(<>
<header >
    <div id="header-div" style={{height:"10vh",border:"1px solid black ", margin :"1vh"}}></div>

</header>
<div  style={{margin:"auto" , caretColor:"transparent"}}>
<Button onClick={()=>{manuplateDom()}} >Click on Me</Button>

</div>

    
</>)


}