import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Eye } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'photography', name: 'Photography' },
    { id: 'videography', name: 'Videography' },
    { id: 'events', name: 'Events' }
  ];

  const projects = [
    {
      id: 1,
      title: "Istanbul Skyline",
      category: "photography",
      location: "Istanbul, Turkey",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
      description: "Aerial photography of Istanbul's iconic skyline featuring the Bosphorus Bridge and historic landmarks."
    },
    {
      id: 2,
      title: "Cappadocia Hot Air Balloons",
      category: "photography",
      location: "Cappadocia, Turkey",
      date: "February 2024",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Stunning aerial shots of the famous hot air balloon festival in Cappadocia's unique landscape."
    },
    {
      id: 3,
      title: "Antalya Beach Resort",
      category: "videography",
      location: "Antalya, Turkey",
      date: "January 2024",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      description: "Cinematic aerial video showcasing the beautiful Mediterranean coastline and luxury resorts."
    },
    {
      id: 4,
      title: "Ankara City Center",
      category: "photography",
      location: "Ankara, Turkey",
      date: "December 2023",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      description: "Modern architecture and urban development captured from above in Turkey's capital city."
    },
    {
      id: 5,
      title: "Izmir Festival",
      category: "events",
      location: "Izmir, Turkey",
      date: "November 2023",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
      description: "Live aerial coverage of the annual Izmir International Festival with thousands of attendees."
    },
    {
      id: 6,
      title: "Pamukkale Thermal Pools",
      category: "photography",
      location: "Denizli, Turkey",
      date: "October 2023",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Aerial photography of the stunning white travertine terraces and thermal pools."
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore our collection of stunning aerial photography and videography from across Turkey
          </p>
        </motion.div>

        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="portfolio-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <Eye size={24} />
                    <span>View Project</span>
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-meta">
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Ready to Start Your Project?</h3>
          <p>Let's create something amazing together with our aerial photography and videography services.</p>
          <a href="#contact" className="cta-button">Get Started</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

