import React from 'react'
// import { Feature } from '../../components'
import Features from '../features/Features'
import './whatagency.css'

const WhatAgency = () => {
  return (
    <div className="agency__whatagency section__margin" id='wwa'>
      <div className="agency__whatagency-feature">
        <Features title="What is agency" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."/>
      </div>
      
      <div className="agency__whatagency-heading">
        <h1 className="gradient__text">The possibilities are endless</h1>
        <p>Explore the Library</p>
      </div>

      <div className="agency__whatagency-container">
        
        <Features title="About us" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, corrupti." />
        <Features title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, corrupti." />
        <Features title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, corrupti." />

      </div>

    </div>
  )
}

export default WhatAgency