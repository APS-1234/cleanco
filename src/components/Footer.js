import React, { useState } from 'react';
import { Linkedin, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-column">
            <h4>Our Solutions</h4>
            <ul className="footer-links">
              <li><a href="#solar">Solar</a></li>
              <li><a href="#bess">BESS</a></li>
              <li><a href="#cbg">CBG</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#menu1">Menu 1</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Stay Updated</h4>
            <p className="newsletter-text">
              Subscribe to our newsletter for the latest news and insights on renewable energy solutions.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Cleanco Group of Companies. All rights reserved.
          </p>
          
          <div className="footer-links-center">
            <a href="#terms">Terms and Conditions</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          
          <div className="social-links">
            <a href="#linkedin" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#youtube" className="social-link" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
