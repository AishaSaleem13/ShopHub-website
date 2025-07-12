import React from 'react'
import pic1 from '../assets/pictures/img22.jpg'
import icon2 from '../assets/icons/graph.jpg'
import { useDispatch } from 'react-redux'
import { addtocart } from '../Store/cart'
import { useNavigate } from 'react-router-dom'
function ProductCard() {
  const dispatch= useDispatch()
    const product = {
    id: 1,
    title: "Upholstered Chair",
    description: "Modern fabric seating.",
    thumbnail: pic1,
    price: 120
  };
  const navigate = useNavigate()
  return (
    <>
    <div>

 
 
    <div className="w-[150px] overflow-hidden group">
      {/* Product Image */}
      <div className="relative h-[140px] overflow-hidden rounded-md">
        <img
          src={pic1}
          alt="Product"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Slide-Up Panel */}
        <div className="absolute bottom-0 left-0 w-full backdrop-blur-md py-1 px-2 flex justify-between items-center
          opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button   onClick={()=>{dispatch(addtocart(product));
            navigate('/cart'); }} className="text-xs font-medium hover:text-red-500">Add to Cart</button>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col items-start px-2 pt-1 pb-1 gap-[2px]">
        <img src={icon2} alt="icon" className="w-8 h-8 mb-1" />
        <h3 className="text-xs font-semibold text-gray-800 leading-tight">Upholstered Chair</h3>
        <p className="text-[10px] text-gray-500 leading-tight">Modern fabric seating.</p>
      </div>
    </div>



</div></>
  )
}

export default ProductCard