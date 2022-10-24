import React from 'react'
import "./Skills.scss"
import {FaReact} from "react-icons/fa"
import {FaVuejs} from "react-icons/fa"
import {FaAngular} from "react-icons/fa"
import {SiTypescript} from "react-icons/si"
import {SiJavascript} from "react-icons/si"




const Skills = () => {

  return (

    <div className='skills-container'>
        <ul className='icon-list'>
            <li className='icon'><SiJavascript /></li>
            <li className='icon'><SiTypescript /></li>
            <span className='main'><li><FaReact /></li></span>
            <li className='icon'><FaAngular /></li>
            <li className='icon'><FaVuejs /></li>
        </ul>
    </div>

  )
}

export default Skills