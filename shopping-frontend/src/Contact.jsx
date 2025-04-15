import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
    </section>
    <section id="contact-details" className="section-p1">
        <div className="details">
            <span>Get In Touch</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i className="fa-solid fa-map-location-dot"></i>
                    <p>389/13, Sector 14, Sonipat, Haryana</p>
                </li>
            </div>
            <div>
                <li>
                    <i className="fa-solid fa-envelope"></i>
                    <p>contact@infinity.com</p>
                </li>
            </div>
            <div>
                <li>
                    <i className="fa-solid fa-phone"></i>
                    <p>+01 2222 365 /(+91) 01 2345 7645</p>
                </li>
            </div>
            <div>
                <li>
                    <i className="fa-solid fa-clock"></i>
                    <p>Monday to Saturday: 9:00 AM - 6:00 PM</p>
                </li>
            </div>
        </div>
        <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13958.65798615554!2d77.02300408361324!3d28.997311325418995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db069d0d702f5%3A0xafcfab94fc181e20!2sSector%2014%2C%20Sonipat%2C%20Haryana%20131001!5e0!3m2!1sen!2sin!4v1743927729239!5m2!1sen!2sin"
                style={{width:"600", height:"450", loading:"lazy", allowfullscreen:"", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
        </div>
    </section>
    <section id="form-details">
        <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name"/>
            <input type="email" placeholder="E-mail"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <button className="normal">Submit</button>
        </form>
        <div className="people">
            <div>
                <img src="People/1.png" alt=""/>
                <p><span>John Doe</span>Senior Marketing Manager <br/> Phone: (+91) 01 2345 7645 <br/> Email: contact@infinity.com</p>
            </div>
            <div>
                <img src="People/2.png" alt=""/>
                <p><span>William Smith</span>Senior Marketing Manager <br/> Phone: (+91) 01 2345 7645 <br/> Email: contact@infinity.com</p>
            </div>
            <div>
                <img src="People/3.png" alt=""/>
                <p><span>Emma Stone</span>Senior Marketing Manager <br/> Phone: (+91) 01 2345 7645 <br/> Email: contact@infinity.com</p>
            </div>
        </div>
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

export default Contact