import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import pic from '../assets/pictures/2.jpg'


function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
  

  {/* hero section */}
      <div
        className="relative h-[260px] sm:h-[320px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${pic})` }}
      >
        <div className="bg-black/50 w-full h-full absolute top-0 left-0"></div>
        <h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl font-bold z-10">Contact Us</h1>
      </div>

      {/*  Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row gap-12">

        {/*  Left Form */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/*  RightInfo */}
        <div className="md:w-1/3 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Get in touch</h2>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-xl text-gray-700" />
            <span>support@shophub.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-xl text-gray-700" />
            <span>+92 300 1234567</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-xl text-gray-700" />
            <span>Lahore, Pakistan</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <a href="#" className="text-gray-600 hover:text-black transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

   
      
  
    </div>
  )
}

export default Contact
