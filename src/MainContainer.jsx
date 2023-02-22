import './styles.css'
import IconGitHub from "./assets/icons8-github (1).svg";
import IconInstagram from "./assets/icons8-instagram.svg";
import IconLinkedIn from "./assets/icons8-linkedin.svg";
import Logo from "./assets/logo.svg";
import Spline from '@splinetool/react-spline';
import { isMobile } from 'react-device-detect';
import { Outlet, NavLink } from "react-router-dom";

function MainContainer() {
  return (
    <div className='container-main-wrapper'>
      <Background isMobile={ isMobile }/>
      <div className="container-socials">
        <div />
        <a href="http://github.com/keithmacinnis/" target="_blank"> <img src={IconGitHub}  alt="GitHub" width="30px" height="30px"/></a>
        <a href="http://linkedin.com/in/keithmacinnis/"target="_blank"><img src={IconLinkedIn} alt="LinkedIn" width="30px" height="30px"/></a>
        <a href="http://instagram.com/keithmacinnis/"target="_blank"><img src={IconInstagram} alt="Instagram" width="30px" height="30px"/></a>
      </div>
      <div className='container-main'>
        <ul className='container-menu-ul'>
          <li>
            <img src={Logo} alt="Logo that spins on hover" />
          </li>
          <li>
            <NavLink to={`/`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={`/resume`}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to={`/portfolio`}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to={`/articles`}>
              Articles
            </NavLink>
          </li>
        </ul>
        <Outlet/>
      </div >
    </div>
);
}

function MobileBackground(props) {
  return (
    <Spline
      className="spline"
      scene="https://draft.spline.design/KpaRDeXT6Qur4zaS/scene.splinecode"
    />)
}

function DesktopBackground(props) {
  return (
    <Spline
      className="spline"
      scene="https://draft.spline.design/KpaRDeXT6Qur4zaS/scene.splinecode"
    />)
} 

function Background(props) {
  const isMobile = props.isMobile;
  if (isMobile) {
    return <MobileBackground />;
  }
  return <DesktopBackground />;
}

export default MainContainer
