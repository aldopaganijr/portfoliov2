import React from 'react';
import "./Projects.scss";
import Footer from "../../components/Footer/Footer";
import TheGrowRoom from "../../assets/theGrowRoom.png";
import Blockbuster from "../../assets/blockbuster.png";
import TheBlankCanvas from "../../assets/theblankcanvas.netlify.app_Shop.png"
import {MdLiveTv} from "react-icons/md"
import {FaGithub} from "react-icons/fa"
import Skills from "../../components/Skills/Skills"
import { motion } from "framer-motion"
import {pageAnimation} from "../../Animation";
import { titleAnim } from '../../Animation';
import {FaReact} from "react-icons/fa"


const Projects = () => {

  return (
        <div className='projects-container'>
          <motion.h2 exit="exit" variants={titleAnim} initial="hidden" animate="show"  id="main-tag">Projects</motion.h2>
          <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" className="card-container">
            <div className="project-card">
              <img className="project-image" src={TheBlankCanvas}  alt="thegrowroom" />
              <h3>E-Commerce Site</h3>
              <p className="sub-text">MERN Stack, Framer Motion, Bootstrap, Sass, Styled Components</p>
              <hr/>
              <p className="sub-text">
                  <a id="direct-link" href="https://the-blank-canvas.netlify.app/" alt="theblankcanvas"><MdLiveTv /></a>
                  <a id="direct-link" href="https://github.com/aldopaganijr/theblankcanvasFE" alt="thegrowroom"><FaGithub /></a>
                  <a id="direct-link" href="/"><FaReact /></a>
              </p>
            </div>
            <div className="project-card">
                <img className="project-image" src={TheGrowRoom}  alt="thegrowroom" />
                <h3>E-Commerce Site</h3>
                <p className="sub-text">React, Sass, Framer Motion, Firebase</p>
                <hr/>
                <p className="sub-text">
                    <a id="direct-link" href="https://thegrowroom.netlify.app/" alt="thegrowroom"><MdLiveTv /></a>
                    <a id="direct-link" href="https://github.com/aldopaganijr/flower-shop" alt="thegrowroom"><FaGithub /></a>
                    <a id="direct-link" href="/"><FaReact /></a>
                </p>
            </div>
            <div className="project-card">
                <img className="project-image" src={Blockbuster} alt="blockbuster" />
                <h3>API App</h3>
                <p className="sub-text">React, Sass, Framer Motion, Material UI</p>
                <hr/>
                <p className="sub-text">
                    <a id="direct-link" href="https://blockbusterrated.netlify.app/" alt="blockbuster"><MdLiveTv /></a>
                    <a id="direct-link" href="https://github.com/aldopaganijr/react-movie" alt="blockbuster"><FaGithub /></a>
                    <a id="direct-link" href="/"><FaReact /></a>
                </p>
            </div>
      </motion.div>
      <Skills />
      <Footer/>
    </div>

  )
}

export default Projects