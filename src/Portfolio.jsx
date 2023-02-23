import React, { useState } from 'react';


import IconEmail from "./assets/icons8-mail.svg";
import ScreenShotOnrampAcademy from "./assets/portfolio_onramp_academy.jpeg";
import ScreenShotOnrampAdvisor from "./assets/portfolio_onramp_advisor.jpeg";
import ScreenShotForPlay from "./assets/portfolio_forPlay.jpeg";
import ScreenShotTFT from "./assets/portfolio_tft.jpeg";
import ScreenShotMMC from './assets/portfolio_mmc.jpeg';
import ScreenShot1Day from "./assets/portfolio_1day.jpeg";
import './styles.css'

function Portfolio() {
  const portfolio = [{"title":"Onramp Advisor","category":"Full-stack","completionDate":"December, 2022","img":ScreenShotOnrampAdvisor},
                    {"title":"Onramp Academy","category":"Full-stack","completionDate":"March, 2022","img":ScreenShotOnrampAcademy},
                    {"title":"For Play: The Neighbourhood Connector","category":"iOS Swift","completionDate":"March, 2015","img":ScreenShotForPlay},
                    {"title":"TFT: CBT Therapy","category":"iOS Swift","completionDate":"April, 2014","img":ScreenShotTFT},
                    {"title":"1 Day Bumper","category":"Web Dev","completionDate":"January, 2021","img":ScreenShot1Day},
                    {"title":"Medical Mercy Canada","category":"Webmaster","completionDate":"Ongoing","img":ScreenShotMMC},]
                    
  const [index, setIndex] = React.useState(0);
  
  function nextIndex() {
    if (index == portfolio.length - 1) {
      setIndex(0)
    } else { 
      setIndex(index+1)
    }
  }
  function prevIndex() {
    if (index == 0) {
      setIndex(portfolio.length - 1)
    } else {
      setIndex(index-1)
    }
  }

  return (    
    <div className="container-portfolio">
      <h2>Portfolio {index+1} of {portfolio.length}</h2>
        <div className="container-portfolio">
        <li key={index}>
               <h2>{portfolio[index].title}, {portfolio[index].category}</h2>
               <h4>Completion Date: {portfolio[index].completionDate} </h4>
               <img src={portfolio[index].img} className="image-portfolio" width="80%" height="420px" ></img>
               <div className="portfolio-button-container">
                  <button onClick={prevIndex} className="portfolio-button-r">
                    <img src={IconEmail} alt="" width='30px'/> Prev
                  </button>
                  <button className="">
                    <img src={IconEmail} alt="" width='30px'/> Details
                  </button>
                  <button onClick={nextIndex} className="portfolio-button-r">
                    <img src={IconEmail} alt="" width='30px'/> Next
                  </button>
               </div>
            </li>
        {/* {
          portfolio.map ((portfolioItem) => (
            <li key={portfolioItem.id}>
               <h2>{portfolioItem.title}, {portfolioItem.category}</h2>
               <h4>Completion Date: {portfolioItem.completionDate} </h4>
               <img src={portfolioItem.img} width="386px"></img>
               <div className="portfolio-button">

                    <button>
                      <img src={IconEmail} alt="" width='30px'/> Details
                    </button>
               
           
                    <button>
                      <img src={IconEmail} alt="" width='30px'/> Next
                    </button>
             
                </div>
            </li>
          ))
        } */}
        </div>
    </div>
  )
}
export default Portfolio
