import React, { useState } from 'react';
import PortfolioItem  from './PortfolioItem.jsx'
import { motion } from "framer-motion"


import './styles.css'
import Portfolios from './PortfolioService';

function Portfolio() {

  
  return (    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .4 }}
    >
        <h2>Portfolio</h2>
        <div className="container-portfolio">
          {
            Portfolios.map ((portfolioItem) => (
              <li key={portfolioItem.id}>
                <PortfolioItem data={portfolioItem} />
              </li>
            ))
          }
        </div>
      </motion.div>
  )
}
export default Portfolio
