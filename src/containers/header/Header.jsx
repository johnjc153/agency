import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'

  
const Header = () => {
  return (
    <div className='agency__header section__padding' id='home'>
      <div className="agency__header-content">
        
        <h1 className='gradient__text'>Let's build something amazing together</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias dolorum soluta minima ad doloremque a reprehenderit tempore? Facere magnam recusandae rerum est. Laborum debitis saepe exercitationem libero quidem rem quaerat!</p>
        
        <div className="agency__header-content__input">
          <input type="email" placeholder='Your email address' />
          <button type='button' >Get Started</button>
        </div>

        <div className="agency__header-content__people">
          <img src={people} alt="people" />
          <p>1800 people have requested access</p>
        </div>
        
      </div>

      <div className="agency__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header