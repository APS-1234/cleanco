import React, { useState, useEffect, useRef } from 'react';
import './JourneyVision.css';

const JourneyVision = () => {
  const [counts, setCounts] = useState({
    solarCapacity: 0,
    biogasCapacity: 0,
    projectsCompleted: 0,
    bessCapacity: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const targetCounts = {
    solarCapacity: 250,
    biogasCapacity: 10,
    projectsCompleted: 50,
    bessCapacity: 50
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounts();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        solarCapacity: Math.floor(targetCounts.solarCapacity * progress),
        biogasCapacity: Math.floor(targetCounts.biogasCapacity * progress),
        projectsCompleted: Math.floor(targetCounts.projectsCompleted * progress),
        bessCapacity: Math.floor(targetCounts.bessCapacity * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, stepDuration);
  };

  return (
    <section className="journey-vision" ref={sectionRef}>
      <div className="container">
        <div className="journey-content">
          <div className="journey-text">
            <h2 className="journey-title">Our Journey & Vision</h2>
            <p className="journey-description">
              At Cleanco Group of Companies, we have rapidly grown to become a prominent leader in solar, BESS, and CBG solutions across India, driven by our commitment to innovation, reliability, and sustainable growth.
            </p>
            <div className="journey-stats">
              <div className="stats-column">
                <div className="stat-item">
                  <div className="stat-number">{counts.solarCapacity} MW</div>
                  <div className="stat-label">solar capacity by 2027</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{counts.projectsCompleted} MW</div>
                  <div className="stat-label">solar projects completed</div>
                </div>
              </div>
              <div className="stats-column">
                <div className="stat-item">
                  <div className="stat-number">{counts.biogasCapacity} TPD</div>
                  <div className="stat-label">biogas production capacity</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{counts.bessCapacity} MW</div>
                  <div className="stat-label">BESS capacity</div>
                </div>
              </div>
            </div>
          </div>
          <div className="journey-image">
            <div className="image-container">
              <img 
                src="/images/cleanco_1.png"
                alt="Solar power installation with BESS units in natural landscape" 
                className="solar-installation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyVision;
