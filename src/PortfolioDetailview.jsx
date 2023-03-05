import React from 'react';
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import './styles.css'

function PortfolioDetailview() {
  
  const location = useLocation()
  const { id,title, description, skills,img } = location.state ;

  return (    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .4 }}
    >
        <h4>Back</h4>
        <h2>Portfolio: {title}</h2>
        <div className="container-portfolio">
          <p>{description}</p>
        </div>
      </motion.div>
  )
}
export default PortfolioDetailview  
