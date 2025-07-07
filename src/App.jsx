import React from 'react'
import { BrowserRouter } from 'react-router-dom'



import RouterConfig from './config/Router'
import BrandSlider from './Componenets/BrandSlider'
import Footr from './Componenets/Footr'
import Navbar from './Componenets/Navbar'

function App() {
  return (
    <BrowserRouter>
   <Navbar/>
      <RouterConfig />
   <BrandSlider/>
     
     <Footr/>
    </BrowserRouter>
  )
}

export default App
