import React from 'react'
import Navbar from '../Navbar'
import pic1 from '../assets/pictures/img01.jpg'


function About() {
  return (
    <div>
        <Navbar/>
          <div className="bg-gray-100 px-6 py-4">
      <div className="flex items-center gap-4 flex-wrap">
        {/* 🔹 Breadcrumb Path */}
        <div className="breadcrumbs text-sm text-gray-700">
          <ul className="flex items-center space-x-2">
            <li>
              <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Furniture
              </a>
            </li>
            <li>/</li>
            <li className="font-medium text-gray-800">Modern Chair</li>
          </ul>
        </div>

        {/* 🔸 Image Container */}
        <div className="flex items-center gap-2">
          <img
            src={pic1} // Replace with your image path
            alt="Product"
            className="h-10 w-10 object-cover rounded shadow"
          />
          <span className="text-sm font-semibold text-gray-800">Modern Chair</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About