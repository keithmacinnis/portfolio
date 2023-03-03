import React, { useState } from 'react';
import PortfolioItem  from './PortfolioItem.jsx'


import IconEmail from "./assets/icons8-mail.svg";
import ScreenShotOnrampAcademy from "./assets/portfolio_onramp_academy.jpeg";
import ScreenShotOnrampAdvisor from "./assets/portfolio_onramp_advisor.jpeg";
import ScreenShotForPlay from "./assets/portfolio_forPlay.jpeg";
import ScreenShotTFT from "./assets/portfolio_tft.jpeg";
import ScreenShotMMC from './assets/portfolio_mmc.jpeg';
import ScreenShot1Day from "./assets/portfolio_1day.jpeg";
import './styles.css'

function Portfolio() {
  const portfolio = [{"title":"Onramp Advisor","category":"Full-stack","completionDate":"December, 2022","img":ScreenShotOnrampAdvisor, "description":"A Platform as a service for Financial Advisors."},
                    {"title":"Onramp Academy","category":"Full-stack","completionDate":"March, 2022","img":ScreenShotOnrampAcademy},
                    {"title":"For Play: The Neighbourhood Connector","category":"iOS Swift","completionDate":"March, 2015","img":ScreenShotForPlay},
                    {"title":"TFT: CBT Therapy","category":"iOS Swift","completionDate":"April, 2014","img":ScreenShotTFT},
                    {"title":"1 Day Bumper","category":"Web Dev","completionDate":"January, 2021","img":ScreenShot1Day},
                    {"title":"Medical Mercy Canada","category":"Webmaster","completionDate":"Ongoing","img":ScreenShotMMC},]
                    
 
  return (    

        <div className="container-portfolio">
          {
            portfolio.map ((portfolioItem) => (
              <li key={portfolioItem.id}>
                <PortfolioItem data={portfolioItem} />
              </li>
            ))
          }
        </div>

  )
}
export default Portfolio
