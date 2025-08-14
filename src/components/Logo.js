import React from 'react';
import './Logo.css';

const Logo = ({ className = '' }) => {
  return (
    <div className={`logo ${className}`}>
      <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Upper Orange Arc */}
        <path 
          d="M 20 15 Q 100 5 180 15" 
          stroke="#FF8C00" 
          strokeWidth="3" 
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Lower Light Green Arc */}
        <path 
          d="M 20 45 Q 100 55 180 45" 
          stroke="#90EE90" 
          strokeWidth="3" 
          fill="none"
          strokeLinecap="round"
        />
        
        {/* CLEANCO Text */}
        <text x="100" y="35" textAnchor="middle" className="logo-text">
          <tspan x="100" dy="-2" className="logo-clean">CLEAN</tspan>
          <tspan x="100" dy="0" className="logo-co">CO</tspan>
        </text>
      </svg>
    </div>
  );
};

export default Logo;
