import React from 'react'
import "./AboutMe.scss"
import Footer from "../../components/Footer/Footer"
import Me from "../../assets/me.jpg";
import Skills from "../../components/Skills/Skills"

const AboutMe = () => {

  return (

    <div>
      <h2 id="main-tag">About Me</h2>
        <div class="about-container">
          <div class="myPic">
              <img class="myself" src={Me} alt="self portrait" />
          </div>
          <div class="bio">
              <p>I am a React Frontend Developer with a background in photography & videography. I have a serious passion for creating responsive, feature rich websites with a great user experience. If I don't have a monitor in front of me, you will most likely find me wandering around with my camera.</p>
          </div>
          <div class="skills">
              <h2 id="list-heading">Expertise</h2>
              <ul class="languages">
                  <li>React</li>
                  <li>Redux</li>
                  <li>Hooks</li>
                  <li>Native</li>
              </ul>
          </div>
        </div>
        <Skills />
      <Footer />
    </div>

  )
}

export default AboutMe