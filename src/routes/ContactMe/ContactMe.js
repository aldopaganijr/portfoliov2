import React, { Fragment } from 'react'
import "./ContactMe.scss"
import Footer from "../../components/Footer/Footer"

const ContactMe = () => {

  return (
    <Fragment>
      <h2 id="main-tag">Contact</h2>
      <div className='contact-container'>
        <form action="https://formsubmit.co/899c98d11aff6fd7b45223005b2302b7" method="POST">
          <h3>Lets get in touch</h3>
          <input type="text" id="name" placeholder="Your Name" name="name" required />
          <input type="email" id="email" placeholder="Your Email" name="email" required />
          <textarea id="message" rows="4" placeholder="Enter Your Message Here!" name="comments, questions?"></textarea>
          <input type="text" name="_honey" style={{display: "none"}} />
          <input type="text" name="_captcha" value="false" style={{display: "none"}} />
          <button type="submit" id="submit">Send</button>
        </form>
      </div>
     <Footer />
    </Fragment>
  )
}

export default ContactMe