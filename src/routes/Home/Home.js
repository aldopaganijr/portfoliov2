import React, { Fragment } from 'react'
import "./Home.scss"
import { Link, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {

  return (
    <Fragment>
      <div className='home-container'>
          <div className='links-container-home'>
            <motion.div whileHover={{scale: 1.1}}>
              <Link className="nav-link-home" to="/AboutMe">
                About Me
              </Link>
            </motion.div>
            <motion.div whileHover={{scale: 1.1}}>
              <Link className="nav-link-home" to="/Projects">
                Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{scale: 1.1}}>
              <Link className="nav-link-home" to="/Resume">
                My Resume
              </Link>
            </motion.div>
            <motion.div whileHover={{scale: 1.1}}>
              <Link className="nav-link-home" to="/ContactMe">
                Contact Me
              </Link>
            </motion.div>
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