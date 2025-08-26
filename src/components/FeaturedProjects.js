import React from 'react';
import { motion } from 'framer-motion';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Sundar Solar Park",
      description: "A 100 MW solar power plant supplying clean energy to the local grid, showcasing Cleanco's large-scale solar expertise.",
      image: `${process.env.PUBLIC_URL}/images/cleanco_7.png`
    },
    {
      title: "EcoBiogas Plant",
      description: "A rural biogas plant converting agricultural waste into renewable energy, supporting local communities.",
      image: `${process.env.PUBLIC_URL}/images/cleanco_2.png`
    },
    {
      title: "GreenStorage BESS Facility",
      description: "A 50 MWh battery storage system that enhances grid stability and renewable integration for Indira Industrial Park.",
      image: `${process.env.PUBLIC_URL}/images/cleanco_3.png`
    },
    {
      title: "Projects",
      description: "Powering India",
      image: `${process.env.PUBLIC_URL}/images/cleanco_4.png`
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="featured-projects">
      <div className="container">
        <motion.div 
          className="projects-header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="projects-title">Our Featured Projects</h2>
          <p className="projects-intro">
            Discover some of our most impactful renewable energy projects, demonstrating our expertise in solar, BESS, and biogas solutions that power a cleaner India.
          </p>
          <div className="project-themes">
            <span className="theme-tag"># Innovative renewable solutions</span>
            <span className="theme-tag"># Reliable energy systems</span>
            <span className="theme-tag"># Sustainable development</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
