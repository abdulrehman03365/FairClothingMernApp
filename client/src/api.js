const BASE_URL = 'http://localhost:8000/api';

export async function addMarque(formData) {
  const response = await fetch(`${BASE_URL}/addMarque`, {
    method: 'POST',
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
  const response = await fetch(`${BASE_URL}/updateMarque?id=${id}`,{method:'POST',credentials:'include',body:formData});

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function getMarque(id) {
  const response = await fetch(`${BASE_URL}/getMarque?id=${id}`,{method:'GET',credentials:'include'});

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}