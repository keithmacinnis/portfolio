import IconEmail from "./assets/icons8-mail.svg";
import './styles.css'

function About() {
  return (    
    <div className="container-about">
      <h1>Keith MacInnis</h1>
      <p>
        Software engineering professional with a Bachelor of Computer Science from Dalhousie University, a Bachelor of Commerce from The Sobey School of Business, and a history of working in startups, FinTech, and agile teams big and small.
      </p>
      <a href="mailto:keithmacinnis@gmail.com">
        <button>
          <img src={IconEmail} alt="" width='30px'/> Send an Email
        </button>
      </a>
    </div>
  )
}
export default About
