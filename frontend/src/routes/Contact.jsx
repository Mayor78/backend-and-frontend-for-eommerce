import React from 'react'
import '../style/contact.css'
import { NavLink } from 'react-router-dom';
import { MdCall } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
 const custom= {
  height:"40vh",
  color:'#fff'
 }
  return (
    <>
        
         <div className=' d-none d-md-flex justify-content-between m-3'>
      <div className="d-flex">
        <NavLink 
           className="nav-link "
           activeClassName="active"
           to="/"
        >Home  </NavLink>
        <span className="mx-1 ">/</span> <span className="m-1"></span><NavLink 
        className="nav-link contact "
        activeClassName="active"
        to='/contact'
        >My Account</NavLink>
      </div>
      </div>
        <div className='d-md-flex d-sm-block justify-content-evenly align-item-center mt-5'>
              <div>
                <h6>  < MdCall className='mx-2 mb-1' /><span>Call To Us</span></h6>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
             
              <hr />

                  
                    <h6><FaRegEnvelope className='gap-4  ' /> <span>Write To Us</span></h6>
                    <p>Fill out our form and we will contact <br /> you within 24 hours.</p>
                    <p>Emails: customer@mayor.com</p>
                    <p>Emails: support@mayor.com</p>
                    </div>
                  <form action="">
                    <div className="form-group d-md-flex d-sm-block  gap-3 mx-auto ">
                      <input type="text" className="form-control" placeholder="Your Name" />
                   
                      <input type="email" className="form-control" placeholder="Your Email" />
                   
                      <input type="text" className="form-control" placeholder="Your Phone" />
                    </div>
                    <div className="form-group ">
                      <textarea className="form-control mt-3  "  style={custom} placeholder="Your Message...."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Send Message</button>
                  </form>
          </div>
    </>
  )
}

export default Contact