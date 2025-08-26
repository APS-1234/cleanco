import React from 'react';
import { motion } from 'framer-motion';
import './FeaturedSolarProjects.css';

const FeaturedSolarProjects = () => {
	// Animation variants for the text content
	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	};

	// Animation variants for the image
	const imageVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: 'easeOut',
				delay: 0.3, // Delay image animation slightly after text
			},
		},
	};

	return (
		<section className="featured-projects-section">
			<div className="featured-projects-container">
				<motion.div
					className="featured-projects-text-content"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					variants={textVariants}
				>
					<p className="featured-projects-subheading">OUR SOLAR PORTFOLIO</p>
					<h2 className="featured-projects-heading">Featured Solar Projects</h2>
					<p className="featured-projects-description">
						Explore our successful solar installations that demonstrate our commitment to clean energy and innovative solutions across India.
						Our projects range from large-scale utility installations to bespoke commercial and residential systems,
						each designed to maximize energy efficiency and contribute to a sustainable future.
					</p>
				</motion.div>

				<motion.div
					className="featured-projects-image-wrapper"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					variants={imageVariants}
				>
					<img
						        src={`${process.env.PUBLIC_URL}/images/cleanco_5.png`}
						alt="Team installing solar panels on a rooftop"
						className="featured-projects-image"
					/>
				</motion.div>

				{/* Additional Information Section */}
				<motion.div
					className="additional-info-section"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={textVariants}
				>
					<div className="info-grid">
						<div className="info-card">
							<h3>Project Scale</h3>
							<p>From 10kW residential systems to 100MW utility-scale solar farms, we handle projects of all sizes with precision and expertise.</p>
						</div>
						<div className="info-card">
							<h3>Technology</h3>
							<p>Utilizing cutting-edge solar panels, smart inverters, and advanced monitoring systems for optimal performance and reliability.</p>
						</div>
						<div className="info-card">
							<h3>Sustainability Impact</h3>
							<p>Our projects collectively generate over 500MW of clean energy, reducing carbon emissions by 750,000 tons annually.</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default FeaturedSolarProjects;
