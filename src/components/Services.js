import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, MapPin, Users, Star, Clock } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Camera size={32} />,
      title: "Aerial Photography",
      description: "High-quality aerial photography services for real estate, tourism, and commercial projects.",
      features: ["4K Resolution", "Professional Editing", "Quick Delivery"],
      price: "Starting from $500"
    },
    {
      icon: <Video size={32} />,
      title: "Aerial Videography",
      description: "Cinematic aerial videos perfect for marketing, documentaries, and promotional content.",
      features: ["Cinematic Quality", "Color Grading", "Multiple Formats"],
      price: "Starting from $800"
    },
    {
      icon: <MapPin size={32} />,
      title: "Location Scouting",
      description: "Professional location scouting services to find the perfect spots for your aerial projects.",
      features: ["Expert Guidance", "Permit Assistance", "Weather Planning"],
      price: "Starting from $300"
    },
    {
      icon: <Users size={32} />,
      title: "Event Coverage",
      description: "Comprehensive aerial coverage for events, festivals, and special occasions.",
      features: ["Live Streaming", "Multi-Angle Shots", "Event Highlights"],
      price: "Starting from $1000"
    }
  ];

  const benefits = [
    {
      icon: <Star size={24} />,
      title: "Premium Quality",
      description: "Professional equipment and experienced pilots ensure top-notch results."
    },
    {
      icon: <Clock size={24} />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality."
    },
    {
      icon: <MapPin size={24} />,
      title: "Wide Coverage",
      description: "Services available across Turkey with flexible scheduling."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Professional aerial photography and videography services across Turkey
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div className="service-price">{service.price}</div>
              <button className="service-btn">Learn More</button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="benefits-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Why Choose Above Turkey?</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
