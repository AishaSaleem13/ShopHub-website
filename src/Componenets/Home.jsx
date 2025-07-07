import React, { useEffect, useState } from 'react';
import ImageModal from '../Componenets/Modal';
import modalImage from '../assets/pictures/welcome.jpg';
import Hero1 from './Hero1';
import AutoCarousel from './Hero2';
import Hero3 from './Hero3';


function Home() {
  const [showModal, setShowModal] = useState(true);



  return (
    <>
      <ImageModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        imageUrl={modalImage}
        
      />

   
     

        <Hero1 />
        <AutoCarousel />
        <Hero3 />
      
    </>
  );
}

export default Home;
