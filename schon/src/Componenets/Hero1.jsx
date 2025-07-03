import React from 'react'
import pic1 from '../assets/pictures/img05.jpg'
import pic2 from '../assets/pictures/img06.jpg'
import pic3 from '../assets/pictures/img07.jpg'
import pic4 from '../assets/pictures/img08.jpg'

function Hero1() {
  return (
    <>
    <div className="p-6">
      {/* Top Images Row */}
      <div className="flex flex-wrap gap-12 justify-start ml-20">
      <div className="relative w-[60%]">
  <img src={pic1} alt="pic1" className="w-full h-auto" />
  <p className="absolute bottom-76 left-16 text-white text-md font-serif  tracking-[0.2em] bg-black/10 px-4 py-1 rounded">
    Furniture Design ideas
  </p>
  <p className='text-6xl font-extrabold text-white  absolute bottom-60 left-16'>New</p>
  <p  className='text-4xl  font-sans text-white tracking-[0.2em]  absolute bottom-48 left-16'>Collection</p>
  <p className='text-sm  font-sans text-white tracking-[0.2em]  absolute bottom-36 left-16'>Consectetur adipisicing elit. Beatae
     <br/> accusamus,optio, repellendus inventore</p>
     <p className='text-2xl font-extrabold  font-sans text-white tracking-[0.2em]  absolute bottom-20 left-16'>$79.00</p>
</div>


        <div className="w-[28%]">
          <img src={pic2} alt="pic2" className="w-full h-auto" />
        </div>
      </div>

      {/* Below Card or Image (pic3) */}
            <div className="flex flex-wrap gap-12 justify-start ml-20">
      <div className=" flex mt-6 w-[45%]">
        <img src={pic3} alt="pic3" className="w-full h-auto " />
      </div>
         <div className="mt-6 w-[46%]  h-14">
        <img src={pic4} alt="pic4" className="w-full h-auto" />
      </div>
      </div>
    </div>
  </>

  )
}

export default Hero1
