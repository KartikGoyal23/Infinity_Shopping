import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <section className='header'>
    <NavLink to="#"><img src="Infinity_Logo.png" width="180px" className="logo"/></NavLink>
    <nav>
        <div>
            <ul className="navbar">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li id="lg-bag"><NavLink to="/cart"><i className="fa-solid fa-bag-shopping"></i></NavLink></li>
                <NavLink to="#" id="close"><i className="fa-solid fa-xmark"></i></NavLink>
                <li id="lg-bag"><NavLink to="/signup"><i className="fa-solid fa-circle-user"></i></NavLink></li>
                <NavLink to="#" id="close"><i className="fa-solid fa-circle-user"></i></NavLink>
            </ul>
        </div>
        <div id="mobile">
            <NavLink to="/cart"><i className="fa-solid fa-bag-shopping"></i></NavLink>
            <i id="bar" className="fa-solid fa-bars-progress"></i>
        </div>
    </nav>
    </section>
    </>
  )
}

export default NavBar