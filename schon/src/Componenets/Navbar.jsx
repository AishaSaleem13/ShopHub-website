import React from 'react'
import icon from '../assets/icons/icon.jpg'

function Navbar() {
  return (
    <>
      <div className='flex bg-black w-full h-10'>
        <div className='left side'>
          <button className='bg-gray-900 text-gray-400 ml-20 mt-1 py-1'> +1 (555) 333 22 11</button>
          <button className='text-gray-400 ml-16 mt-1 py-1'>info@schon.chairs</button>
        </div>

        <div className="">
          <button className='text-gray-400 ml-80 mt-1 py-1 cursor-pointer'>orders</button>
          <button className='text-gray-400 ml-10 mt-1 py-1 cursor-pointer'>my Accout</button>
          <button className='bg-gray-900 text-gray-400 ml-10 mt-1 px-2 py-1.5 cursor-pointer'>checkout</button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex flex-wrap items-center px-6 py-4 text-lg text-gray-600 tracking-wide">
        {/* Center Brand */}
        <div className="w-full ml-18 text-center mb-2 sm:mb-0 sm:w-auto">
          <a href="#" className="text-5xl font-semibold hover:text-black transition-all duration-200">Schon.</a>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 w-full sm:w-auto ml-40 mt-2">
          <a href="#" className="hover:text-black transition-all duration-200">Home</a>
          <a href="#" className="hover:text-black transition-all duration-200">Products</a>
          <a href="#" className="hover:text-black transition-all duration-200">About</a>
          <a href="#" className="hover:text-black transition-all duration-200">Contact</a>
          <a href="#" className="hover:text-black transition-all duration-200">Blog</a>
        </div>

        {/* Cart Section */}
      {/* Cart Section */}
<div className='flex items-center ml-8 mt-2'>
  <img src={icon} alt="" className='w-8 h-8' />
  
  {/* Stack cart label + item info */}
  <div className='ml-3 leading-none'>
    <a href="#" className='text-bold text-black font-bold font-mono cursor-pointer'>Shopping cart</a>
    <p className='text-sm text-gray-500'>3 items — $74.00</p>
  </div>
</div>
</div>

      
    </>
  )
}

export default Navbar
