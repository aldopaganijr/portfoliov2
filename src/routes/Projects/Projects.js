import React from 'react';
import "./Projects.scss";
import Footer from "../../components/Footer/Footer";
import TheGrowRoom from "../../assets/theGrowRoom.png";
import Blockbuster from "../../assets/blockbuster.png";
import Lofi from "../../assets/lofi.png";
import {MdLiveTv} from "react-icons/md"
import {FaGithub} from "react-icons/fa"


const Projects = () => {

  return (
        <div className='projects-container'>
          <h2 id="main-tag">Projects</h2>
          <div className="card-container">
          <div className="project-card">
              <img className="project-image" src={TheGrowRoom}  alt="thegrowroom" />
              <h3>The Grow Room</h3>
              <p className="sub-text">This project was made using React, Sass, Framer Motion, Firebase, Stripe</p>
              <hr/>
              <p className="sub-text">
                  <a id="direct-link" href="https://thegrowroom.netlify.app/" alt="thegrowroom"><MdLiveTv /></a>
                  <a id="direct-link" href="https://github.com/aldopaganijr/flower-shop" alt="thegrowroom"><FaGithub /></a>
              </p>
          </div>
          <div className="project-card">
              <img className="project-image" src={Blockbuster} alt="blockbuster" />
              <h3>Blockbuster Movie</h3>
              <p className="sub-text">This project was made using React, Sass, Framer Motion, Material UI</p>
              <hr/>
              <p className="sub-text">
                  <a id="direct-link" href="https://blockbusterrated.netlify.app/" alt="blockbuster"><MdLiveTv /></a>
                  <a id="direct-link" href="https://github.com/aldopaganijr/react-movie" alt="blockbuster"><FaGithub /></a>
              </p>
          </div>
          <div className="project-card">
              <img className="project-image"  src={Lofi} alt="music-player" />
              <h3>Music Player</h3>
              <p className="sub-text">This project was made using React & Sass, Framer Motion</p>
              <hr/>
              <p className="sub-text">
                  <a id="direct-link" href="https://aldopaganijr.github.io/music-player/" alt="music-player"><MdLiveTv /></a>
                  <a id="direct-link" href="https://github.com/aldopaganijr/music-player" alt="music-player"><FaGithub /></a>
              </p>
          </div>
      </div>
      <Footer/>
    </div>

  )
}

export default Projects