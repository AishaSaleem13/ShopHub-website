// config/api.js
import axios from 'axios'

export const getFurnitureProducts = () => {
  return axios.get(import.meta.env.VITE_API_CATEGORY_URL)
}

export const getProductById = (id) => {
  return axios.get(`${import.meta.env.VITE_API_BASE_URL}/${id}`)
}
 export async function setSignUp({ email, password, fullname }) {
  try {
    const res = await fetch('https://your-api-url.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        fullname,
      }),
    });

    if (!res.ok) {
      throw new Error('Signup failed');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
}