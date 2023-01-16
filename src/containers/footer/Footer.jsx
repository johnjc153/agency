import React from 'react'
import webworks from '../../assets/webworks.png'
import './footer.css'

const Footer = () => {
  return (
    <div className="agency__footer section__padding">
      <div className="agency__footer-heading">
        <h1 className="gradient__text">Find Solutions, Contact Us</h1>
      </div>

      <div className="agency__footer-btn">
        <p>Contact Us For A Free Consultation</p>
      </div>

      <div className="agency__footer-links">
      
        <div className="agency__footer-links_logo">
          <img src={webworks} alt="agency_logo" />
        </div>
      
        <div className="agency__footer-links_div">
          <h4>Links</h4>
          <a href='#'>Who We Are</a>
          <a href='#'>Social Media</a>
          <a href='#'>Counters</a>
          <a href='#'>Contact</a>
        </div>
      
        <div className="agency__footer-links_div">
          <h4>Company</h4>
          <a href='#'>Terms & Conditions </a>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Contact</a>
        </div>
      
        <div className="agency__footer-links_div">
          <h4>Get in touch</h4>
          <p>Address</p>
          <p>000 000 0000</p>
          <p>info@email.com</p>
        </div>
      </div>

      <div className="agency__footer-copyright">
        <p>@2023 Webworks. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer