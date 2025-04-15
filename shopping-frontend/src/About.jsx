import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Get a deep dive into our Clothing brand.</p>
    </section>
    <section id="about-head" className="section-p1">
        <img src="About/a6.jpg" alt=""/>
        <div>
            <h2>Who We Are?</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facere deserunt amet molestias animi,
                beatae maiores possimus fuga necessitatibus error, vel aspernatur rem quas pariatur ullam illo totam nisi?
                Magni molestiae ducimus cupiditate est aperiam?</p>
            <abbr title="">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative Modes.</abbr>
            <br />
            <br />
            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative Modes.</marquee>
        </div>
    </section>
    <section id="about-app" className="section-p1">
        <h1>Download Our <Link to="#">App</Link></h1>
        <div className="video">
            <video autoplay muted loop src="About/1.mp4"></video>
        </div>
    </section>
    <section id="feature" className="section-p1">
        <div className="fe-box">
            <img src="f1.png" alt=""/>
            <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
            <img src="f2.png" alt=""/>
            <h6>Online Order</h6>
        </div>
        <div className="fe-box">
            <img src="f3.png" alt=""/>
            <h6>Save Money</h6>
        </div>
        <div className="fe-box">
            <img src="f4.png" alt=""/>
            <h6>Promotions</h6>
        </div>
        <div className="fe-box">
            <img src="f5.png" alt=""/>
            <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
            <img src="f6.png" alt=""/>
            <h6>24/7 Support</h6>
        </div>
    </section>
    <section id="newsletter" className="section-p1 section-m1">
        <div id="newstext">
            <h4>Sign Up for Newsletters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email address"/>
            <button className="normal">Sign Up</button>
        </div>
    </section>
    <footer className="section-p1">
        <div className="col">
            <h3 className="brand">INFINITY</h3>
            <h4>Contact</h4>
            <p><strong>Address: </strong>389/13, Sector 14, Sonipat, Haryana</p>
            <p><strong>Phone: </strong>+01 2222 365 /(+91) 01 2345 7645</p>
            <p><strong>Hours: </strong>10:00 - 18:00, Mon - Sat</p>
            <div className="follow">
                <h4>Follow Us</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>
        <div className="col">
            <h4>About</h4>
            <Link to="#">About us</Link>
            <Link to="#">Delivery Information</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms & Conditions</Link>
            <Link to="#">Contact Us</Link>
        </div>
        <div className="col">
            <h4>My Account</h4>
            <Link to="#">Sign In</Link>
            <Link to="#">View Cart</Link>
            <Link to="#">My Wishlist</Link>
            <Link to="#">Track My Order</Link>
            <Link to="#">Help</Link>
        </div>
        <div className="col Install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src="Pay/app.jpg" alt="" />
                <img src="Pay/play.jpg" alt="" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src="Pay/pay.png" alt="" />
        </div>
        <div className="copyright">
            <p>@ 2025, Kartik's - HTML CSS Website</p>
        </div>
    </footer>
    </>
  )
}

export default About