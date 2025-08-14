import React from 'react';
import { motion } from 'framer-motion';
import CleancoSection from './AboutUs/CleancoSection';
import ProjectsSection from './AboutUs/ProjectsSection';
import PartnershipsSection from './AboutUs/PartnershipsSection';
import './AboutUs.css';

const AboutUs = () => {
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

	return (
		<>
			{/* Hero Section */}
			<section className="about-us-hero-section">
				<div className="about-us-hero-container">
					<motion.div 
						className="about-us-hero-content"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
					>
						<motion.div className="about-us-hero-text" variants={textVariants}>
							<h1 className="about-us-hero-title">
								About <span className="highlight-text">Cleanco Group</span>
							</h1>
							<p className="about-us-hero-description">
								Leading the transition to sustainable energy solutions through innovation, 
								excellence, and unwavering commitment to environmental stewardship.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Cleanco Section */}
			<CleancoSection />

			{/* Projects Section */}
			<ProjectsSection />

			{/* Partnerships Section */}
			<PartnershipsSection />
		</>
	);
};

export default AboutUs;
