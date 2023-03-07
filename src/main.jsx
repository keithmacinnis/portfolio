import './assets/nocturne-serif-bold.otf'
import './assets/nocturne-serif-regular.otf'
import './styles.css'
import About from './About'
import MainContainer from './MainContainer'
import Portfolio from './Portfolio'
import PortfolioDetailView from './PortfolioDetailView'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Resume from './Resume'
import ScrollToTop from './ScrollToTop'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion"


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AnimatePresence>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route path="/" element={<About/>}/>
          <Route path="resume" element={<Resume/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="portfolio/:id" element={<PortfolioDetailView/>}/>
        </Route>
      </Routes>
    </AnimatePresence>
  </Router>
)
