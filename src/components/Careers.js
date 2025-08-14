import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Zap, Globe } from 'lucide-react';
import './Careers.css';

const Careers = () => {
  const careerBenefits = [
    {
      icon: <Users size={32} />,
      title: "Join a Growing Team",
      description: "Be part of a dynamic team of professionals passionate about renewable energy and sustainability."
    },
    {
      icon: <Zap size={32} />,
      title: "Innovation Focus",
      description: "Work on cutting-edge technologies and solutions that are shaping the future of clean energy."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Impact",
      description: "Contribute to projects that have a real impact on reducing carbon emissions worldwide."
    }
  ];

  return (
    <section className="careers">
      <div className="careers-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Careers
          </h2>
          <h3 className="section-subtitle">
            Power Your Career
          </h3>
          <p className="section-description">
            Be part of the team powering businesses to net-zero.
          </p>
        </motion.div>

        <motion.div
          className="careers-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="careers-grid">
            {careerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="career-benefit"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h4 className="benefit-title">{benefit.title}</h4>
                <p className="benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="careers-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="cta-button">
              Explore Open Roles
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
