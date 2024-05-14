import React from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-">
  <div class="container-fluid">
    <h1>Mayor</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0   align-items-center">
        <li class="nav-item">
         <Link class="nav-link active" aria-current="page"to='/' >Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active "  aria-current="page" to='/contact' >Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page"to='/about'  >About</Link>
        </li>
     
        <li class="nav-item">
          <Link class="nav-link active  " aria-current="page" to='/signup' >Signup</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="what are you looking for " aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit"><CiSearch/> </button>
      </form>
    </div>
  </div>
</nav>
<hr />
    </div>
   
  );
}

export default Navbar;



