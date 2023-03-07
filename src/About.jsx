import "./styles.css"
import IconEmail from "./assets/icons8-mail.svg"
import { motion } from "framer-motion"

function About() {
  return (    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .4 }}
    >
      <div className="container-about">
        <h1 className="header-my-name">Keith MacInnis</h1>
        <p>
          Software engineering professional with a Bachelor of Computer Science from Dalhousie University, a Bachelor of Commerce from The Sobey School of Business, and a history of working in startups, FinTech, and agile teams big and small.
        </p>
        <a href="mailto:keithmacinnis@gmail.com">
          <button>
            <img src={IconEmail} alt="" width='30px'/> Send an Email
          </button>
        </a>
      </div>  
    </motion.div>
  )
}
export default About
