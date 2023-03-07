import AdminHeader from "../../components/adminComponents/adminHeader/adminHeader";
import Preview from "../../components/adminComponents/preview/preview";
import {useForm} from "react-hook-form"
import { useState } from "react";
import './manageMarques.css'
function ManageMarques() {

   const [imagePreview, setImagePreview] = useState(null);


  const handleSubmit=()=>
   {

   }


    return ( 
     <div>
        <AdminHeader/>
        
        <div className="search-div">
         <input className="searchTxt"></input>
         <button className="addNewBt">Add new</button>
        </div>
      
         <form onSubmit={handleSubmit}>
            <div className="add-marque-form" style={{"marginTop":50 , "display":"flex" ,
       "flexDirection":"column" , "alignContent":"center"  , "justifyContent":"center" , "marginRight":"30%" , "marginLeft":"30%"}}>

            <input className="add-marque-input"></input>
            <label>Marque Name</label>
           
            <input className="add-marque-input"></input>
            <label>Marque Location</label>
            
            <input className="add-marque-input"></input>
            <label>Capacity</label>

            <input className="add-marque-input"></input>
            <label>Status</label>

            <label htmlFor="image">Image: </label>
            <input type="file" id="imageInput" ></input>

            <input type={"submit"} value="Add Marque"></input>


           
            </div>
            


         </form>

     




     </div>
     );
}

export default ManageMarques;