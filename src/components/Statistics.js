import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Award, Users } from 'lucide-react';
import './Statistics.css';

const Statistics = () => {
  const stats = [
    {
      number: "500+",
      label: "Corporate businesses",
      icon: <Users size={32} />,
      color: "#FF8C00"
    },
    {
      number: "2.2 GW",
      label: "Operational Portfolio Across Asia",
      icon: <Globe size={32} />,
      color: "#90EE90"
    },
    {
      number: "No.1",
      label: "in Asia (as of March 31, 2025)",
      icon: <Award size={32} />,
      color: "#4A90E2"
    },
    {
      number: "15+",
      label: "Years of Excellence",
      icon: <TrendingUp size={32} />,
      color: "#2E7D32"
    }
  ];

  return (
    <section className="statistics">
      <div className="statistics-container">
        <motion.div
          className="statistics-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
