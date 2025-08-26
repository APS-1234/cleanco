import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Zap, TrendingUp } from 'lucide-react';
import CBGAdvancedTechnology from './CBGAdvancedTechnology';
import './CBG.css';

const CBG = () => {
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

	const cbgSolutions = [
		{
			title: 'Waste to Energy',
			description: 'Convert agricultural waste, organic matter, and municipal waste into clean, renewable biogas through our advanced CBG technology.',
			icon: <Leaf size={24} />,
			    image: `${process.env.PUBLIC_URL}/images/Biogasification.jpg`
		},
		{
			title: 'Carbon Footprint Reduction',
			description: 'Significantly reduce your carbon footprint by replacing fossil fuels with clean biogas, contributing to a sustainable future.',
			icon: <Zap size={24} />,
			    image: `${process.env.PUBLIC_URL}/images/carbon_foot_print.jpg`
		},
		{
			title: 'Cost-Effective Energy',
			description: 'Generate cost-effective energy while managing waste efficiently, creating a circular economy that benefits both environment and economy.',
			icon: <TrendingUp size={24} />,
			    image: `${process.env.PUBLIC_URL}/images/cost_efficient_energy.jpg`
		},
		{
			title: 'Grid Integration',
			description: 'Seamlessly integrate CBG into existing energy infrastructure, providing reliable and consistent power supply to communities.',
			icon: <ArrowRight size={24} />,
			    image: `${process.env.PUBLIC_URL}/images/CBG_integration.jpg`
		}
	];

	return (
		<>
			{/* Hero Section with Biogas Plant Image */}
			<section className="cbg-hero-section">
				<div className="cbg-hero-container">
					<motion.div 
						className="cbg-hero-content"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
					>
						{/* Left Content - Text */}
						<motion.div className="cbg-hero-text" variants={textVariants}>
							<h1 className="cbg-hero-title">
								Clean Biogas for a 
								<span className="highlight-text"> Greener Future</span>
							</h1>
							<p className="cbg-hero-description">
								Cleanco Group is dedicated to providing sustainable energy solutions through our innovative CBG technology. 
								Convert waste into energy and reduce your carbon footprint with our reliable and efficient biogas plants.
							</p>
							<div className="cbg-hero-buttons">
								<motion.button
									className="learn-more-btn"
									whileHover={{
										scale: 1.05,
										transition: { duration: 0.2 }
									}}
									whileTap={{ scale: 0.95 }}
								>
									Learn More
								</motion.button>
								<motion.button
									className="our-projects-btn"
									whileHover={{
										scale: 1.05,
										transition: { duration: 0.2 }
									}}
									whileTap={{ scale: 0.95 }}
								>
									Our Projects
								</motion.button>
							</div>
						</motion.div>

						{/* Right Content - Image */}
						<motion.div 
							className="cbg-hero-image-wrapper"
							variants={imageVariants}
						>
							<div className="cbg-hero-image">
								        <img src={`${process.env.PUBLIC_URL}/images/CBG_NEW.png`} alt="Cleanco Biogas Plant" />
								<div className="image-overlay"></div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* CBG Solutions Grid */}
			<section className="cbg-solutions-section">
				<div className="cbg-solutions-container">
					<motion.div 
						className="cbg-solutions-content"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
					>
						<motion.div className="cbg-solutions-header" variants={textVariants}>
							<h2 className="cbg-solutions-title">Our CBG Solutions</h2>
							<p className="cbg-solutions-subtitle">
								Transforming waste into clean, renewable energy through advanced biogas technology
							</p>
						</motion.div>

						<motion.div 
							className="cbg-solutions-grid"
							variants={containerVariants}
						>
							{cbgSolutions.map((solution, index) => (
								<motion.article 
									key={solution.title} 
									className="cbg-solution-card"
									variants={textVariants}
									whileHover={{ 
										y: -8,
										scale: 1.02,
										transition: { 
											duration: 0.3,
											ease: [0.4, 0, 0.2, 1]
										}
									}}
								>
									<div className="cbg-solution-image-wrap">
										<img src={solution.image} alt={solution.title} className="cbg-solution-image" />
										<div className="cbg-solution-overlay">
											<div className="overlay-icon">
												{solution.icon}
											</div>
										</div>
									</div>
									<div className="cbg-solution-content">
										<h3 className="cbg-solution-title">{solution.title}</h3>
										<p className="cbg-solution-desc">{solution.description}</p>
										<motion.button 
											className="cbg-learn-more"
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
					</motion.div>
				</div>
			</section>

			{/* CBG Benefits Section */}
			<section className="cbg-benefits-section">
				<div className="cbg-benefits-container">
					<motion.div 
						className="cbg-benefits-content"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
					>
						<motion.div className="cbg-benefits-header" variants={textVariants}>
							<h2 className="cbg-benefits-title">Why Choose CBG?</h2>
							<p className="cbg-benefits-subtitle">
								Discover the advantages of compressed biogas for a sustainable energy future
							</p>
						</motion.div>

						<motion.div className="cbg-benefits-grid" variants={textVariants}>
							<motion.div 
								className="benefit-item"
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.3 }
								}}
							>
								<motion.div 
									className="benefit-icon"
									animate={{
										y: [0, -5, 0],
										rotate: [0, 5, -5, 0]
									}}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: "easeInOut"
									}}
								>
									🌱
								</motion.div>
								<h3>Environmental Impact</h3>
								<p>Reduce greenhouse gas emissions by up to 90% compared to fossil fuels</p>
							</motion.div>
							<motion.div 
								className="benefit-item"
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.3 }
								}}
							>
								<motion.div 
									className="benefit-icon"
									animate={{
										scale: [1, 1.1, 1],
										rotate: [0, 10, -10, 0]
									}}
									transition={{
										duration: 2.5,
										repeat: Infinity,
										ease: "easeInOut"
									}}
								>
									💰
								</motion.div>
								<h3>Cost Efficiency</h3>
								<p>Lower operational costs and reduced dependency on imported fuels</p>
							</motion.div>
							<motion.div 
								className="benefit-item"
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.3 }
								}}
							>
								<motion.div 
									className="benefit-icon"
									animate={{
										x: [0, 3, -3, 0],
										scale: [1, 1.2, 1]
									}}
									transition={{
										duration: 1.5,
										repeat: Infinity,
										ease: "easeInOut"
									}}
								>
									⚡
								</motion.div>
								<h3>Energy Security</h3>
								<p>Local energy production reduces reliance on external energy sources</p>
							</motion.div>
							<motion.div 
								className="benefit-item"
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.3 }
								}}
							>
								<motion.div 
									className="benefit-icon"
									animate={{
										rotate: [0, 360]
									}}
									transition={{
										duration: 4,
										repeat: Infinity,
										ease: "linear"
									}}
								>
									🔄
								</motion.div>
								<h3>Circular Economy</h3>
								<p>Transform waste into valuable energy, creating sustainable communities</p>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* CBG Advanced Technology Section */}
			<CBGAdvancedTechnology />
		</>
	);
};

export default CBG;
