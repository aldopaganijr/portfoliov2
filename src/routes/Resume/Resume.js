import React from 'react'
import "./Resume.scss"
import Footer from "../../components/Footer/Footer"
import ResumeDoc from "../../assets/mainresume.pdf"

const Resume = () => {

  return (

    <div>
        <h2 id="main-tag">Resume</h2>
        <div className='resume-container'>
          <iframe id='myResume' src={ResumeDoc} title='resume' frameBorder='0' ></iframe>
        </div>
        <Footer/>
    </div>

  )
}

export default Resume