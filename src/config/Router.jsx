import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from '../Pages/CardDetails'
import MainAbout from '../Componenets/MainAbout'
import MainProducts from '../Componenets/MainProducts'
import Contact from '../Componenets/Contact'
import Login from '../Componenets/Login'
import Home from '../Componenets/Home'





function RouterConfig() {
  return (
    <Routes>
      {/* Homepage */}
      <Route
        path="/"
        element={
         <Home/> 
        }
      />


      <Route path="/product/:id" element={<ProductDetail/>} />
      <Route path="/about" element={<MainAbout/>} />
      <Route path="/products" element={<MainProducts/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
     
    </Routes>
  )
}

export default RouterConfig
