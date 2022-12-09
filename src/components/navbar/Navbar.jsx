import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='agency__navbar'>
      <div className="agency__navbar-links">
        <div className="agency__navbar-links_log">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar