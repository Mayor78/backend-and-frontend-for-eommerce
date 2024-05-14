import React from 'react';
// import { BsTelegram } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-bg bg-black text-white mt-5 ">
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-lg-3 col-md-6 mb-4 mt-5">
            <h3 className="card-title">Mayor</h3>
            <p className="card-text">Subscribe</p>
            <p>Get 10% off your first order</p>

                          <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control border-success rounded-end-circle" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
            {/* <input type="email" placeholder=' Enter your email' className=" rounded-end-circle" /> */}
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mt-5">
            <h3 className="card-title">Support</h3>
            <p className="card-text">No 76 Abule Nla Road, Lagos state</p>
            <p>Abrahammayowa78@gmail.com</p>
            <p>+2347084718050</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mt-5">
            <h3 className="card-title">Account</h3>
            <p>My Account</p><br />
            <p>Login / Register</p><br />
            <p>Cart</p><br />
            <p>Wishlist</p><br />
            <p>Shop</p><br />
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mt-5">
            <h3 className="card-title">Quick Link</h3>
            <p className="card-text">Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p><Link >Contact</Link></p>
            
          </div>
        </div>
      </div>
      <p className=' align-items-center justify-content-space-center mx-auto'>Copyright Rimel 2024. All right reserved</p>
      
    </div>
  );
}

export default Footer;
