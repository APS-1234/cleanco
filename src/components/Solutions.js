import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sun, Wind, Leaf, Zap } from 'lucide-react';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      icon: <Sun size={48} />,
      title: "Onsite Solar Solutions",
      description: "Customised Solar PV systems engineered for your facility. Optimised for lower costs and energy independence.",
      features: ["Custom Design", "Energy Independence", "Cost Optimization"],
      color: "#FF8C00",
      link: "#onsite-solar"
    },
    {
      icon: <Wind size={48} />,
      title: "Offsite Solutions",
      description: "Reliable and large-scale green energy solutions for consistent operations across multiple locations.",
      features: ["Large Scale", "Reliable Power", "Multi-location"],
      color: "#90EE90",
      link: "#offsite-solutions"
    },
    {
      icon: <Leaf size={48} />,
      title: "Carbon Solutions",
      description: "Supporting global sustainability goals. Creating true impact with innovative and socially conscious initiatives.",
      features: ["Carbon Neutral", "Social Impact", "Innovation"],
      color: "#4A90E2",
      link: "#carbon-solutions"
    },
    {
      icon: <Zap size={48} />,
      title: "Hybrid Energy Systems",
      description: "Combined solar and wind solutions for maximum efficiency and reliability in diverse environmental conditions.",
      features: ["Maximum Efficiency", "Reliability", "Diverse Conditions"],
      color: "#2E7D32",
      link: "#hybrid-systems"
    }
  ];

  return (
    <section id="solutions" className="solutions">
      <div className="solutions-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Smart Solutions. Designed for Your Net-Zero Goals
          </h2>
          <p className="section-subtitle">
            Comprehensive energy solutions tailored to accelerate your sustainability journey
          </p>
        </motion.div>

        <motion.div
          className="solutions-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="solution-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="solution-icon" style={{ color: solution.color }}>
                {solution.icon}
              </div>
              
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              
              <div className="solution-features">
                {solution.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
              
              <a href={solution.link} className="solution-link">
                Explore
                <ArrowRight size={20} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
