import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
    <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
    </section>
    <section id="cart" className="section-p1">
        <table width="100%">
            <thead>
                <tr>
                    <th>Remove</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qunatity</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Link to="#"><i className="fa-solid fa-circle-xmark"></i></Link></td>
                    <td><img src="Products/f1.jpg" alt=""/></td>
                    <td>Cartoon Astronaut T-Shirt</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1"/></td>
                    <td>$118.19</td>
                </tr>
                <tr>
                    <td><Link to="#"><i className="fa-solid fa-circle-xmark"></i></Link></td>
                    <td><img src="Products/f2.jpg" alt=""/></td>
                    <td>Cartoon Astronaut T-Shirt</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1"/></td>
                    <td>$118.19</td>
                </tr>
                <tr>
                    <td><Link to="#"><i className="fa-solid fa-circle-xmark"></i></Link></td>
                    <td><img src="Products/f3.jpg" alt=""/></td>
                    <td>Cartoon Astronaut T-Shirt</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1"/></td>
                    <td>$118.19</td>
                </tr>
            </tbody>
        </table>
    </section>
    <section id="cart-add" className="section-p1">
        <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
                <input type="text" placeholder="Enter Your Coupon Code" />
                <button className="normal">Apply</button>
            </div>
        </div>
        <div id="subtotal">
            <h3>Cart Total</h3>
            <table>
                <tr>
                    <td>Cart Subtotal</td>
                    <td>$ 335</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>$ 335</strong></td>
                </tr>
            </table>
            <button className="normal">Proceed to Checkout</button>
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

export default Cart