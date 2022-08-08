import React from 'react'
import "./Skills.scss"
import {FaReact} from "react-icons/fa"
import {FaVuejs} from "react-icons/fa"
import {FaNodeJs} from "react-icons/fa"
import {SiJavascript} from "react-icons/si"
import {SiExpress} from "react-icons/si"
import {SiMongodb} from "react-icons/si"
import {SiSvelte} from "react-icons/si"




const Skills = () => {

  return (

    <div className='skills-container'>
        <ul className='icon-list'>
            <li className='icon'><SiJavascript /></li>
            <li className='icon'><SiSvelte /></li>
            <li className='icon'><FaVuejs /></li>
            <span className='main'><li><FaReact /></li></span>
            <li className='icon'><SiMongodb /></li>
            <li className='icon'><FaNodeJs /></li>
            <li className='icon'><SiExpress /></li>
        </ul>
    </div>

  )
}

export default Skills