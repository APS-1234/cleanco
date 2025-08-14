import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import './Insights.css';

const Insights = () => {
  const insights = [
    {
      id: "01",
      title: "Sustainability Karma Podcast with Mr. Kuldeep Jain",
      category: "Podcast",
      date: "March 15, 2025",
      author: "CLEANCO Team",
      image: "https://images.unsplash.com/photo-1559304821-4ae9bf6fabb5?w=800&h=450&fit=crop"
    },
    {
      id: "02",
      title: "CLEANCO and Toyota Tsusho India join hands",
      category: "Partnership",
      date: "March 10, 2025",
      author: "CLEANCO Team",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=450&fit=crop"
    },
    {
      id: "03",
      title: "Google collaborates with CLEANCO to add clean energy capacity in India",
      category: "Collaboration",
      date: "March 5, 2025",
      author: "CLEANCO Team",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=450&fit=crop"
    },
    {
      id: "04",
      title: "Our CSR initiative in Madhya Pradesh's Satpura-Melghat Corridor",
      category: "CSR",
      date: "March 1, 2025",
      author: "CLEANCO Team",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=450&fit=crop"
    }
  ];

  return (
    <section className="insights">
      <div className="insights-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Insights & Updates
          </h2>
          <h3 className="section-subtitle">
            Tailored Insights for Future-Ready Energy
          </h3>
        </motion.div>

        <motion.div
          className="insights-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              className="insight-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="insight-image">
                <img src={insight.image} alt={insight.title} />
                <div className="insight-overlay">
                  <div className="insight-id">{insight.id}</div>
                </div>
              </div>
              
              <div className="insight-content">
                <div className="insight-meta">
                  <span className="insight-category">{insight.category}</span>
                  <div className="insight-date">
                    <Calendar size={14} />
                    <span>{insight.date}</span>
                  </div>
                </div>
                
                <h3 className="insight-title">{insight.title}</h3>
                
                <div className="insight-author">
                  <User size={14} />
                  <span>{insight.author}</span>
                </div>
                
                <a href="#contact" className="insight-link">
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="insights-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="#contact" className="cta-button">
            View all Updates
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;
