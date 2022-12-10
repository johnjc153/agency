import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'


const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
          <p><a href="#wwa">What we are</a></p>
          <p><a href="#possibility">Services</a></p>
          <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Blog</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='agency__navbar'>
      <div className="agency__navbar-links">
        <div className="agency__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="agency__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="agency__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>

      <div className="agency__navbar-menu">
        {toggleMenu
          ? < RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : < RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='agency__navbar-menu_container scale-up-center'>
            <div className="agency__navbar-menu_container">
              <Menu />
              <div className="agency__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )


        }


      </div>

    </div>
  )
}

export default Navbar