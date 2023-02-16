import { Component } from "react";
import { useState, useEffect } from "react";

function BecomePartner({value})
{
  const [selection,setSelection]=useState("")
  
   useEffect(
   async () => {

    try {
        const response = await fetch('https://api.npms.io/v2/search?q=react');
      console.log(response);
    } catch (error) {
        // TypeError: Failed to fetch
        console.log('There was an error', error)
      } 
    
    },[])
 


    return(
   
    <div>
    <h1>Welcome to become Partner page</h1>
    <input type="radio" name="option" value={"a"}  onChange={(event)=>{setSelection(event.target.value)}} />Male

    <p></p>
    </div>
    
    )
  
   
}

export default BecomePartner