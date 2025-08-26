import React from 'react';
import { motion } from 'framer-motion';
import './SolutionsGrid.css';

const solutions = [
	{
		title: 'Solar Power Systems',
		description:
			"Harnessing the sun's energy, our solar solutions provide clean electricity for diverse applications, reducing costs and supporting sustainability.",
		    image: `${process.env.PUBLIC_URL}/images/cleanco_2.png`
	},
	{
		title: 'BESS Solutions',
		description:
			'Our BESS solutions store renewable energy, ensuring availability during peak demand, optimizing energy use, and enhancing grid stability.',
		    image: `${process.env.PUBLIC_URL}/images/cleanco_3.png`
	},
	{
		title: 'CBG Solutions',
		description:
			'Converting organic waste into renewable biogas, our CBG solutions reduce pollution, support rural development, and contribute to energy diversification.',
		    image: `${process.env.PUBLIC_URL}/images/cleanco_4.png`
	},
	{
		title: 'Custom Solar Projects',
		description:
			'We design, install, and maintain customized solar projects tailored to client needs, providing reliable and sustainable energy solutions.',
		    image: `${process.env.PUBLIC_URL}/images/cleanco_5.png`
	}
];

const SolutionsGrid = () => {
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
		<section className="solutions-grid">
			<div className="solutions-container">
				<motion.div 
					className="solutions-grid-inner"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					{solutions.map((item, index) => (
						<motion.article 
							key={item.title} 
							className="solution-card"
							variants={cardVariants}
							whileHover={{ 
								y: -12,
								transition: { duration: 0.3 }
							}}
						>
							<div className="solution-image-wrap">
								<img src={item.image} alt={item.title} className="solution-image" />
							</div>
							<h3 className="solution-title">{item.title}</h3>
							<p className="solution-desc">{item.description}</p>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default SolutionsGrid;
