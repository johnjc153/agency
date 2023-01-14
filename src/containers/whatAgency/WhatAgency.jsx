import React from 'react'
import { Feature } from '../../components'
import './whatagency.css'

const WhatAgency = () => {
  return (
    <div className="agency__whatagency section__margin" id='wwa'>
      <div className="agency__whatagency-feature">
        <Feature title="What is WebWorks?" text="We are a team of passionate designers and developers who are dedicated to helping businesses of all sizes succeed online. Our mission is to create websites that are not only visually stunning, but also functional and user-friendly."/>
      </div>
      
      <div className="agency__whatagency-heading">
        <h1 className="gradient__text">Here to establish your digital footprint</h1>
        <p>Explore the Library</p>
      </div>

      <div className="agency__whatagency-container">
        
        <Feature title="Assisting Every Step" text="We understand that building a website can be a daunting task, which is why we strive to make the process as smooth and stress-free as possible. Our team will work closely with you to understand your business goals and design a website that meets your unique needs." />
        <Feature title="Constant Support" text="In addition to custom website development, we also offer ongoing support and maintenance to ensure your website stays up-to-date and running smoothly." />
        <Feature title="Client Oriented" text="We pride ourselves on delivering top-notch customer service and results that speak." />

      </div>

    </div>
  )
}

export default WhatAgency