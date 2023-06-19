import { useDispatch , useSelector } from "react-redux";
import { setUserAuth } from "./slices/authSlice";
const BASE_URL = 'http://localhost:8000/api';

async function fetchToken() {
  // Retrieve the token from local storage or your authentication mechanism
  const token = localStorage.getItem('token');
  
  // Check if the token is valid or expired
  if (!token) {
   
  }
  
  // If token is valid and not expired, return it
  return token;
}
export async function addMarque(formData) {
  const token = await fetchToken();
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
  const token = await fetchToken();
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
  params.append('location', location);
  const token = await fetchToken();
  const response = await fetch(`http://localhost:8000/api/getallMarques?${params.toString()}`, {
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
  const token = await fetchToken();
  const response = await fetch(`${BASE_URL}/getMarque?id=${id}`,{method:'GET',credentials:'include',headers:{'Authorization': `Bearer ${token}`}});
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
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
        
            
                
            localStorage.setItem('token',JsonResp.authToken)
            localStorage.setItem('expiresIn',JsonResp.expiresIn)
           
          
            
        }

        return response
      }

export async function deleteMarque(id){
  const token = await fetchToken(); 
  const response = await fetch(`${BASE_URL}/deleteMarque`,{method:'POST',credentials:'include'
  ,headers:{'Authorization': `Bearer ${token}` ,'Content-type':'application/json' , },body:JSON.stringify({id:id})});

  const data = await response.json();

  if (!response.ok) {
    return data
  }
  

  return data;
}