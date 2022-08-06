import React, { Fragment } from 'react'
import { useState } from 'react';
import "./Navigation.scss"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom'
import { IconContext } from 'react-icons';
import {FaHome} from "react-icons/fa"

const Navigation = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Fragment>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
              <Link className="logo" to="/">
                <FaHome />
              </Link>
              <li className='nav-links-li'>
                <Link className="nav-link" to="/AboutMe">
                    About Me
                </Link>
              </li>
              <li className='nav-links-li'>
                <Link className="nav-link" to="/Projects">
                    Projects
                </Link>
              </li>
              <li className='nav-links-li'>
                <Link className="nav-link" to="/Resume">
                    Resume
                </Link>
              </li>
              <li className='nav-links-li'>
                <Link className="nav-link" to="/ContactMe">
                    Contact Me
                </Link>
              </li>
          </ul>
        </nav>
      </IconContext.Provider>
      <Outlet />
    </Fragment>
  )
}

export default Navigation