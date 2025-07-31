import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from '../Pages/CardDetails'
import MainAbout from '../Components/MainAbout'
import MainProducts from '../Components/MainProducts'
import Contact from '../Components/Contact'
import Login from '../Components/Login'


import Home from '../Components/Home'

import Cart from '../Components/Cart'







function RouterConfig() {
  return (
    <Routes>
      
      <Route
        path="/"
        element={
         <Home/> 
        }
      />
 <Route path="/cart" element={<Cart/>} />

      <Route path="/product/:id" element={<ProductDetail/>} />
      <Route path="/about" element={<MainAbout/>} />
      <Route path="/products" element={<MainProducts/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />

    </Routes>
  )
}

export default RouterConfig
