import React from 'react'
import "./Resume.scss"
import Footer from "../../components/Footer/Footer"
import ResumeDoc from "../../assets/mainresume.pdf"
import Skills from "../../components/Skills/Skills"
import { motion } from "framer-motion"
import { titleAnim } from '../../Animation';
import {pageAnimation} from "../../Animation";

const Resume = () => {

  return (

    <div>
        <motion.h2 exit="exit" variants={titleAnim} initial="hidden" animate="show" id="main-tag">Resume</motion.h2>
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" className='resume-container'>
          <iframe id='myResume' src={ResumeDoc} title='resume' frameBorder='0' ></iframe>
        </motion.div>
        <Skills />
        <Footer/>
    </div>

  )
}

export default Resume