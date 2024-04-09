import React from 'react';
import './Navbar.css';
function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">Assessment Portal</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
