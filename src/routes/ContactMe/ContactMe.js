import React, { Fragment } from 'react'
import "./ContactMe.scss"
import Footer from "../../components/Footer/Footer"
import Skills from "../../components/Skills/Skills"
import { motion } from "framer-motion"
import {pageAnimation} from "../../Animation";
import { titleAnim } from '../../Animation';

const ContactMe = () => {

  return (
    <Fragment>
      <motion.h2 exit="exit" variants={titleAnim} initial="hidden" animate="show" id="main-tag">Contact</motion.h2>
      <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" className='contact-container'>
        <form action="https://formsubmit.co/899c98d11aff6fd7b45223005b2302b7" method="POST">
          <h3>Lets get in touch</h3>
          <input type="text" id="name" placeholder="Your Name" name="name" required />
          <input type="email" id="email" placeholder="Your Email" name="email" required />
          <textarea id="message" rows="4" placeholder="Enter Your Message Here!" name="comments, questions?"></textarea>
          <input type="text" name="_honey" style={{display: "none"}} />
          <input type="text" name="_captcha" value="false" style={{display: "none"}} />
          <button type="submit" id="submit">Send</button>
        </form>
      </motion.div>
      <Skills />
     <Footer />
    </Fragment>
  )
}

export default ContactMe