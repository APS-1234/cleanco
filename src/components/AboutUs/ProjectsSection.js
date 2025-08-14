import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, TrendingUp } from 'lucide-react';
import './ProjectsSection.css';

const ProjectsSection = () => {
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



	const featuredProjects = [
		{
			title: "Sundar Solar Park",
			location: "Rajasthan, India",
			capacity: "500 MW",
			completion: "2023",
			description: "One of India's largest solar parks, generating clean energy for over 200,000 households.",
			image: "/images/cleanco_5.png",
			stats: {
				area: "2,500 acres",
				households: "200,000+",
				emissions: "450,000 tons CO2/year"
			}
		},
		{
			title: "GreenStorage BESS Facility",
			location: "Maharashtra, India",
			capacity: "100 MWh",
			completion: "2023",
			description: "Advanced battery energy storage system providing grid stability and renewable integration.",
			image: "/images/cleanco_12.png",
			stats: {
				power: "50 MW",
				duration: "2 hours",
				efficiency: "95%"
			}
		},
		{
			title: "EcoBiogas Plant",
			location: "Punjab, India",
			capacity: "25,000 Nm³/day",
			completion: "2022",
			description: "State-of-the-art CBG facility converting agricultural waste into clean biogas.",
			image: "/images/CBG.jpg",
			stats: {
				waste: "100 tons/day",
				biogas: "25,000 Nm³",
				fertilizer: "50 tons/day"
			}
		}
	];

	return (
		<section className="projects-section">
			<div className="projects-container">
				<motion.div 
					className="projects-content"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
				>
					{/* Section Header */}
					<motion.div className="projects-header" variants={textVariants}>
						<h2 className="section-title">
							Our <span className="highlight-text">Featured Projects</span>
						</h2>
						<p className="section-subtitle">
							Showcasing our commitment to sustainable energy solutions across India
						</p>
					</motion.div>

					{/* Projects Grid */}
					<motion.div className="projects-grid" variants={containerVariants}>
						{featuredProjects.map((project, index) => (
							<motion.article 
								key={project.title}
								className="project-card"
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
								<div className="project-image-wrap">
									<img src={project.image} alt={project.title} className="project-image" />
									<div className="project-overlay">
										<div className="project-badge">
											<span>{project.capacity}</span>
										</div>
									</div>
								</div>
								
								<div className="project-content">
									<div className="project-header">
										<h3 className="project-title">{project.title}</h3>
										<div className="project-meta">
											<div className="meta-item">
												<MapPin size={16} />
												<span>{project.location}</span>
											</div>
											<div className="meta-item">
												<Calendar size={16} />
												<span>{project.completion}</span>
											</div>
										</div>
									</div>
									
									<p className="project-description">{project.description}</p>
									
									<div className="project-stats">
										{Object.entries(project.stats).map(([key, value]) => (
											<div key={key} className="stat-item">
												<span className="stat-value">{value}</span>
												<span className="stat-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
											</div>
										))}
									</div>
									
									<motion.button 
										className="project-learn-more"
										whileHover={{ 
											scale: 1.05,
											backgroundColor: '#059669',
											transition: { duration: 0.2 }
										}}
										whileTap={{ scale: 0.95 }}
									>
										View Project Details
									</motion.button>
								</div>
							</motion.article>
						))}
					</motion.div>

					{/* Project Statistics */}
					<motion.div className="project-statistics" variants={textVariants}>
						<div className="stats-header">
							<h3>Project Impact</h3>
							<p>Our projects have created significant positive impact across India</p>
						</div>
						
						<div className="stats-grid">
							<motion.div 
								className="impact-stat"
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.3 }
								}}
							>
								<div className="stat-icon">
									<TrendingUp size={24} />
								</div>
								<div className="stat-content">
									<span className="stat-number">1000+</span>
									<span className="stat-label">Projects Completed</span>
								</div>
							</motion.div>
							
							<motion.div 
								className="impact-stat"
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.3 }
								}}
							>
								<div className="stat-icon">
									<Users size={24} />
								</div>
								<div className="stat-content">
									<span className="stat-number">2M+</span>
									<span className="stat-label">Lives Impacted</span>
								</div>
							</motion.div>
							
							<motion.div 
								className="impact-stat"
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.3 }
								}}
							>
								<div className="stat-icon">
									<MapPin size={24} />
								</div>
								<div className="stat-content">
									<span className="stat-number">25+</span>
									<span className="stat-label">States Covered</span>
								</div>
							</motion.div>
							
							<motion.div 
								className="impact-stat"
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.3 }
								}}
							>
								<div className="stat-icon">
									<Calendar size={24} />
								</div>
								<div className="stat-content">
									<span className="stat-number">15+</span>
									<span className="stat-label">Years Experience</span>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ProjectsSection;
