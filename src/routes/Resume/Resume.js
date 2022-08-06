import React from 'react'
import "./Resume.scss"
import Footer from "../../components/Footer/Footer"
import ResumeDoc from "../../assets/mainresume.pdf"
import Skills from "../../components/Skills/Skills"

const Resume = () => {

  return (

    <div>
        <h2 id="main-tag">Resume</h2>
        <div className='resume-container'>
          <iframe id='myResume' src={ResumeDoc} title='resume' frameBorder='0' ></iframe>
        </div>
        <Skills />
        <Footer/>
    </div>

  )
}

export default Resume