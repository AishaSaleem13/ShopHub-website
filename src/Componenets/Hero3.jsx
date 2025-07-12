import React, { useEffect, useState } from 'react'
import { getFurnitureProducts } from '../config/Api.js'
import { useNavigate } from 'react-router-dom'

// Assets
import icon2 from '../assets/icons/graph.jpg'
import pic1 from '../assets/pictures/img22.jpg'
import pic2 from '../assets/pictures/img23.jpg'
import pic3 from '../assets/pictures/img24.jpg'
import pic4 from '../assets/pictures/img22.jpg'
import { useDispatch } from 'react-redux';
import { addtocart } from '../Store/cart';

const customImages = [pic1, pic2, pic3, pic4]

function Hero3() {

  const [products, setProducts] = useState([])
  const navigate = useNavigate()
const dispatch = useDispatch();
console.log("CATEGORY URL: ", import.meta.env.VITE_API_CATEGORY_URL);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
      const res = await getFurnitureProducts();
const limitedData = res.products.slice(0, 4);
        setProducts(limitedData)
      } catch (err) {
        console.error('Failed to fetch products:', err)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Our Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="w-full max-w-[180px] mx-auto overflow-hidden group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-[140px] sm:h-[160px] md:h-[180px] overflow-hidden rounded-md">
              <img
                src={customImages[index]}
                alt={product.title}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Add to Cart */}
              <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-sm py-1 px-2 flex justify-between items-center
                opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button onClick={(e) => {
    e.stopPropagation();
    dispatch(addtocart(product));
  }} className="text-sm font-medium hover:text-red-500">Add to Cart</button>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col items-start px-2 pt-1 pb-1 gap-[2px]">
              <img src={icon2} alt="icon" className="w-12 h-12 mb-1" />
              <h3 className="text-md font-semibold text-gray-800 leading-tight">{product.title}</h3>
              <p className="text-[10px] text-gray-500 leading-tight">{product.category}</p>
              <p className="text-[10px] text-gray-800 font-semibold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero3
