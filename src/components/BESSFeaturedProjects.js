import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './BESSFeaturedProjects.css';

const BESSFeaturedProjects = () => {
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

	const projects = [
		{
			name: 'GreenStorage BESS Facility',
			description: 'A 50 MWh system enhancing grid stability and renewable energy integration for a major industrial park.'
		},
		{
			name: 'EcoBiogas Plant',
			description: 'Rural biogas project converting agricultural waste into renewable energy, supporting local communities.'
		},
		{
			name: 'Sundar Solar Park',
			description: '100 MW solar power plant supplying clean energy to the grid, demonstrating large-scale project expertise.'
		}
	];

	return (
		<section className="bess-featured-projects-section">
			<div className="bess-featured-projects-container">
				<motion.div 
					className="bess-featured-projects-content"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
				>
					{/* Left Content - Text */}
					<motion.div className="bess-featured-projects-text" variants={textVariants}>
						<h2 className="bess-featured-projects-title">Featured Project</h2>
						
						<div className="bess-featured-projects-list">
							{projects.map((project, index) => (
								<div key={project.name} className="project-item">
									<span className="project-bullet">#</span>
									<div className="project-content">
										<h3 className="project-name">{project.name}</h3>
										<p className="project-description">{project.description}</p>
									</div>
								</div>
							))}
						</div>

						<motion.button
							className="view-projects-btn"
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.2 }
							}}
							whileTap={{ scale: 0.95 }}
						>
							<span>View Projects</span>
							<ArrowRight size={16} />
						</motion.button>
					</motion.div>

					{/* Right Content - Description */}
					<motion.div className="bess-featured-projects-description" variants={textVariants}>
						<p>
							Explore our portfolio of successful BESS projects that demonstrate Cleanco's leadership 
							in renewable energy storage solutions, with proven benefits in efficiency, sustainability, 
							and client satisfaction.
						</p>
					</motion.div>
				</motion.div>

				{/* Digital Dashboard Display */}
				<motion.div 
					className="bess-dashboard-wrapper"
					variants={imageVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
				>
					<div className="dashboard-screen">
						<div className="dashboard-header">
							<div className="dashboard-brand">Kentler</div>
							<div className="dashboard-sections">
								<span className="dashboard-section">Setory Bank</span>
								<span className="dashboard-section">Eneros</span>
							</div>
						</div>
						
						<div className="dashboard-content">
							<div className="dashboard-panel left-panel">
								<div className="chart-container">
									<div className="line-chart">
										<div className="chart-line"></div>
										<div className="chart-points">
											<div className="chart-point"></div>
											<div className="chart-point"></div>
											<div className="chart-point"></div>
											<div className="chart-point"></div>
										</div>
									</div>
									<div className="chart-axis">
										<span className="axis-value">100</span>
									</div>
								</div>
								<div className="data-values">
									<span className="data-number red">2</span>
									<span className="data-number red">4</span>
								</div>
							</div>

							<div className="dashboard-panel center-panel">
								<div className="center-icon">
									<span className="icon-number">51</span>
								</div>
								<div className="center-data">
									<div className="main-values">
										<span className="main-value">5 1182</span>
										<span className="main-value">3 1228</span>
									</div>
									<div className="secondary-values">
										<span className="secondary-value green">169</span>
										<span className="secondary-value green">1590</span>
									</div>
									<div className="battery-indicator">
										<div className="battery-icon"></div>
									</div>
								</div>
							</div>

							<div className="dashboard-panel right-panel">
								<div className="bar-chart">
									<div className="chart-bars">
										<div className="chart-bar green"></div>
										<div className="chart-bar orange"></div>
										<div className="chart-bar green"></div>
										<div className="chart-bar orange high"></div>
										<div className="chart-bar green"></div>
										<div className="chart-bar orange"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="dashboard-indicators">
							<div className="indicator-dot"></div>
							<div className="indicator-dot"></div>
							<div className="indicator-dot"></div>
							<div className="indicator-dot"></div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default BESSFeaturedProjects;
