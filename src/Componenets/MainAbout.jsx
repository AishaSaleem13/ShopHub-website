import React from 'react'
import pic1 from '../assets/pictures/2.jpg'

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP
} from 'react-icons/fa'

function MainAbout() {
  return (
    <div className="flex flex-col min-h-screen">
   

      {/*  Hero Section */}
      <div
        className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full bg-cover bg-center flex items-center justify-center px-4 sm:px-8"
        style={{ backgroundImage: `url(${pic1})` }}
      >
        <div className="mt-16 p-6 rounded-md text-center w-full max-w-3xl">
          <h3 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
            About Us
          </h3>
          <div className="breadcrumbs text-sm text-white">
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <li>
                <a href="#" className="hover:underline flex items-center gap-1">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="#" className="hover:underline flex items-center gap-1">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-start mt-16 px-6 sm:px-10 md:px-20">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900">
          WHO WE ARE?
        </h1>
      </div>

      {/*  Content Section */}
      <div className="px-6 sm:px-10 md:px-20 py-12 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-justify space-y-6">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            "<span className="text-blue-950 font-extrabold text-xl sm:text-2xl">SHOPHUB</span> moved with ease in
            difficult circumstances, driven by focused effort and precise rhythm. He was known for his clarity,
            for choosing sharp expression over hesitation, and for pursuing meaningful results. Effort was not just
            necessary — it was honorable. He believed comfort and reward could only follow hard work. In pleasure,
            he saw not escape, but learning — a test of understanding over indulgence. He avoided distraction, chose
            presence, and cultivated intention. For him, clarity and purpose weren’t luxuries — they were the
            foundation."
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            The structure of thought is calm and firm, supported by practical actions. Sit in awareness, work in
            silence, and shape your surroundings with intention. <br />
            Every graceful outcome begins with steady effort.
          </p>
        </div>

        {/*  Follow Us Section */}
        <div className="pt-12">
          <h2 className="text-gray-700 text-2xl sm:text-3xl md:text-4xl tracking-wide font-bold text-start mb-6">
            Follow Us
          </h2>
          <div className="flex flex-wrap gap-4 sm:gap-6 items-center sm:justify-start">
            <a href="#" className="text-black hover:text-gray-400 transition">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-black hover:text-gray-400 transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-black hover:text-gray-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-black hover:text-gray-400 transition">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" className="text-black hover:text-gray-400 transition">
              <FaPinterestP size={24} />
            </a>
          </div>
        </div>
      </div>

     
      
    </div>
  )
}

export default MainAbout
