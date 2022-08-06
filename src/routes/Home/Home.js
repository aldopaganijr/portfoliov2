import React, { Fragment } from 'react'
import "./Home.scss"
import { Link, Outlet } from 'react-router-dom'

const Home = () => {

  return (
    <Fragment>
      <div className='home-container'>
          <div className='links-container-home'>
            <Link className="nav-link-home" to="/AboutMe">
              About Me
            </Link>
            <Link className="nav-link-home" to="/Projects">
              Projects
            </Link>
            <Link className="nav-link-home" to="/Resume">
              My Resume
            </Link>
            <Link className="nav-link-home" to="/ContactMe">
              Contact Me
            </Link>
          </div>
          <div className="lowertext">
            <p className='lower-text'> React Developer</p>
          </div>
      </div>
      <Outlet />
    </Fragment>

  )
}

export default Home