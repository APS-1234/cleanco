import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './BESSClientTestimonials.css';

const BESSClientTestimonials = () => {
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

	const testimonialVariants = {
		hidden: { 
			opacity: 0, 
			y: 30,
			scale: 0.9
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

	const testimonials = [
		{
			source: 'Industrial Park Client',
			quote: "Cleanco's BESS system has significantly improved our energy reliability and reduced costs.",
			rating: 5,
			project: 'GreenStorage BESS Facility'
		},
		{
			source: 'Local Community',
			quote: "The EcoBiogas Plant has transformed our village, providing clean energy and new opportunities.",
			rating: 5,
			project: 'EcoBiogas Plant'
		},
		{
			source: 'Grid Operator',
			quote: "GreenStorage's project has set a new standard for grid stability and renewable integration.",
			rating: 5,
			project: 'Grid Integration Project'
		}
	];

	return (
		<section className="bess-client-testimonials-section">
			<div className="bess-client-testimonials-container">
				<motion.div 
					className="bess-client-testimonials-content"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
				>
					{/* Left Content - Testimonials */}
					<motion.div className="bess-client-testimonials-text" variants={textVariants}>
						<h2 className="bess-client-testimonials-title">Client Testimonials</h2>
						
						<div className="bess-client-testimonials-list">
							{testimonials.map((testimonial, index) => (
								<motion.div 
									key={testimonial.source} 
									className="testimonial-item"
									variants={testimonialVariants}
									whileHover={{
										y: -5,
										transition: { duration: 0.3 }
									}}
								>
									<span className="testimonial-bullet">#</span>
									<div className="testimonial-content">
										<div className="testimonial-header">
											<h3 className="testimonial-source">{testimonial.source}:</h3>
											<div className="testimonial-rating">
												{[...Array(testimonial.rating)].map((_, i) => (
													<Star key={i} size={16} className="star-icon" />
												))}
											</div>
										</div>
										<div className="testimonial-quote-wrapper">
											<Quote size={20} className="quote-icon" />
											<p className="testimonial-quote">"{testimonial.quote}"</p>
										</div>
										<div className="testimonial-project">
											<span className="project-tag">{testimonial.project}</span>
										</div>
									</div>
								</motion.div>
							))}
						</div>

						<motion.div 
							className="testimonials-stats"
							variants={testimonialVariants}
						>
							<div className="stat-item">
								<span className="stat-number">98%</span>
								<span className="stat-label">Client Satisfaction</span>
							</div>
							<div className="stat-item">
								<span className="stat-number">50+</span>
								<span className="stat-label">Projects Completed</span>
							</div>
							<div className="stat-item">
								<span className="stat-number">4.9</span>
								<span className="stat-label">Average Rating</span>
							</div>
						</motion.div>
					</motion.div>

					{/* Right Content - Description */}
					<motion.div className="bess-client-testimonials-description" variants={textVariants}>
						<div className="description-content">
							<h3 className="description-title">Trusted by Industry Leaders</h3>
							<p className="description-text">
								Our clients praise Cleanco's innovative BESS solutions for their reliability, 
								efficiency, and positive environmental impact, reaffirming our position as a 
								leader in renewable energy storage in India.
							</p>
							<div className="description-highlights">
								<div className="highlight-item">
									<div className="highlight-icon">⚡</div>
									<span>Reliable Energy Solutions</span>
								</div>
								<div className="highlight-item">
									<div className="highlight-icon">🌱</div>
									<span>Environmental Impact</span>
								</div>
								<div className="highlight-item">
									<div className="highlight-icon">💰</div>
									<span>Cost Efficiency</span>
								</div>
							</div>
							<motion.button
								className="view-all-testimonials-btn"
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.2 }
								}}
								whileTap={{ scale: 0.95 }}
							>
								View All Testimonials
							</motion.button>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default BESSClientTestimonials;
