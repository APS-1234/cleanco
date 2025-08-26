import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, TrendingUp, CheckCircle } from 'lucide-react';
import './CBGAdvancedTechnology.css';

const CBGAdvancedTechnology = () => {
	// State for counting animation
	const [counts, setCounts] = useState({
		emission: 1,
		operation: 1,
		renewable: 1
	});

	// Animation variants for staggered entrance
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2
			}
		}
	};

	const textVariants = {
		hidden: { 
			opacity: 0, 
			y: 40,
			scale: 0.95
		},
		visible: { 
			opacity: 1, 
			y: 0,
			scale: 1,
			transition: {
				duration: 0.7,
				ease: [0.4, 0, 0.2, 1]
			}
		}
	};

	const imageVariants = {
		hidden: { 
			opacity: 0, 
			scale: 1.1,
			rotateY: 10
		},
		visible: { 
			opacity: 1, 
			scale: 1,
			rotateY: 0,
			transition: {
				duration: 0.9,
				ease: [0.4, 0, 0.2, 1]
			}
		}
	};

	const featureItems = [
		{
			icon: <Leaf size={20} />,
			title: "Reduced Emissions",
			description: "Significantly lowers greenhouse gas emissions compared to fossil fuels."
		},
		{
			icon: <Zap size={20} />,
			title: "Waste Reduction",
			description: "Converts organic waste into valuable renewable energy."
		},
		{
			icon: <TrendingUp size={20} />,
			title: "Sustainable Fuel",
			description: "Provides a clean and sustainable alternative to traditional fuels."
		}
	];

	// State to track if counting has started
	const [hasStartedCounting, setHasStartedCounting] = useState(false);

	// Counting animation effect
	useEffect(() => {
		if (!hasStartedCounting) return;

		const duration = 2000; // 2 seconds
		const steps = 60; // 60 steps for smooth animation
		const stepDuration = duration / steps;

		const emissionTarget = 90;
		const operationTarget = 24;
		const renewableTarget = 100;

		let currentStep = 0;

		const interval = setInterval(() => {
			currentStep++;
			
			const progress = currentStep / steps;
			const easeOutQuart = 1 - Math.pow(1 - progress, 4); // Smooth easing

			setCounts({
				emission: Math.round(emissionTarget * easeOutQuart),
				operation: Math.round(operationTarget * easeOutQuart),
				renewable: Math.round(renewableTarget * easeOutQuart)
			});

			if (currentStep >= steps) {
				clearInterval(interval);
			}
		}, stepDuration);

		return () => clearInterval(interval);
	}, [hasStartedCounting]);

	return (
		<section className="cbg-advanced-technology-section">
			<div className="cbg-advanced-technology-container">
				<motion.div 
					className="cbg-advanced-technology-content"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					onAnimationStart={() => {
						// Start counting when the section comes into view
						setTimeout(() => setHasStartedCounting(true), 500);
					}}
				>
					{/* Left Content - Image */}
					<motion.div 
						className="cbg-advanced-technology-image-wrapper"
						variants={imageVariants}
					>
						<div className="cbg-advanced-technology-image">
							        <img src={`${process.env.PUBLIC_URL}/images/ad_cbg.jpg`} alt="Cleanco Advanced CBG Technology Facility" />
							<div className="image-overlay"></div>
							<div className="image-badge">
								<CheckCircle size={24} />
								<span>Advanced Technology</span>
							</div>
						</div>
					</motion.div>

					{/* Right Content - Text */}
					<motion.div className="cbg-advanced-technology-text" variants={textVariants}>
						<div className="content-header">
							<h2 className="section-title">
								<span className="highlight-text">Advanced</span> CBG Technology
							</h2>
							<h3 className="section-subtitle">for a Greener Tomorrow</h3>
						</div>

						<div className="content-description">
							<p className="main-description">
								Cleanco Group's CBG technology transforms organic waste into valuable renewable energy. 
								Our advanced anaerobic digestion process ensures maximum biogas yield, reducing landfill 
								waste and minimizing greenhouse gas emissions. We are committed to providing sustainable 
								solutions that benefit both the environment and the economy.
							</p>
						</div>

						<div className="features-list">
							{featureItems.map((feature, index) => (
								<motion.div 
									key={feature.title}
									className="feature-item"
									variants={textVariants}
									whileHover={{
										x: 5,
										transition: { duration: 0.3 }
									}}
								>
									<div className="feature-icon">
										{feature.icon}
									</div>
									<div className="feature-content">
										<h4 className="feature-title">{feature.title}</h4>
										<p className="feature-description">{feature.description}</p>
									</div>
								</motion.div>
							))}
						</div>

						<motion.div 
							className="technology-stats"
							variants={textVariants}
						>
							<div className="stat-item">
								<span className="stat-number">{counts.emission}%</span>
								<span className="stat-label">Emission Reduction</span>
							</div>
							<div className="stat-item">
								<span className="stat-number">{counts.operation}/7</span>
								<span className="stat-label">Continuous Operation</span>
							</div>
							<div className="stat-item">
								<span className="stat-number">{counts.renewable}%</span>
								<span className="stat-label">Renewable Energy</span>
							</div>
						</motion.div>

						<motion.button
							className="learn-more-advanced-btn"
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.2 }
							}}
							whileTap={{ scale: 0.95 }}
						>
							Learn More About Our Technology
						</motion.button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default CBGAdvancedTechnology;
