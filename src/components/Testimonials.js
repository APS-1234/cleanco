import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      company: "Google",
      project: "100 MW+ renewable energy partnership in India",
      quote: "This landmark initiative supports Google's sustainable growth in India and underscores Google's commitment to source clean energy for our operations in every grid where we operate.",
      author: "Giorgio Fortunato",
      position: "Head of Clean Energy & Power for Asia Pacific at Google"
    },
    {
      company: "Bengaluru Airport (BIAL)",
      project: "Hybrid energy towards expansion program of the airport",
      quote: "The long-term power purchase agreement with CLEANCO will play an important role in meeting the renewable energy needs for the expansion program of the airport and shall provide substantial cost savings, further bolstering our commitment to sustainability and responsible growth.",
      author: "Mr. Hari Marar",
      position: "Managing Director & Chief Executive Officer, BIAL"
    },
    {
      company: "Apple JV",
      project: "Racing toward our ambitious 2030 climate goal",
      quote: "We're racing toward our ambitious Apple 2030 climate goal while taking on the long-term work to transform electrical grids and restore watersheds to build a cleaner future for all.",
      author: "Lisa Jackson",
      position: "Apple's Vice President of Environment, Policy, and Social Initiatives"
    },
    {
      company: "Equinix",
      project: "33 MW Renewable Power Projects to Decarbonize its Data Centers in India",
      quote: "We are thrilled to partner with CLEANCO to establish this Captive Power Plant in Maharashtra, India. This PPA not only strengthens our commitment to sustainability but also enables us to provide our customers in India with 100% renewable energy coverage for their deployments at Equinix.",
      author: "Manoj Paul",
      position: "Managing Director, India, Equinix"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Customised for Scale. Chosen by Leaders.
          </h2>
        </motion.div>

        <motion.div
          className="testimonial-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="testimonial-card">
            <div className="testimonial-header">
              <h3 className="company-name">{testimonials[currentTestimonial].company}</h3>
              <p className="project-description">{testimonials[currentTestimonial].project}</p>
            </div>
            
            <div className="testimonial-quote">
              <Quote size={32} className="quote-icon" />
              <blockquote>
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
            </div>
            
            <div className="testimonial-author">
              <h4 className="author-name">{testimonials[currentTestimonial].author}</h4>
              <p className="author-position">{testimonials[currentTestimonial].position}</p>
            </div>
          </div>

          <div className="testimonial-controls">
            <button className="control-btn" onClick={prevTestimonial}>
              <ChevronLeft size={24} />
            </button>
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
            <button className="control-btn" onClick={nextTestimonial}>
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
