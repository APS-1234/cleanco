import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './SundarSolarPark.css';

const SundarSolarPark = () => {
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
		<section className="sundar-solar-park-section">
			<div className="sundar-container">
				<motion.div 
					className="sundar-content"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					{/* Left Content */}
					<motion.div className="sundar-left-content" variants={itemVariants}>
						<h2 className="sundar-title">Sundar Solar Park</h2>
						
						<div className="sundar-specs">
							<div className="spec-item">
								<span className="spec-tag">#100 MW capacity</span>
							</div>
							<div className="spec-item">
								<span className="spec-tag">#Grid-connected</span>
							</div>
							<div className="spec-item">
								<span className="spec-tag">#Large-scale renewable energy</span>
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
					<motion.div className="sundar-right-content" variants={itemVariants}>
						<p className="sundar-description">
							Discover how Cleanco's solar projects are powering communities and industries, 
							with a focus on sustainability, efficiency, and cutting-edge technology.
						</p>
					</motion.div>
				</motion.div>

				{/* Main Image */}
				<motion.div 
					className="sundar-image-wrapper"
					variants={imageVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<img
						        src={`${process.env.PUBLIC_URL}/images/cleanco_6.png`}
						alt="Sundar Solar Park - Large-scale solar farm with thousands of solar panels"
						className="sundar-image"
					/>
					<div className="image-overlay">
						<div className="overlay-content">
							<h3>Clean Energy Generation</h3>
							<p>Powering thousands of homes with renewable solar energy</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default SundarSolarPark;
