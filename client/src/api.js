const BASE_URL = 'http://localhost:8000/api';
const token = localStorage.getItem('token');
export async function addMarque(formData) {
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
  const response = await fetch(`${BASE_URL}/updateMarque?id=${id}`,{method:'POST'
  ,headers:{'Authorization': `Bearer ${token}`},credentials:'include',body:formData});

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}


export async function getallMarques(){
  const response=await fetch('http://localhost:8000/api/getallMarques',{method:'GET',headers:{'Authorization': `Bearer ${token}`}})
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data; 
}


export async function getMarque(id) {
  const response = await fetch(`${BASE_URL}/getMarque?id=${id}`,{method:'GET',credentials:'include',headers:{'Authorization': `Bearer ${token}`}});

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function signIn(data){
 
 
  const response= await fetch(`${BASE_URL}/auth/signIn`,
          {method:'POST',credentials:'include',
        headers:{
          'Content-type':'application/json'
        
        }, 
        body :JSON.stringify(data)}  )


        if (!response.ok) {
          throw new Error(data.message);
        }
        else 
        {
          const JsonResp =  await response.json()
        
            
            
            localStorage.setItem('token',JsonResp.authToken)
        }
        return response
      }