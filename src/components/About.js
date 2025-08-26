import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Leaf, Target } from 'lucide-react';
import './About.css';

const About = () => {
  const featureItems = [
    {
      icon: <TrendingUp size={24} />,
      title: "Solar Expansion",
      description: "Grow from 50 MW to 250 MW by 2027"
    },
    {
      icon: <Leaf size={24} />,
      title: "CBG Production", 
      description: "Achieve 10 TPD capacity"
    },
    {
      icon: <Target size={24} />,
      title: "Sustainable Impact",
      description: "Contribute to India's renewable energy targets"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">
              Our Vision: Expanding<br />
              Renewable Energy<br />
              Horizons in India
            </h2>
            <p className="about-description">
              Cleanco Group is committed to substantial growth in the renewable energy sector. We aim to increase our solar capacity from 50 MW to 250 MW by 2027 and achieve a 10 TPD CBG production capacity, contributing significantly to India's sustainable energy goals.
            </p>
            <motion.div 
              className="about-features"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              {featureItems.map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="feature-item"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="feature-icon">
                    {item.icon}
                  </div>
                  <div className="feature-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <img 
                src={`${process.env.PUBLIC_URL}/images/cleanco_6.png`} 
                alt="Futuristic cityscape with renewable energy integration" 
                className="vision-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
