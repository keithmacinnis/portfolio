import './styles.css'
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom"

function PortfolioDetailview() {
  const location = useLocation()
  const { title, description,extendedDescription, skills, img } = location.state ;
  return (    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .4 }}
    >
      <h2>Portfolio: {title}</h2>
      <div className="container-portfolio">
        <img src={img} width="300px"></img>
        <p>{description}</p>
        <p>{extendedDescription}</p>
        <span>{skills}</span>
      </div>
      <NavLink to={`/portfolio`}>
          <button className="back-button">Back</button>
      </NavLink>
    </motion.div>
  )
}
export default PortfolioDetailview  
