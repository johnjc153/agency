import React from 'react'
import logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className="agency__footer section__padding">
      <div className="agency__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="agency__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="agency__footer-links">
      
        <div className="agency__footer-links_logo">
          <img src={logo} alt="agency_logo" />
          <p>address <br /> All Rights Reserved</p>
        </div>
      
        <div className="agency__footer-links_div">
          <h4>Links</h4>
          <a href='#'>Overons</a>
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
        <p>@2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer