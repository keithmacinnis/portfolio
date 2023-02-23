import ImageGithub2022 from "./assets/github.png";
import IconLinkedIn from "./assets/icons8-linkedin.svg";
import IconGitHub from "./assets/icons8-github (1).svg";
import './styles.css'

function Resume() {
  return (  
    <div className="container-resume">
      <h2>Skills & Experience</h2>
      <div className="container">
        <a href="https://www.linkedin.com/in/keithmacinnis" target="_blank">
          <button>
            <img src={IconLinkedIn} alt="" className="icon-naked" width='30px'/>  LinkedIn
          </button>
        </a>
        <a href="https://github.com/keithmacinnis " target="_blank">
          <button  >
            <img src={IconGitHub} alt=""   width='30px'/>  Github
          </button>
        </a>
      </div>
      <a href="https://github.com/keithmacinnis "target="_blank">
        <img className="github-summary" src={ImageGithub2022} alt="personal github summary of 2022" width="64%"/> 
      </a>
      <h2>Keywords</h2>
      <p>JS, Python, Java, vue2, vue3, react, vueJS, reactJS, Swift, SQL, git, docker, kubernetes, helmcharts, microservices, cloud, aws, ci/cd, agile, full stack, back end, front end, linux, mac, shell, bash, api, restful, graphql, oauth, okta, jira</p>
    </div>
  )
} 
export default Resume
