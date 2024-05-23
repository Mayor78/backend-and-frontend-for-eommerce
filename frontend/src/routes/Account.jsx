import React from 'react'
import '../style/navbar.css'
import { NavLink } from 'react-router-dom';
const Account = () => {
  return (
    <div>
       
        <div className=' d-none d-md-flex justify-content-between m-3'>
      <div className="d-flex">
        <NavLink 
           className="nav-link "
           activeClassName="active"
           to="/"
        >Home  </NavLink>
        <span className="mx-1 ">/</span> <span className="m-1"></span><NavLink 
        className="nav-link main-account "
        activeClassName="active"
        to='/account'
        >My Account</NavLink>
      </div>
      <h5 >Welcome!<span className='name'>Mayor!!</span></h5>
      </div>
      <h5  className='d-flex d-sm-flex d-md-none justify-content-center'>Welcome!<span className='name'>Mayor!!</span></h5>
             <div className='d-md-flex justify-content-evenly d-sm-block '>
                <div className='mt-5 '>
                        <h5 className='m-3 '>Manage My Account</h5>
                        <h6 className='text-danger mx-5'>My Profile</h6>
                        <p className='mx-5 text-secondary'>Address Book <br /> <span>My Payment Options</span></p>

                        <h5 className='m-3 '> My Order</h5>
                        <h6 className='mx-4 text-secondary'>My Returns</h6>
                        <p className='mx-4 text-secondary'>My Cancellations</p >
                        <h6 className='m-2'>My Wishlist</h6>
                    </div>
                        <div>
                         <h5 className='m-3 text-danger '>Edit Your Profile</h5>
                            <div className='input-field'>
                                <div className='d-flex justify-content-between gap-5 container-fluid'>
                                    <div>
                                        <h6>FirstName</h6>                               
                                        <input type="text" class="form-control border text-5" placeholder='name here..'/>
                                    </div>
                                    <div>
                                        <h6>Lastname</h6> 
                                        <input class="form-control border text-5" type="text"  placeholder='Lastname here..'/>
                                    </div>
                                </div>
                                                                                       
                                <div className='address-field'>
                                  
                                  <h6>Your Email</h6> 
                                    <input class="form-control border text-5" type="email" placeholder='email here..'/>
                                    <h6>Address</h6>                               
                                    <input class="form-control border text-5" type="text" placeholder='address here..'/>
                                </div>
                                    <div>
                                        <h5 className=''>Password Change</h5>
                                        <input class="form-control border text-5" type="password" placeholder=' old password here..'/><br />
                                        <input class="form-control border text-5" type="password" placeholder='new password here..'/><br />
                                        <input class="form-control border text-5" type="password" placeholder='confirm password here..'/>
                                    </div>

                            </div>
                        </div>
            </div>
            <div className='d-flex  justify-content-end mt-3 gap-2 mx-5 '>
            <button type="button" class="btn btn-outline-secondary ">Cancel</button>
                <button type="button" class="btn btn-outline-danger">Save Change </button>
            </div>
           
    </div>
  )
}

export default Account
