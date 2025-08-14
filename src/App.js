import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import JourneyVision from './components/JourneyVision';
import SolutionsGrid from './components/SolutionsGrid';
import Solar from './components/Solar';
import BESS from './components/BESS';
import CBG from './components/CBG';
import AboutUs from './components/AboutUs';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import JourneyTimeline from './components/JourneyTimeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <JourneyVision />
                <SolutionsGrid />
                <About />
                <FeaturedProjects />
                <JourneyTimeline />
                <Contact />
              </>
            } />
            <Route path="/solar" element={<Solar />} />
            <Route path="/bess" element={<BESS />} />
            <Route path="/cbg" element={<CBG />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
