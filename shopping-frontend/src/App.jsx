import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import LoginSignup from './components/LoginSignup'
import './components/NavBar'
import './App.css'
import Home from './Home'
import Shop from './Shop'
import Blog from './Blog'
import About from './About'
import Contact from './Contact'
import Cart from './Cart'
import './index.css'

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<LoginSignup />} />
      </Routes>
    </Router>
    </>
  )
}

export default App