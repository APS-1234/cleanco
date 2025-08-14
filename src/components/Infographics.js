import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Zap, Leaf, Sun, Wind, Battery, Users } from 'lucide-react';
import './Infographics.css';

const Infographics = () => {
  const [animatedValues, setAnimatedValues] = useState({
    solarCapacity: 0,
    windCapacity: 0,
    carbonReduction: 0,
    energyEfficiency: 0,
    customerSatisfaction: 0,
    costSavings: 0
  });

  useEffect(() => {
    const animateValues = () => {
      const targetValues = {
        solarCapacity: 85,
        windCapacity: 65,
        carbonReduction: 92,
        energyEfficiency: 78,
        customerSatisfaction: 96,
        costSavings: 88
      };

      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setAnimatedValues({
          solarCapacity: Math.round(targetValues.solarCapacity * progress),
          windCapacity: Math.round(targetValues.windCapacity * progress),
          carbonReduction: Math.round(targetValues.carbonReduction * progress),
          energyEfficiency: Math.round(targetValues.energyEfficiency * progress),
          customerSatisfaction: Math.round(targetValues.customerSatisfaction * progress),
          costSavings: Math.round(targetValues.costSavings * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    // Start animation when component mounts
    const timer = setTimeout(animateValues, 500);
    return () => clearTimeout(timer);
  }, []);

  const infographicData = [
    {
      icon: <Sun size={32} />,
      title: "Solar Energy Growth",
      value: `${animatedValues.solarCapacity}%`,
      description: "Increase in solar capacity over 5 years",
      color: "#FF8C00",
      trend: "+15% YoY"
    },
    {
      icon: <Wind size={32} />,
      title: "Wind Power Adoption",
      value: `${animatedValues.windCapacity}%`,
      description: "Wind energy integration success rate",
      color: "#90EE90",
      trend: "+12% YoY"
    },
    {
      icon: <Leaf size={32} />,
      title: "Carbon Reduction",
      value: `${animatedValues.carbonReduction}%`,
      description: "CO2 emissions reduction achieved",
      color: "#4A90E2",
      trend: "+8% YoY"
    },
    {
      icon: <Zap size={32} />,
      title: "Energy Efficiency",
      value: `${animatedValues.energyEfficiency}%`,
      description: "Overall system efficiency improvement",
      color: "#2E7D32",
      trend: "+10% YoY"
    },
    {
      icon: <Users size={32} />,
      title: "Customer Satisfaction",
      value: `${animatedValues.customerSatisfaction}%`,
      description: "Client satisfaction and retention rate",
      color: "#FF8C00",
      trend: "+5% YoY"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Cost Savings",
      value: `${animatedValues.costSavings}%`,
      description: "Average cost reduction for clients",
      color: "#90EE90",
      trend: "+20% YoY"
    }
  ];

  const globalStats = [
    {
      number: "2.2 GW",
      label: "Total Renewable Capacity",
      icon: <Globe size={24} />,
      color: "#FF8C00"
    },
    {
      number: "500+",
      label: "Corporate Clients Served",
      icon: <Users size={24} />,
      color: "#90EE90"
    },
    {
      number: "15+",
      label: "Years of Excellence",
      icon: <TrendingUp size={24} />,
      color: "#4A90E2"
    },
    {
      number: "4",
      label: "Countries Operating",
      icon: <Globe size={24} />,
      color: "#2E7D32"
    }
  ];

  return (
    <section className="infographics">
      <div className="infographics-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Impact by the Numbers
          </h2>
          <p className="section-subtitle">
            Real data showing our commitment to renewable energy transformation
          </p>
        </motion.div>

        {/* Global Statistics */}
        <motion.div
          className="global-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {globalStats.map((stat, index) => (
            <motion.div
              key={index}
              className="global-stat-card"
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

        {/* Progress Charts */}
        <motion.div
          className="progress-charts"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="charts-grid">
            {infographicData.map((item, index) => (
              <motion.div
                key={index}
                className="chart-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="chart-header">
                  <div className="chart-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="chart-info">
                    <h3 className="chart-title">{item.title}</h3>
                    <span className="chart-trend">{item.trend}</span>
                  </div>
                </div>

                <div className="chart-value">{item.value}</div>
                <p className="chart-description">{item.description}</p>

                <div className="progress-bar-container">
                  <div 
                    className="progress-bar"
                    style={{ 
                      width: `${item.value}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Energy Mix Visualization */}
        <motion.div
          className="energy-mix"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="energy-mix-title">Our Energy Portfolio Mix</h3>
          <div className="energy-mix-chart">
            <div className="mix-segment solar" style={{ flex: 3 }}>
              <div className="segment-label">Solar Energy</div>
              <div className="segment-percentage">60%</div>
            </div>
            <div className="mix-segment wind" style={{ flex: 2 }}>
              <div className="segment-label">Wind Energy</div>
              <div className="segment-percentage">30%</div>
            </div>
            <div className="mix-segment hybrid" style={{ flex: 1 }}>
              <div className="segment-label">Hybrid</div>
              <div className="segment-percentage">10%</div>
            </div>
          </div>
        </motion.div>

        {/* Environmental Impact */}
        <motion.div
          className="environmental-impact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="impact-title">Environmental Impact</h3>
          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-number">2.5M</div>
              <div className="impact-label">Trees Planted Equivalent</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">1.8M</div>
              <div className="impact-label">Tons CO2 Avoided</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">450K</div>
              <div className="impact-label">Homes Powered</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">$2.1B</div>
              <div className="impact-label">Economic Value Created</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Infographics;
