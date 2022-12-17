import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="agency__possibility section__padding">
      
      <div className="agency__possibility-image">
        <img src={ possibilityImage } alt="possibility" />
      </div>

      <div className="agency__possibility-content">
        <h4>Get Started Today</h4>
        <h1 className="gradient__text">Work with us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum accusantium iure et ipsa aut placeat? Praesentium, excepturi sunt odio aliquid doloribus, accusamus eum eligendi laborum ex culpa in nulla itaque.</p>
        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, illum.</h4>
      </div>

    </div>
  )
}

export default Possibility