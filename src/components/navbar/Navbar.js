import React, { useState } from 'react'
import './Navbar.css'
import{Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBell, faEnvelope, faHouse, faMagnifyingGlass, faMoon, faSun, faTableCellsLarge, faUser } from '@fortawesome/free-solid-svg-icons'
const Navbar = ({darkMode, toggleDarkMode}) => {
  // const [isDark, setIsDark] = useState(false)
  // console.log(isDark)
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" >
        <span>Arab Social</span>
        </Link>
        <FontAwesomeIcon icon={faHouse} />
        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} onClick={toggleDarkMode} />
        <FontAwesomeIcon icon={faTableCellsLarge} />
       <div className='search'>
       <FontAwesomeIcon icon={faMagnifyingGlass} />
       <input type='text' placeholder='Search...'/>
       </div>
      </div>
      <div className='right'>
      <FontAwesomeIcon icon={faUser} />
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faBell} />
      <div className='user'>
          <div className='img-user' >
            <img src="https://image.lexica.art/full_jpg/c713dc5a-9461-44b7-8f70-13b0d4dd2b5a"/>
          </div>
          <span>shimaa shaban</span>
      </div>
      </div>
    </div>
    //  
    // 
    // 
    // 
    // 
    // 
    // 
  )
}

export default Navbar