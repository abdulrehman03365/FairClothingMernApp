import { useDispatch , useSelector } from "react-redux";
import { setUserAuth } from "./slices/authSlice";
import userCatagory from "./utils/utils";
import axios from 'axios'
import { toast } from "react-hot-toast";
import { ToastBar } from "react-hot-toast";


const BASE_URL = process.env.NODE_ENV === 'development'
? '/api' // Use the proxy during development
 : "https://us-central1-fairclothing-f9c79.cloudfunctions.net/app/api"; 
console.log("BASE_URL",BASE_URL);
axios.defaults.baseURL=BASE_URL;


  // Obtain the access token

const authToken = localStorage.getItem('token');



const config={headers:{'Content-Type':'application/json',
'Authorization':`Bearer ${authToken}`}}
// axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;

export async function addCloth(clothData){
  const addClothConfig={headers:{'Content-Type':'multipart/form-data',
  'Authorization':`Bearer ${authToken}`}}
  try {
    const response = await axios.post('/cloth/addCloth',clothData,addClothConfig)
    alert('Cloth is added successfully!');
    if (response.ok)
    {
      alert('Cloth is added successfully!');
      
    }
   else if(!response.ok)
     {
      
      const data = await response.json();
   
    if(data && data.message)
    {
      throw new Error(data.message)
    }}


  } catch (error) {
    console.log("Exception in Adding Cloth API", error.message);
    throw new Error(error.message);
  }  
  
}
  
export async function updateCloth(clothId,clothData){


  try {
    const response = await axios.post(`/updateCloth/${clothId}`,clothData,config)
    if(!response.ok)
     {
      throw new Error("Exception in updating Cloth")
     }
    const data = await response.json();
    if(data && data.message)
    {
      throw new Error(data.message)
    }
    return data;

  } catch (error) {
    console.log("Exception in updating Cloth API", error.message);
    throw new Error(error.message);
  } 
}

export async function deleteCloth(clothId){


  try {
    const response = await axios.post(`/deleteCloth/${clothId}`,config)
    if(!response.ok)
     {
      throw new Error("Exception in deleting Cloth")
     }
    const data = await response.json();
    if(data && data.message)
    {
      throw new Error(data.message)
    }
    return data;

  } catch (error) {
    console.log("Exception in deleting Cloth API", error.message);
    throw new Error(error.message);
  } 
}

export async function getallCloths(){
  try {
    const response = await axios.get('/cloth/',{headers:{'Content-Type':'application/json',
    'Authorization':`Bearer ${authToken}`}})
    if(!response.ok)
     {
      throw new Error("Exception in Getting All Cloths")
     }
    const data = await response.json();
    if(data && data.message)
    {
      throw new Error(data.message)
    }
    return data;

  } catch (error) {
    console.log("Exception in geting all  Cloths API", error.message);
    throw new Error(error.message);
  } 

}



export async function addMarque(formData) {
  const token = await  localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/addMarque`, {
    method: 'POST',headers:{'Authorization': `Bearer ${token}`},
    credentials: 'include',
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function updateMarque(id,formData) {
  const token = await  localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/updateMarque?id=${id}`,{method:'POST'
  ,headers:{'Authorization': `Bearer ${token}`},credentials:'include',body:formData});

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}


export async function getallMarques(location) {
  const params = new URLSearchParams();
  if (location)
  {
    params.append('location', location);
 
  }
  else
{
  params.append('location', 'All');
} 

  const token = await  localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/getallMarques?${params.toString()}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}




export async function getMarque(id) {
  const token = await  localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/getMarque?id=${id}`,{method:'GET',credentials:'include',headers:{'Authorization': `Bearer ${token}`}});
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}
export async function signUp(data){
  data=data;
  const response =await fetch(`${BASE_URL}/auth/signUp`,{method:'POST',
  headers:{
    'Content-type':'application/json'
  
  }, body :JSON.stringify(data)} )
  return response;
}
  

export async function signIn(data){
  
  const params=new URLSearchParams()
  for (const key in data) {
    params.append(key, data[key]);
  }
  const response= await fetch(`${BASE_URL}/auth/signIn`,
          {method:'POST',credentials:'include',
        headers:{
          'Content-type':'application/json'
        
        }, 
        body :JSON.stringify(data)}  )
      return response;


  
      }

export async function deleteMarque(id){
  const token = await  localStorage.getItem('token'); 
  const response = await fetch(`${BASE_URL}/deleteMarque`,{method:'POST',credentials:'include'
  ,headers:{'Authorization': `Bearer ${token}` ,'Content-type':'application/json' , },body:JSON.stringify({id:id})});

  const data = await response.json();

  if (!response.ok) {
    return data
  }
  

  return data;
}