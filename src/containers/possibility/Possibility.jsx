import React from 'react'
import './possibility.css'
import webdesign from '../../assets/webdesign.png'

const Possibility = () => {
  return (
    <div className="agency__possibility section__padding">
      
      <div className="agency__possibility-image">
        <img src={ webdesign } alt="possibility" />
      </div>

      <div className="agency__possibility-content">
        <h4>Get Started Today</h4>
        <h1 className="gradient__text">Work with us</h1>
        <p>Ready to take your online presence to the next level? Contact us today for a free consultation and let's start building your dream website!</p>
        <h4>You can also call, email, or visit our offices to get started.</h4>
      </div>

    </div>
  )
}

export default Possibility