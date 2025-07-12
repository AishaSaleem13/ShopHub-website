import React, { useEffect, useState } from 'react'
import pic1 from '../assets/pictures/8.jpg'
import pic2 from '../assets/pictures/img10.jpg'
import pic3 from '../assets/pictures/img09.jpg'
import pic12 from '../assets/pictures/img12.jpg'
import icon from '../assets/icons/arrow.jpg'
import pic13 from '../assets/pictures/img13.jpg'

const images = [pic1, pic2, pic3]

function AutoCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-4">
          
          {/* LEFT SIDE IMAGE CARDS */}
          <div className="flex flex-col gap-6 w-full md:w-[30%] px-2">
            {/* Card 1 */}
            <div className="relative w-full h-[180px] sm:h-[200px] md:h-[160px]">
              <img src={pic12} alt="Chair" className="w-full h-full object-cover " />
              <p className="absolute top-4 left-[65%] text-white text-lg font-bold tracking-widest">Chairs</p>
              <p className="absolute top-10 left-[130px] md:left-[110px] xlg:left-[700px] text-white text-xl md:text-2xl font-bold tracking-[0.2em]">ZIO DINING</p>
              <p className="absolute top-16 left-[180px] text-white text-xl md:text-2xl font-bold tracking-[0.2em]">CHAIR</p>
              <p className="absolute bottom-4 left-[220px] transform -translate-x-1/2 text-sm text-white hover:text-red-400">
                SHOP NOW
              </p>
              <img src={icon} alt="arrow" className="w-4 h-4 absolute bottom-4 left-[260px]" />
            </div>

            {/* Card 2 */}
            <div className="relative w-full h-[220px]">
              <img src={pic13} alt="Lamp" className="w-full h-full object-cover " />
              <p className="absolute top-4 left-8 text-gray-300 text-xl font-bold">Accessories / Lighting</p>
              <p className="absolute top-10   left-[32%] md:left-[30%] text-gray-500 text-2xl md:text-2xl font-bold tracking-[0.1em]">TOTEM FLOOR</p>
              <p className="absolute top-16  left-[66%] md:left-[64%] text-gray-500 text-2xl md:text-2xl font-bold tracking-[0.1em]">LAMP</p>
              <p className="absolute bottom-4 left-[220px] transform -translate-x-1/2 text-sm text-gray-500 hover:text-red-400">
                SHOP NOW
              </p>
              <img src={icon} alt="arrow" className="w-4 h-4 absolute bottom-4 left-[260px]" />
            </div>
          </div>

          {/* RIGHT SIDE CAROUSEL */}
          <div className="w-full md:w-[600px] ">
            <div className="relative overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] shadow-lg">
              <img
                src={images[current]}
                alt={`Slide ${current + 1}`}
                className="w-full h-full object-cover transition-opacity duration-700"
              />
              {/* Text Overlay on Carousel */}
       <div className="absolute inset-0 flex flex-col justify-start text-white  bg-black/20 px-6 py-8">
  {/* Top-left Tag */}
  <p className="text-white text-lg font-bold font-serif tracking-[0.1em] mb-2">
    Furniture Design ideas
  </p>

  {/* Left-aligned Heading */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-700 font-bold tracking-wide mb-2">
    Upholstered fabric
  </h2>

  {/* Subtext */}
  <p className="text-sm sm:text-base md:text-2xl  lg:text-2xl left-16 tracking-widest drop-shadow-sm">
Quality items
  </p>
</div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default AutoCarousel
