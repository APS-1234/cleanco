import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './GreenStorageBESS.css';

const GreenStorageBESS = () => {
	// Animation variants for staggered entrance
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1
			}
		}
	};

	const itemVariants = {
		hidden: { 
			opacity: 0, 
			y: 30,
			scale: 0.95
		},
		visible: { 
			opacity: 1, 
			y: 0,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: [0.4, 0, 0.2, 1]
			}
		}
	};

	const imageVariants = {
		hidden: { 
			opacity: 0, 
			scale: 1.1
		},
		visible: { 
			opacity: 1, 
			scale: 1,
			transition: {
				duration: 0.8,
				ease: [0.4, 0, 0.2, 1]
			}
		}
	};

	return (
		<section className="greenstorage-bess-section">
			<div className="greenstorage-container">
				<motion.div 
					className="greenstorage-content"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					{/* Left Content */}
					<motion.div className="greenstorage-left-content" variants={itemVariants}>
						<h2 className="greenstorage-title">GreenStorage BESS Facility</h2>
						
						<div className="greenstorage-specs">
							<div className="spec-item">
								<span className="spec-tag">#50 MWh storage capacity</span>
							</div>
							<div className="spec-item">
								<span className="spec-tag">#Enhances grid stability</span>
							</div>
							<div className="spec-item">
								<span className="spec-tag">#Supports renewable integration</span>
							</div>
						</div>

						<motion.button 
							className="view-details-btn"
							whileHover={{ 
								scale: 1.05,
								transition: { duration: 0.2 }
							}}
							whileTap={{ scale: 0.95 }}
						>
							<span>View Details</span>
							<ArrowRight size={16} />
						</motion.button>
					</motion.div>

					{/* Right Content */}
					<motion.div className="greenstorage-right-content" variants={itemVariants}>
						<p className="greenstorage-description">
							Our portfolio showcases projects that exemplify our expertise in deploying reliable, 
							scalable, and sustainable solar energy solutions for diverse needs.
						</p>
					</motion.div>
				</motion.div>

				{/* Banner Image */}
				<motion.div 
					className="greenstorage-banner-wrapper"
					variants={imageVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<img
						src="/images/cleanco_7.png"
						alt="GreenStorage BESS Facility - Solar panels and green fields"
						className="greenstorage-banner-image"
					/>
					<div className="banner-overlay">
						<div className="overlay-content">
							<h3>Energy Storage Solutions</h3>
							<p>Advanced battery storage for grid stability and renewable integration</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default GreenStorageBESS;
