import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
     <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Savemore with coupons & upto 70% off!</p>
        <button>Shop Now</button>
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
    <section id="products1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
            <div className="pro">
                <img src="Products/f1.jpg" alt=""></img>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>349.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div className="pro">
                <img src="Products/f2.jpg" alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>459.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div className="pro">
                <img src="Products/f3.jpg" alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>409.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div className="pro">
                <img src="Products/f4.jpg" alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>559.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div className="pro">
                <img src="Products/f5.jpg" alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>259.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div className="pro">
                <img src="Products/f6.jpg" alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>486.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div className="pro">
                <img src="Products/f7.jpg" alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>489.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div className="pro">
                <img src="Products/f8.jpg" alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>469.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
        </div>      
    </section>
    <section id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>Up to <span>70% Off</span>- All T-Shirts & Accessories</h2>
        <button className="normal">Explore More</button>
    </section>
    <section id="products1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
            <div className="pro">
                <img src="Products/n1.jpg" alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>459.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div className="pro">
                <img src="Products/n2.jpg" alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>459.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div className="pro">
                <img src="Products/n3.jpg" alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>459.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div className="pro">
                <img src="Products/n4.jpg" alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>459.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div className="pro">
                <img src="Products/n5.jpg" alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>459.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div className="pro">
                <img src="Products/n6.jpg" alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>459.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div className="pro">
                <img src="Products/n7.jpg" alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>459.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <div className="pro">
                <img src="Products/n8.jpg" alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>459.00</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
        </div>      
    </section>
    <section id="sm-banner" className="section-m1">
        <div className="banner-box">
            <h4>crazy deals</h4>
            <h2>buy 1 get 1 free</h2>
            <span>The best classic dress is on sale at infinity</span>
            <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
            <h4>spring summer</h4>
            <h2>upcoming season</h2>
            <span>The best classic dress is on sale at infinity</span>
            <button className="white">Collectiion</button>
        </div>
    </section>
    <section id="banner3">
        <div className="banner-box">
            <h2>SEASONAL SALE</h2>
            <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner-box banner-box2">
            <h2>NEW FOOTWEAR COLLECTION</h2>
            <h3>Spring / Summer 2025</h3>
        </div>
        <div className="banner-box banner-box3">
            <h2>T-SHIRTS</h2>
            <h3>New Trendy Prints</h3>
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
                <img src="Pay/app.jpg" alt=""/>
                <img src="Pay/play.jpg" alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src="Pay/pay.png" alt=""/>
        </div>
        <div className="copyright">
            <p>@ 2025, Kartik's - HTML CSS Website</p>
        </div>
    </footer>
    </>
  )
}

export default Home