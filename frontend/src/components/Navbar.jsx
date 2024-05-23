import { NavLink, Navigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import '../style/navbar.css'
import { useState } from 'react';
import SummaryApi from '../common';
import { useDispatch, useSelector } from'react-redux';
import { setUserDetails } from "../store/userSlice";
const Navbar = () => {
  const user = useSelector(state => state?.user?.user)
const dispatch = useDispatch()

const handleLogout = async() =>{
  const fetchData = await fetch(SummaryApi.logout_user.url,{
    method : SummaryApi.logout_user.method,
    credentials : 'include'
  })
  console.log(handleLogout)
  const data = await fetchData.json()
  if(data.success){
    dispatch(setUserDetails(null))
    Navigate("/")
  }
}

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-">
        <div class="container-fluid">
          <h1>Mayor</h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center ">
              <li class="nav-item">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}> Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/contact"> Contact </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/about"> About </NavLink>
              </li>
              <li className="nav-item">
                { user?._id ?(
                  <NavLink className="nav-link" activeClassName="active" to="/logout" onClick={handleLogout}> Logout </NavLink>
                ) : (
                  <NavLink className="nav-link" activeClassName="active" to="/signup"> Signup </NavLink>
                )}
              </li>
            </ul>
            <form class="d-flex" role="search">
              <div className='d-flex '>
                <input class="form-control border text-5" type="search" placeholder="what are you looking for " aria-label="Search" />
                <h4 className='search mt-2'><CiSearch/></h4>
              </div>
              <div className='d-flex gap-1 mt-1' >
                <div>
                  <NavLink className="nav-link" activeClassName="active" to="/cart"> <BsCart3 /> </NavLink>
                </div>
                <div>
                  <IoIosHeartEmpty />
                </div>
                <div className='dropdownn'>
                  <NavLink className="account-link" activeClassName="active" to= '/account'> <FaRegUserCircle /> </NavLink>
                  <div className="menuu">
                    <buttonn>< FaUser />Manage my Account</buttonn>
                    <buttonn>cart</buttonn>
                    <buttonn>account</buttonn>
                    <buttonn>cart</buttonn>
                    <buttonn>account</buttonn>
                    <buttonn>cart</buttonn>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;


