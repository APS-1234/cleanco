import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

           

  return (
    <header className={`header ${scrolled || location.pathname === '/solar' || location.pathname === '/bess' || location.pathname === '/cbg' || location.pathname === '/about' ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="/images/sologo-aitools-bgremover.png" alt="CLEANCO Logo" />
          </Link>
        </div>
        <nav className="nav-links">
          <ul>
            <li><Link to="/solar" className={location.pathname === '/solar' ? 'active' : ''}>Solar</Link></li>
            <li><Link to="/bess" className={location.pathname === '/bess' ? 'active' : ''}>BESS</Link></li>
            <li><Link to="/cbg" className={location.pathname === '/cbg' ? 'active' : ''}>CBG</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
          </ul>
        </nav>
        <button className="get-started-btn">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
