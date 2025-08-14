import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Zap, TrendingUp } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Globe size={32} />,
      title: "Operating across 4 countries",
      description: "Offering solutions across India, Thailand, UAE, Bahrain.",
      color: "#FF8C00"
    },
    {
      icon: <Shield size={32} />,
      title: "Supported by Brookfield, Augment and IFU",
      description: "Secured funding from top-tier global investors.",
      color: "#90EE90"
    },
    {
      icon: <Zap size={32} />,
      title: "Flexible OPEX, CAPEX, and VPPA models",
      description: "Capital-light, co-investment, or full-ownership financing options.",
      color: "#4A90E2"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Asset Management Powered by Intelligence",
      description: "Real-Time Analytics, Predictive Maintenance and Live Monitoring.",
      color: "#2E7D32"
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="why-choose-us-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Why choose us
          </h2>
          <h3 className="section-subtitle">
            Trusted Net-Zero Transition Partner
          </h3>
        </motion.div>

        <motion.div
          className="reasons-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="reason-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="reason-icon" style={{ color: reason.color }}>
                {reason.icon}
              </div>
              <h4 className="reason-title">{reason.title}</h4>
              <p className="reason-description">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
