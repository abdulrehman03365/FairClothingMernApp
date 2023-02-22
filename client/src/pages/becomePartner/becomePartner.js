import { Component } from "react";
import { useState, useEffect } from "react";

function BecomePartner({value})
{
  const [selection,setSelection]=useState("")
  
   
   
 


    return(
   
    <div>
    <h1>Welcome to become Partner page</h1>
    <input type="radio" name="option" value={"a"}  onChange={(event)=>{setSelection(event.target.value)}} />Male

    <p></p>
    </div>
    
    )
  
   
}

export default BecomePartner