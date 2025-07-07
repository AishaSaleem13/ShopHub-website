import React, { useState } from 'react'
import icon from '../assets/icons/icon.jpg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Top Info Bar */}
      <div className="flex flex-wrap justify-between items-center  bg-black w-full px-4 py-1 text-sm">
        <div className="flex flex-wrap gap-4 text-gray-400">
          <button className="bg-gray-900 px-2 py-1">+1 (555) 333 22 11</button>
          <button>info@schon.chairs</button>
        </div>

        <div className="flex flex-wrap gap-4 mt-2 md:mt-0 text-gray-400">
          <button className="cursor-pointer">Orders</button>
          <button className="cursor-pointer">My Account</button>
          <button className="bg-gray-900 px-3 py-1 cursor-pointer">Checkout</button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full   px-4 md:px-8 py-2">
        {/* md+ view (desktop layout) */}
        <div className="hidden md:flex justify-between items-center">
          {/* Logo on left */}
          <a
            href="#"
            className="text-4xl ml-20 font-semibold mt-2 text-gray-700 hover:text-black"
          >
            Website.
          </a>

          {/* Nav + Cart together in one group */}
          <div className="flex mr-30 items-center gap-6 mt-4">
            {/* Nav Links */}
            <div className="flex gap-6 text-lg text-gray-600 tracking-wide">
              <a href="#" className="hover:text-black transition">Home</a>
              <a href="#" className="hover:text-black transition">Products</a>
              <a href="#" className="hover:text-black transition">About</a>
              <a href="#" className="hover:text-black transition">Contact</a>
              <a href="#" className="hover:text-black transition">Blog</a>
            </div>

            {/* Cart - right beside nav links */}
            <div className=" mr-2 flex items-center">
              <img src={icon} alt="cart icon" className="w-8 h-8" />
              <div className="ml-1 leading-tight">
                <a href="#" className="font-bold text-black font-mono block">Shopping Cart</a>
                <p className="text-sm text-gray-500">3 items — $74.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view (logo + hamburger) */}
        <div className="flex items-center justify-between md:hidden">
          <a
            href="#"
            className="text-3xl font-semibold text-gray-700 hover:text-black"
          >
            Website.
          </a>
          <button
            className="text-3xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile links toggle */}
        {isOpen && (
          <div className="block md:hidden mt-4 space-y-6 gap-7 text-lg text-gray-600 tracking-wide">
            <a href="#" className="block hover:text-black">Home</a>
            <a href="#" className="block hover:text-black">Products</a>
            <a href="#" className="block hover:text-black">About</a>
            <a href="#" className="block hover:text-black">Contact</a>
            <a href="#" className="block hover:text-black">Blog</a>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
