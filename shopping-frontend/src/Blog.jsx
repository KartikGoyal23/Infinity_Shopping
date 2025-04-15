import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
    <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
    </section>
    <section id="blog">
        <div className="blog-box">
            <div className="blog-img">
                <img src="Blog/b1.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersey Zip-Up Hoodies</h4>
                <p>
                    It offers a comfortable and versatile layering piece, characterized
                    by its soft breathable jersey fabric.
                 </p>
                 <Link to="">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src="Blog/b2.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>How to Style a Quiff</h4>
                <p>
                    It offers a comfortable and versatile layering piece, characterized
                    by its soft breathable jersey fabric.
                 </p>
                 <Link to="">CONTINUE READING</Link>
            </div>
            <h1>13/04</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src="Blog/b3.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>Must-Have Skater Girl Items</h4>
                <p>
                    It offers a comfortable and versatile layering piece, characterized
                    by its soft breathable jersey fabric.
                 </p>
                 <Link to="">CONTINUE READING</Link>
            </div>
            <h1>12/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src="Blog/b4.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>Runaway-Inspired Trends</h4>
                <p>
                    It offers a comfortable and versatile layering piece, characterized
                    by its soft breathable jersey fabric.
                 </p>
                 <Link to="">CONTINUE READING</Link>
            </div>
            <h1>16/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src="Blog/b6.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>AW20 Menswear Trends</h4>
                <p>
                    It offers a comfortable and versatile layering piece, characterized
                    by its soft breathable jersey fabric.
                 </p>
                 <Link to="">CONTINUE READING</Link>
            </div>
            <h1>10/03</h1>
        </div>
    </section>
    <section id="pagination" className="section-p1">
        <Link to="#">1</Link>
        <Link to="#">2</Link>
        <Link to="#"><i className="fa-solid fa-arrow-right"></i></Link>
    </section>
    <section id="newsletter" className="section-p1 section-m1">
        <div id="newstext">
            <h4>Sign Up for Newsletters</h4>
            <p>
                Get E-mail updates about our latest shop and
                <span>special offers</span>
            </p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email address" />
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
                <img src="image/Pay/app.jpg" alt="" />
                <img src="image/Pay/play.jpg" alt="" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src="image/Pay/pay.png" alt="" />
        </div>
        <div className="copyright">
            <p>@ 2025, Kartik's - HTML CSS Website</p>
        </div>
    </footer>
    </>
  )
}

export default Blog