import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'

  
const Header = () => {
  return (
    <div className='agency__header section__padding' id='home'>
      <div className="agency__header-content">
        
        <h1 className='gradient__text'>Build Your Dream Website with Our Expert Team</h1>
        <p>Let's Build Something Amazing Together! Transform Your Online Presence with Professional Website Design</p>
        
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