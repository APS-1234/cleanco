import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award, Building2 } from 'lucide-react';
import './PartnershipsSection.css';

const PartnershipsSection = () => {
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



	const partnershipCategories = [
		{
			title: "Government Partnerships",
			description: "Collaborating with central and state governments to accelerate renewable energy adoption across India.",
			icon: <Award size={24} />,
			partners: [
				"Ministry of New and Renewable Energy (MNRE)",
				"State Renewable Energy Development Agencies",
				"National Solar Mission",
				"Smart Cities Mission"
			],
			image: "/images/cleanco_2.png"
		},
		{
			title: "Technology Partners",
			description: "Strategic alliances with leading technology providers to deliver cutting-edge renewable energy solutions.",
			icon: <Globe size={24} />,
			partners: [
				"Siemens Energy",
				"ABB Power Grids",
				"Schneider Electric",
				"GE Renewable Energy"
			],
			image: "/images/cleanco_3.png"
		},
		{
			title: "Financial Institutions",
			description: "Partnerships with leading financial institutions to provide innovative financing solutions for renewable projects.",
			        icon: <Building2 size={24} />,
			partners: [
				"State Bank of India",
				"Power Finance Corporation",
				"Indian Renewable Energy Development Agency",
				"International Finance Corporation"
			],
			image: "/images/cleanco_4.png"
		}
	];

	const keyPartnerships = [
		{
			name: "Siemens Energy",
			type: "Technology Partner",
			description: "Collaborating on advanced grid integration and energy management solutions.",
			logo: "/images/cleanco_1.png"
		},
		{
			name: "MNRE",
			type: "Government Partner",
			description: "Working together to achieve India's renewable energy targets and sustainable development goals.",
			logo: "/images/cleanco_5.png"
		},
		{
			name: "State Bank of India",
			type: "Financial Partner",
			description: "Providing innovative financing solutions for large-scale renewable energy projects.",
			logo: "/images/cleanco_6.png"
		}
	];

	return (
		<section className="partnerships-section">
			<div className="partnerships-container">
				<motion.div 
					className="partnerships-content"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
				>
					{/* Section Header */}
					<motion.div className="partnerships-header" variants={textVariants}>
						<h2 className="section-title">
							Strategic <span className="highlight-text">Partnerships</span>
						</h2>
						<p className="section-subtitle">
							Building strong alliances to accelerate India's renewable energy transition
						</p>
					</motion.div>

					{/* Partnership Categories */}
					<motion.div className="partnership-categories" variants={containerVariants}>
						{partnershipCategories.map((category, index) => (
							<motion.div 
								key={category.title}
								className="partnership-category"
								variants={textVariants}
								whileHover={{ 
									y: -5,
									scale: 1.02,
									transition: { 
										duration: 0.3,
										ease: [0.4, 0, 0.2, 1]
									}
								}}
							>
								<div className="category-image">
									<img src={category.image} alt={category.title} />
									<div className="image-overlay"></div>
									<div className="category-icon">
										{category.icon}
									</div>
								</div>
								
								<div className="category-content">
									<h3 className="category-title">{category.title}</h3>
									<p className="category-description">{category.description}</p>
									
									<div className="partners-list">
										{category.partners.map((partner, partnerIndex) => (
											<div key={partnerIndex} className="partner-item">
												<span className="partner-bullet">•</span>
												<span className="partner-name">{partner}</span>
											</div>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Key Partnerships */}
					<motion.div className="key-partnerships" variants={textVariants}>
						<div className="key-partnerships-header">
							<h3>Key Strategic Partners</h3>
							<p>Our most important collaborations driving renewable energy innovation</p>
						</div>
						
						<div className="partners-grid">
							{keyPartnerships.map((partner, index) => (
								<motion.div 
									key={partner.name}
									className="partner-card"
									variants={textVariants}
									whileHover={{
										scale: 1.05,
										transition: { duration: 0.3 }
									}}
								>
									<div className="partner-logo">
										<img src={partner.logo} alt={partner.name} />
									</div>
									<div className="partner-info">
										<h4 className="partner-name">{partner.name}</h4>
										<span className="partner-type">{partner.type}</span>
										<p className="partner-description">{partner.description}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Partnership Benefits */}
					<motion.div className="partnership-benefits" variants={textVariants}>
						<div className="benefits-header">
							<h3>Partnership Benefits</h3>
							<p>How our strategic alliances create value for all stakeholders</p>
						</div>
						
						<div className="benefits-grid">
							<motion.div 
								className="benefit-item"
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.3 }
								}}
							>
								<div className="benefit-icon">
									<Users size={24} />
								</div>
								<div className="benefit-content">
									<h4>Shared Expertise</h4>
									<p>Leveraging combined knowledge and experience to deliver superior solutions</p>
								</div>
							</motion.div>
							
							<motion.div 
								className="benefit-item"
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.3 }
								}}
							>
								<div className="benefit-icon">
									<Globe size={24} />
								</div>
								<div className="benefit-content">
									<h4>Global Reach</h4>
									<p>Access to international markets and cutting-edge technologies</p>
								</div>
							</motion.div>
							
							<motion.div 
								className="benefit-item"
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.3 }
								}}
							>
								<div className="benefit-icon">
									<Award size={24} />
								</div>
								<div className="benefit-content">
									<h4>Quality Assurance</h4>
									<p>Maintaining the highest standards through collaborative quality control</p>
								</div>
							</motion.div>
							
							<motion.div 
								className="benefit-item"
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.3 }
								}}
							>
								<div className="benefit-icon">
									<Building2 size={24} />
								</div>
								<div className="benefit-content">
									<h4>Innovation</h4>
									<p>Co-developing breakthrough technologies and sustainable solutions</p>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default PartnershipsSection;
