import { useDispatch , useSelector } from "react-redux";
import { setUserAuth } from "./slices/authSlice";
import userCatagory from "./utils/utils";
import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'development'
? '/api' // Use the proxy during development
 : "https://fairclothing-f9c79.web.app/api"; 




console.log("BASE_URL",BASE_URL);
axios.defaults.baseURL=BASE_URL;
const authToken = localStorage.getItem('token');
console.log("token", authToken);
// axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;

export async function addCloth(clothData){
  const authToken = localStorage.getItem('token');
  const config={headers:{'Content-Type':'application/x-www-form-urlencoded',
  'Authorization':`Bearer ${authToken}`}}
  try{
    const response = await axios.post('/addCloth',clothData,config)
    const data = await response.json();
    return data;
  }
  catch (e){
    console.log("Exception in adding Cloth API", e.message);
  
    throw new Error("Error adding Cloth data");
  
  


  }
  


}

export async function updateCloth(clothId){

}

export async function deleteCloth(clothId){

}

export async function getallCloths(clothId){

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
  fetch(`${BASE_URL}/api/auth/signUp`,{method:'POST',
  headers:{
    'Content-type':'application/json'
  
  }, 
  
  body :JSON.stringify(data)} ).
  then(
    response=>{if (response.ok)alert('Successfully signed Up;')}
  )
  .catch(error => {
    console.error('Error:', error);
    alert('Error:', error)
  });
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


        if (!response.ok) {
          const JsonResp =  await response.json()
          throw new Error(JsonResp.message);
        }
        else 
        {
          const JsonResp =  await response.json()
          // userCatagory=JsonResp.userCatagory;       
            
                
            localStorage.setItem('token',JsonResp.authToken)
            localStorage.setItem('expiresIn',JsonResp.expiresIn)
            //userCatagory=JsonResp.userCatagory;
         
           
          
            
        }

        return response
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