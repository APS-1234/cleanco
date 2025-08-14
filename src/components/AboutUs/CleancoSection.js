import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Target } from 'lucide-react';
import './CleancoSection.css';

const CleancoSection = () => {
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

	const statsData = [
		{
			icon: <Award size={24} />,
			number: "15+",
			label: "Years of Excellence",
			description: "Leading renewable energy innovation"
		},
		{
			icon: <Users size={24} />,
			number: "500+",
			label: "Team Members",
			description: "Expert professionals across India"
		},
		{
			icon: <Globe size={24} />,
			number: "25+",
			label: "States Covered",
			description: "Pan-India renewable energy presence"
		},
		{
			icon: <Target size={24} />,
			number: "1000+",
			label: "Projects Completed",
			description: "Successful sustainable energy solutions"
		}
	];

	return (
		<section className="cleanco-section">
			<div className="cleanco-container">
				<motion.div 
					className="cleanco-content"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
				>
					{/* Left Content - Text */}
					<motion.div className="cleanco-text" variants={textVariants}>
						<div className="content-header">
							<h2 className="section-title">
								<span className="highlight-text">Cleanco Group</span>
							</h2>
							<h3 className="section-subtitle">Pioneering Sustainable Energy Solutions</h3>
						</div>

						<div className="content-description">
							<p className="main-description">
								Founded in 2008, Cleanco Group has emerged as a leading force in India's renewable energy sector. 
								We specialize in Solar, BESS (Battery Energy Storage Systems), and CBG (Compressed Biogas) technologies, 
								delivering innovative solutions that drive the transition to a sustainable energy future.
							</p>
							<p className="secondary-description">
								Our mission is to accelerate the adoption of clean energy technologies while creating economic value 
								and environmental benefits for communities across India. With a team of over 500 experts and presence 
								in 25+ states, we are committed to excellence, innovation, and environmental stewardship.
							</p>
						</div>

						<div className="company-values">
							<div className="value-item">
								<div className="value-icon">🌱</div>
								<div className="value-content">
									<h4>Environmental Stewardship</h4>
									<p>Committed to reducing carbon footprint and promoting sustainable practices</p>
								</div>
							</div>
							<div className="value-item">
								<div className="value-icon">💡</div>
								<div className="value-content">
									<h4>Innovation Excellence</h4>
									<p>Continuously developing cutting-edge renewable energy technologies</p>
								</div>
							</div>
							<div className="value-item">
								<div className="value-icon">🤝</div>
								<div className="value-content">
									<h4>Community Impact</h4>
									<p>Creating positive social and economic impact in local communities</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right Content - Image and Stats */}
					<motion.div className="cleanco-visual" variants={imageVariants}>
						<div className="company-image">
							<img src="/images/cleanco_1.png" alt="Cleanco Group Headquarters" />
							<div className="image-overlay"></div>
						</div>

						<div className="stats-grid">
							{statsData.map((stat, index) => (
								<motion.div 
									key={stat.label}
									className="stat-card"
									variants={textVariants}
									whileHover={{
										scale: 1.05,
										transition: { duration: 0.3 }
									}}
								>
									<div className="stat-icon">
										{stat.icon}
									</div>
									<div className="stat-content">
										<span className="stat-number">{stat.number}</span>
										<span className="stat-label">{stat.label}</span>
										<p className="stat-description">{stat.description}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default CleancoSection;
