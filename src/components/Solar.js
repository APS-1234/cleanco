import React from 'react';
import { motion } from 'framer-motion';
import FeaturedSolarProjects from './FeaturedSolarProjects';
import SundarSolarPark from './SundarSolarPark';
import GreenStorageBESS from './GreenStorageBESS';
import './Solar.css';

const solarSolutions = [
	{
		title: 'Large-Scale Solar Farms',
		description:
			"Cleanco excels in developing and managing large-scale solar farms, contributing significantly to India's renewable energy capacity and sustainable energy goals.",
		image: '/images/cleanco_1.png'
	},
	{
		title: 'Commercial Rooftop Installations',
		description:
			'We provide customized rooftop solar solutions for businesses, reducing their carbon footprint and energy costs while promoting sustainable practices in urban environments.',
		image: '/images/cleanco_2.png'
	},
	{
		title: 'Rural Electrification Projects',
		description:
			'Cleanco is dedicated to bringing clean, reliable solar power to rural communities, improving quality of life and fostering economic development in underserved areas.',
		image: '/images/cleanco_3.png'
	},
	{
		title: 'Solar + BESS Integration',
		description:
			'Our integrated solar and BESS solutions ensure a stable and continuous power supply, maximizing the benefits of renewable energy and enhancing grid resilience.',
		image: '/images/cleanco_4.png'
	}
];

const Solar = () => {
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
			<section className="solar-section">
				<div className="solar-container">
					<motion.div 
						className="solar-grid"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
					>
						{solarSolutions.map((item, index) => (
							<motion.article 
								key={item.title} 
								className="solar-card"
								variants={cardVariants}
								whileHover={{ 
									y: -8,
									transition: { duration: 0.3 }
								}}
							>
								<div className="solar-image-wrap">
									<img src={item.image} alt={item.title} className="solar-image" />
								</div>
								<h3 className="solar-title">{item.title}</h3>
								<p className="solar-desc">{item.description}</p>
							</motion.article>
						))}
					</motion.div>
				</div>
			</section>
			<FeaturedSolarProjects />
			<SundarSolarPark />
			<GreenStorageBESS />
		</>
	);
};

export default Solar;
