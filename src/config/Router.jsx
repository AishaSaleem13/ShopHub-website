import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from '../Pages/CardDetails'
import MainAbout from '../Componenets/MainAbout'
import MainProducts from '../Componenets/MainProducts'
import Contact from '../Componenets/Contact'
import Login from '../Componenets/Login'
import Home from '../Componenets/Home'

import Cart from '../Componenets/Cart'
import Signup from '../Componenets/SignUp'






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
      <Route path ="/signup" element={<Signup/>}/>
    </Routes>
  )
}

export default RouterConfig
