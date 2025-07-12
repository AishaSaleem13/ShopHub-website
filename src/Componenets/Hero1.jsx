import React from 'react'
import pic1 from '../assets/pictures/img05.jpg'
import pic2 from '../assets/pictures/img06.jpg'
import pic3 from '../assets/pictures/img07.jpg'
import pic4 from '../assets/pictures/img08.jpg'
import icon from '../assets/icons/arrow.jpg'
import icon2 from '../assets/icons/graph.jpg'


function Hero1() {
  return (
    <>
    
      <div className="p-6 mt-0">
        {/* Top Images Row */}
        <div className="flex flex-wrap gap-12 justify-start ml-4  md:ml-20">

          {/* First Image Block */}
          <div className="relative w-full md:w-[60%]">
            <img src={pic1} alt="pic1" className="w-full h-auto" />
            <p className="absolute hidden md:block md:bottom-64 left-8 md:left-16 text-white text-sm font-serif tracking-[0.2em] bg-black/10 px-4 py-1 rounded">
              Furniture Design ideas
            </p>
            <p className="absolute bottom-48 left-8 md:left-16 text-3xl md:text-6xl font-extrabold text-white">
              New
            </p>
            <p className="absolute  bottom-40 md:bottom-36 left-8 md:left-16 text-xl md:text-4xl font-sans text-white tracking-[0.2em]">
              Collection
            </p>
            <p className="absolute bottom-20 left-8 md:left-16 w-[80%] text-xs md:text-sm font-sans text-white tracking-[0.2em]">
              Consectetur adipisicing elit. Beatae <br />
              accusamus, optio, repellendus inventore
            </p>
            <p className="absolute bottom-12 left-8 md:left-16 text-lg md:text-2xl font-extrabold font-sans text-white tracking-[0.2em]">
              $79.00
            </p>
          </div>

          {/* Second Image Block */}
          <div className="relative w-full md:w-[28%]">
            <img src={pic2} alt="pic2" className="w-full h-auto" />
            <p className="absolute top-8 left-4 text-sm md:text-md tracking-[0.2em] font-serif text-white">
              SOFAS & ARMCHAIRS
            </p>
            <p className="absolute top-16 left-4 text-lg md:text-2xl font-bold text-white">
              3 Seater Leather <br /> Sofa
            </p>
            <div className="bg-blue-300 absolute bottom-42 left-16 md:left-32 w-28 h-28 flex flex-col items-center justify-center rounded-full">
              <p className="text-white text-sm font-light line-through">$659.00</p>
              <p className="text-white text-2xl mt-1">$499.00</p>
            </div>
            <p className="absolute bottom-10 left-5 text-sm md:text-md text-white font-light hover:text-red-400">
              SHOP NOW
            </p>
            <img src={icon} alt="" className="w-4 h-4 absolute bottom-11 left-24" />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-wrap gap-12 justify-start ml-4 md:ml-20">

          {/* Third Image Block */}
          <div className="relative mt-6 w-full md:w-[45%]">
            <img src={pic3} alt="pic3" className="w-full h-auto" />
            <p className="absolute top-8 text-gray-400 text-md md:text-2xl tracking-widest font-bold left-[140px] md:left-[200px]">
              ACRYLIC FABRIC
            </p>
            <p className="absolute top-16 text-gray-400 text-lg md:text-2xl tracking-widest font-bold left-[180px] md:left-[270px]">
              BEAN BAG
            </p>
            <img
              src={icon2}
              alt="icon"
              className="w-20 h-20 absolute top-16 left-[210px] md:left-[350px]"
            />
            <p className="absolute text-red-800 text-lg md:text-3xl  bottom-16 md:bottom-10 left-[220px] md:left-[330px]">
              $ 99.00
            </p>
            <button className="absolute bottom-3 left-[200px] md:left-[340px] text-white bg-black hover:bg-red-800 px-2">
              Shop now
            </button>
          </div>

          {/* Fourth Image Block */}
          <div className="relative mt-6 w-full md:w-[46%]">
            <img src={pic4} alt="pic4" className="w-full h-auto" />
            <p className="absolute top-8 left-4 md:left-8 text-sm md:text-lg text-blue-950 tracking-[0.2em] font-bold">
              CHAIR WITH <br /> ARMRESTS
            </p>
            <img
              src={icon2}
              alt=""
              className="w-14 h-14 absolute top-32 left-6 md:left-10"
            />
            <p className="absolute  bottom-40 md:top-44 left-6 md:left-10 text-gray-300 line-through text-sm md:text-lg">
              $129.00
            </p>
            <p className="absolute bottom-34 md:bottom-44 left-4 md:left-8 text-xl md:text-3xl text-blue-950">
              $99.00
            </p>
            <p className="absolute bottom-20 left-4 md:left-8 text-sm md:text-md font-light text-black hover:text-red-400">
              SHOP NOW
            </p>
            <img
              src={icon}
              alt=""
              className="w-4 h-4 absolute bottom-20 left-26 md:left-30"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero1
