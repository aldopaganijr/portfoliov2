import React from 'react'
import "./Navigation.scss"
import { Link } from 'react-router-dom'

const Navigation = () => {

  return (

    <div className='navigation-container'>
      <Link  id="logo" className="logo-container" to="/">
        Aldo Pagani Jr.
      </Link>
      <div className='links-container'>
        <Link className="nav-link" to="/AboutMe">
          About Me
        </Link>
        <Link className="nav-link" to="/Projects">
          Projects
        </Link>
        <Link className="nav-link" to="/Resume">
          Resume
        </Link>
        <Link className="nav-link" to="/ContactMe">
          Contact Me
        </Link>
      </div>
    </div>

  )
}

export default Navigation