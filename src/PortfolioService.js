import ScreenShotOnrampAcademy from "./assets/portfolio_onramp_academy.jpeg";
import ScreenShotOnrampAdvisor from "./assets/portfolio_onramp_advisor.jpeg";
import ScreenShotForPlay from "./assets/portfolio_forPlay.jpeg";
import ScreenShotTFT from "./assets/portfolio_tft.jpeg";
import ScreenShotMMC from "./assets/portfolio_mmc.jpeg";
import ScreenShot1Day from "./assets/portfolio_1day.jpeg";
import ScreenShotNT from "./assets/portfolio_nt.jpeg";

export default [
 {
    id:"0",
    title:"Onramp Advisor",
    category:"Full-stack",
    completionDate:"December, 2022",
    img:ScreenShotOnrampAdvisor, 
    description:"A platform for financial advisors to seamlessly trade and allocate crypto on behalf of their clients                 ", 
    longDescription:"Most of the development focused on 3rd party API's from banks & crypto exchanges. One of the premium features developed was the ability to create self-balancing models, much like traditional indexes. The UI came designed in figma and was coded in Vue2. The Backend was spread across python microservices and connected to external APIs from banks and crypto exchanges. The team was agile and used CickUp for tickets.",
    skills:"js / vue2 / python / sql / kubenetes / restful"  
  },
  {
    id:"1",
    title:"Onramp Academy",
    category:"Full-stack",
    completionDate:"March, 2022",
    img:ScreenShotOnrampAcademy, 
    description:"An educational/research platform for financial advisors to expand their crypto knowledge", 
    longDescription:"We designed and built this educational/research platform internally over four months in vue3 & python with a graphQL CMS. Information was fetched from internal restful microservices and external third-party APIs. There were tools that allowed backtesting of custom models, a content library that spanned over a hundred articles, and fact cards for the top thirty coins.",
    skills:"js / vue3 / python / sql / kubenetes / graphQL"    
  },
  {
    id:"2",
    title:"Northern Trust",
    category:"Full-stack",
    completionDate:"May, 2020",
    img:ScreenShotNT, 
    description:"Created a modern client application for Northern Trust Bank", 
    longDescription:"Among a distributed team of 500 IBM engineers, our team focused on Auth and front-end clients. We integrated OnFido, an AI-powered authentication system, and other authentication systems into traditional banks like Barclays and modern services like Plaid.",
    skills:"js / react / java / iOS / microservices / kafka"    
  },

   {
    id:"3",
    title:"1 Day Bumper",
    category:"Web Dev",
    completionDate:"Jan, 2021",
    img:ScreenShot1Day, 
    description:"Created a wordpress site for this GTA service, 1 Day Bumper, which makes car repair quotes quick and easy", 
    skills:"wp / forms"  
  },
  {
    id:"4",
    title:"Medical Mercy Canada",
    category:"Web Dev",
    completionDate:"Ongoing",
    img:ScreenShotMMC, 
    description:"A chairty raising funds for humantarian aid in Ukraine, India, Myanmar, and Thailand.", 
    longDescription:"In this volunteer role I maintain the server, domains, and payment gateways. The site is updated by non-technical volunteers, with me doing cleanups every few months.",
    skills:"wp / hosting / tech support"  
  },
  {
    id:"5",
    title:"TFT: CBT Therapy",
    category:"iOS Swift",
    completionDate:"April, 2014",
    img:ScreenShotTFT, 
    description:"A CBT tool used by counsellors, mainly in the States...", 
    longDescription:"I translated a practicians book into an iOS app. The app would guide a user through a practice that would relieve symptoms by following the interactive onscreen guide. In tangent with this, a website providing certification and training in the school was offered. ",
    skills:"iOS / swift"  
  },
  {
    id:"6",
    title:"For Play: The Neighbourhood Connector",
    category:"iOS Swift",
    completionDate:"March, 2015",
    img:ScreenShotForPlay, 
    description:"My sideproject, a platform to join in on and/or organize sports & events.", 
    longDescription:"Originally realeased in 2015, the BaaS platform deprecaited. This app is again a WIP, and can be followed at https://github.com/keithmacinnis/for-play",
    skills:"iOS / swift / firebase"    
  },
]
