import './styles.css'
import IconLinkedIn from "./assets/icons8-linkedin.svg"
import IconGitHub from "./assets/icons8-github (1).svg"
import IconDalhousie from "./assets/dal-icon-70x70.png"
import IconPortfolio from "./assets/icons8-folder-32-alt.svg"
import IconSMU from "./assets/smu-favicon-trans.png"
import ImageLinkedin from "./assets/linkedin-large.jpeg"
import ImageGithub from "./assets/github-large.jpeg"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom";

function Resume() {
  return (  
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .4 }}
    >
      <div className="container-resume">
        <h2>Universities</h2>
        <div className="resume-top-button-container">
          <a href="https://www.dal.ca/faculty/computerscience.html" target="_blank">
            <button>
              <img src={IconDalhousie} alt="Dalhousie University" className="icon-naked" width='30px'/>Dalhousie University
            </button>
          </a>
          <a href="https://www.smu.ca/academics/sobey/welcome.html" target="_blank">
            <button  >
              <img src={IconSMU} alt="SMU"   width='30px'/>Saint Mary's University
            </button>
          </a>
        </div>
        <h2>Skills & Experience</h2>
        <div className="resume-top-button-container">
          <a href="https://www.linkedin.com/in/keithmacinnis" target="_blank">
            <button>
              <img src={IconLinkedIn} alt="LinkedIn" className="icon-naked" width='30px'/>LinkedIn
            </button>
            <img className="resume-screenshot" src={ImageLinkedin} alt="personal linkedin" /> 
          </a>
          <a href="https://github.com/keithmacinnis " target="_blank">
            <button  >
              <img src={IconGitHub} alt="Github"   width='30px'/>Github
            </button>
            <img className="resume-screenshot" src={ImageGithub} alt="personal github summary of 2022" /> 
          </a>
          </div>
          <h2>Portfolio</h2>
          <div className="resume-top-button-container">
          <NavLink to={`/portfolio`}>
            <button  >
              <img src={IconPortfolio} alt="Portfolio Link"   width='30px'/>View Portfolio
            </button>
          </NavLink>
          </div>
      </div>
    </motion.div>
  )
} 
export default Resume
