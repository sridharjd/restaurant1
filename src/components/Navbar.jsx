import React from 'react'
import { Link } from "react-router-dom"; 
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/Gallery">Gallery</Link></li>
        <li><Link to="/Testimonials">Testimonials</Link></li>
        <li><Link to="/Reservations">Reservations</Link></li>
        <li><Link to="/ContactUs">Contat Us</Link></li>
      </ul>
    </div>
  )
}

export default Navbar