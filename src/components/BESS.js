import React from 'react';
import { motion } from 'framer-motion';
import BESSHighlights from './BESSHighlights';
import BESSFeaturedProjects from './BESSFeaturedProjects';
import BESSClientTestimonials from './BESSClientTestimonials';
import './BESS.css';

const bessSolutions = [
	{
		title: 'Grid Stabilization',
		description:
			'Our BESS solutions provide rapid response to grid fluctuations, ensuring a stable and reliable power supply for homes and businesses.',
		image: '/images/cleanco_8.png'
	},
	{
		title: 'Renewable Integration',
		description:
			"Cleanco's BESS enables efficient storage of solar and wind energy, maximizing the use of renewable resources and reducing reliance on fossil fuels.",
		image: '/images/cleanco_9.png'
	},
	{
		title: 'Peak Shaving',
		description:
			'By storing energy during off-peak hours and releasing it during peak demand, our BESS solutions reduce energy costs for consumers and businesses.',
		image: '/images/cleanco_10.png'
	},
	{
		title: 'Energy Independence',
		description:
			"Cleanco's BESS empowers communities and businesses to generate and store their own energy, reducing dependence on centralized power grids and enhancing energy security.",
		image: '/images/cleanco_11.png'
	}
];

const BESS = () => {
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

	const cardVariants = {
		hidden: { 
			opacity: 0, 
			y: 50,
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

	return (
		<>
			<section className="bess-section">
				<div className="bess-container">
					<motion.div 
						className="bess-grid"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
					>
						{bessSolutions.map((item, index) => (
							<motion.article 
								key={item.title} 
								className="bess-card"
								variants={cardVariants}
								whileHover={{ 
									y: -12,
									scale: 1.03,
									rotateY: 5,
									transition: { 
										duration: 0.4,
										ease: [0.4, 0, 0.2, 1]
									}
								}}
							>
								<div className="bess-image-wrap">
									<img src={item.image} alt={item.title} className="bess-image" />
									<div className="bess-image-overlay">
										<div className="overlay-content">
											<h4>{item.title}</h4>
											<p>Learn More</p>
										</div>
									</div>
								</div>
								<div className="bess-content">
									<h3 className="bess-title">{item.title}</h3>
									<p className="bess-desc">{item.description}</p>
									<motion.button 
										className="bess-learn-more"
										whileHover={{ 
											scale: 1.05,
											backgroundColor: '#059669',
											transition: { duration: 0.2 }
										}}
										whileTap={{ scale: 0.95 }}
									>
										Learn More
									</motion.button>
								</div>
							</motion.article>
						))}
					</motion.div>
				</div>
			</section>
			<BESSHighlights />
			<BESSFeaturedProjects />
			<BESSClientTestimonials />
		</>
	);
};

export default BESS;
