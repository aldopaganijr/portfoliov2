import React from 'react'
import "./Footer.scss"
import {FaReact} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"

const Footer = () => {

  return (

    <div className='footer-container'>
        <div className="social-links">
            <h4 className="footer-text">For more infomation, You can find my accounts below</h4>
            <a className='link' href="https://www.linkedin.com/in/aldopaganijr/">
                <FaLinkedin />
            </a>
            <a href="https://github.com/aldopaganijr">
                <FaGithub />
            </a>
        </div>
        <div className='react'>
            <div href="/">
                Powered by <FaReact />
            </div>
        </div>
    </div>

  )
}

export default Footer