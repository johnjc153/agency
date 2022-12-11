import React from 'react'
import { Feature } from '../../components'
import './whatagency.css'

const WhatAgency = () => {
  return (
    <div className="agency__whatagency section__margin" id='wwa'>
      <div className="agency__whatagency-feature">
        <Feature />
      </div>

      <div className="agency__whatagency-heading">
        <h1 className="gradient__text">The possibilities are endless</h1>
        <p>Explore the Library</p>
      </div>

      <div className="agency__whatagency-container">
        <Feature />
        <Feature />
        <Feature />

      </div>

    </div>
  )
}

export default WhatAgency