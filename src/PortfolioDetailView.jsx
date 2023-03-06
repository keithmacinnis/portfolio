import './styles.css'
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom"

function PortfolioDetailview() {
  const location = useLocation()
  const { title, description,longDescription, skills, img } = location.state ;
  return (    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .4 }}
    >
      <div className="container-portfolio-detail-view">
        <div className="header">
          <h2>Portfolio: {title}</h2>
        </div>
        <div className="feature-image">
          <img src={img} width="100%"></img>
        </div>
        <div className="descriptions">
          <p>{description}.</p>
          <p>{longDescription}</p>
        </div>
        <div className="skills">
          <span>{skills}</span>
        </div>
        <div className="footer">
          <NavLink to={`/portfolio`}>
            <button className="back-button">Back</button>
          </NavLink>
        </div>
      </div>
    </motion.div>
  )
}
export default PortfolioDetailview  
