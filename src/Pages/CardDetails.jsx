// Components/ProductDetail.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function ProductDetail() {

  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/${id}`)
        setProduct(res.data)
      } catch (err) {
        console.error('Error fetching product:', err)
      }
    }

    fetchProduct()
  }, [id])

  if (!product) return <p className="p-4">Loading...</p>

  return (
    <div className="p-6" >
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className="w-64 h-64 object-cover mb-4" />
      <p className="text-gray-700">{product.description}</p>
      <p className="mt-2 text-lg font-bold">${product.price}</p>
    </div>
  )
}

export default ProductDetail
