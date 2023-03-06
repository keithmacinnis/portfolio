import React from 'react'
import ReactDOM from 'react-dom/client'
import MainContainer from './MainContainer'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'
import PortfolioDetailView from './PortfolioDetailView'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './assets/nocturne-serif-bold.otf'
import './assets/nocturne-serif-regular.otf'
import './styles.css'
import { AnimatePresence } from "framer-motion"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route path="/" element={<About/>}/>
          <Route path="resume" element={<Resume/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="portfolio/:id" element={<PortfolioDetailView/>}/>
          <Route path="articles" element={<h2>Articles</h2>}/>
        </Route>
      </Routes>
    </AnimatePresence>
  </Router>
)
