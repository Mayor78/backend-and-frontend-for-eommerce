import React from 'react';
import '../style/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sideba m-4">
      <ul className="nav flex-column">
        <li className="nav-item">
          <div className="dropdown">
            <button className="btn text-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
               Women Fashion
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item active" href="#">Shoe</a></li>
                <li><a className="dropdown-item" href="#">Crop Top</a></li>
                <li><a className="dropdown-item" href="#">Gown</a></li>
                <li><a className="dropdown-item" href="#">Skirt</a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <div className="dropdown">
            <button className="btn text-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
               Men Fashion
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item active" href="#">Sneakers</a></li>
                <li><a className="dropdown-item" href="#">T Top</a></li>
                <li><a className="dropdown-item" href="#">Shirt</a></li>
                <li><a className="dropdown-item" href="#">Boxers</a></li>
            </ul>
          </div>
        </li>
        {/* Other list items */}
        <li className="nav-item">
          <a className="nav-link smaller-nav" href="#">Electronics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link smaller-nav" href="#">Home & Lifestyle</a>
        </li>
        <li className="nav-item">
          <a className="nav-link smaller-nav" href="#">Medicine</a>
        </li>
        <li className="nav-item">
          <a className="nav-link smaller-nav" href="#">Sports & Outdoor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link smaller-nav" href="#">Baby's & Toys</a>
        </li>
        <li className="nav-item">
          <a className="nav-link smaller-nav" href="#">Groceries & Pets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link smaller-nav" href="#">Health & Beauty</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
