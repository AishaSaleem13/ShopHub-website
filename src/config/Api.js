// config/api.js
import axios from 'axios'

export const getFurnitureProducts = () => {
  return axios.get(import.meta.env.VITE_API_CATEGORY_URL)
}

export const getProductById = (id) => {
  return axios.get(`${import.meta.env.VITE_API_BASE_URL}/${id}`)
}
