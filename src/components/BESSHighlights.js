import React from 'react';
import { motion } from 'framer-motion';
import './BESSHighlights.css';

const BESSHighlights = () => {
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

	return (
		<section className="bess-highlights-section">
			<div className="bess-highlights-container">
				<motion.div 
					className="bess-highlights-content"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
				>
					{/* Text Content */}
					<motion.div className="bess-highlights-text" variants={textVariants}>
						<p className="bess-highlights-subheading">OUR LATEST BESS HIGHLIGHTS</p>
						<h2 className="bess-highlights-title">Transforming Energy Storage Solutions</h2>
						<p className="bess-highlights-description">
							Discover how Cleanco's innovative battery storage projects are revolutionizing 
							renewable energy integration and grid stability across India.
						</p>
					</motion.div>

					{/* Main Image */}
					<motion.div 
						className="bess-highlights-image-wrapper"
						variants={imageVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
					>
						<img
							src="/images/cleanco_12.png"
							alt="Cleanco BESS Facility - Industrial battery energy storage systems under blue sky"
							className="bess-highlights-image"
						/>
						<div className="bess-highlights-overlay">
							<div className="overlay-content">
								<h3>Advanced Energy Storage</h3>
								<p>State-of-the-art BESS technology powering India's renewable energy future</p>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default BESSHighlights;
