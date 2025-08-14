import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './Hero.css';

const Hero = () => {
  const [showUnderline, setShowUnderline] = useState(false);

  useEffect(() => {
    // Trigger the underline animation after a short delay
    const timer = setTimeout(() => {
      setShowUnderline(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Powering a{' '}
            <span className="cleaner-text">
              Cleaner
              <span className={`cleaner-underline ${showUnderline ? 'animate' : ''}`}></span>
            </span>
            , Greener Tomorrow
          </motion.h1>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Cleanco Group is at the forefront of India's renewable energy revolution. 
            We specialize in delivering comprehensive solar, BESS, and CBG solutions, 
            driving sustainable growth and environmental stewardship. Join us in building a brighter future.
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#solutions" className="hero-btn primary">
              Our Solutions
            </a>
            <a href="#about" className="hero-btn secondary">
              About Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
