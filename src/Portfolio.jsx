import './styles.css'
import PortfolioItem from './PortfolioItem.jsx';
import Portfolios from './PortfolioService';
import { motion } from 'framer-motion';

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
