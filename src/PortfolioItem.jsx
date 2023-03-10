import './styles.css'
import IconPortfolio from "./assets/icons8-folder-32-alt.svg"
import React from 'react'
import { Link } from "react-router-dom"

function PortfolioItem({data}) {
  const { id,title, description, skills } = data ;
  return (    
    <div className="portfolio-grid-item-container">
      <div className="portfolio-grid-item-container-header-left">
        <img src={IconPortfolio} alt="" width='30px'  />
      </div>
      <div className="portfolio-grid-item-container-header-right">
      <Link to={id} state={ data } >
        <svg className="portfolio-link"  xmlns="http://www.w3.org/2000/svg" width="26px"  role="img" viewBox="0 0 24 24" fill="none" stroke="orange" ><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </Link>
      </div>
      <div className="portfolio-grid-item-container-body">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className='portfolio-grid-item-container-footer '>
        <span>{skills}</span>
      </div>
    </div>
  )
}
export default PortfolioItem
