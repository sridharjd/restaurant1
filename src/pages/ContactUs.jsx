

import React from 'react'
 import PhoneIcon from '@mui/icons-material/Phone';
 import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
 import XIcon from '@mui/icons-material/X';
 import FacebookIcon from '@mui/icons-material/Facebook';
 import InstagramIcon from '@mui/icons-material/Instagram';
 import "./App.css"
 import { Link } from "react-router-dom";


const ContactUs = () => {
  return (
    <div>
      <div className="contact-container">
        
        <div className="contact-text">
          <h1 className="text-head">Get in Touch</h1>
          <p>We'd love to hear from you!</p>
          <div>
            <ul className="contact-lists">
              <li className="icon"><PhoneIcon/></li>
              <li>+91 9876543210</li>
            </ul>
            <ul className="contact-lists">
              <li className="icon"><MailIcon/></li>
              <li>abcd@gmail.com</li>
            </ul>
            <ul className="contact-lists">
              <li className="icon"><LocationOnIcon/></li>
              <li>123, salem, TamilNadu</li>
            </ul>
            <ul className="contact-lists">
              <li className="media-icon"><XIcon/></li>
              <li className="media-icon"><FacebookIcon/></li>
              <li className="media-icon"><InstagramIcon/></li>
            </ul>
          </div>
        </div>

        <div className="contact-image">
          <img src="images/spicy1.jpg" alt="Spicy dish" />
        </div>

      </div>
      <div className="foot">
        <div className="foot1">
          <h1 style={{ color: '#ff9900' }}>Stay Updated!</h1>
          <p>Subscribe to our newsletter to receive latest news and special offers</p>
          <input type="text" placeholder="Enter Your Address"></input>
          <button className="foot-button">Subscribe</button>
        </div>
        
        <div>
          <ul className="foot-list">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/Testimonials">Testimonials</Link></li>
            <li><Link to="/ContactUs">Contat Us</Link></li>
          </ul>
          <ul className="foot-list">
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/Reservations">Reservations</Link></li>
          </ul>
        </div>
        <div className="foot-foot">
          <h2>@2024 EPIC Poetry. All rights reserved</h2>
        </div>
      </div>
    </div>
  )
}

export default ContactUs