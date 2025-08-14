import React from 'react';
import './JourneyTimeline.css';

const JourneyTimeline = () => {
  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "Cleanco Group was founded with a vision to provide sustainable energy solutions.",
      image: "/images/Cleanco_logo_f.png"
    },
    {
      year: "2015",
      title: "First Solar Project",
      description: "Successfully completed our first solar power plant, marking our entry into the renewable energy sector.",
      image: "/images/First_s.jpg"
    },
    {
      year: "2020",
      title: "BESS Expansion",
      description: "Expanded our portfolio to include Battery Energy Storage Systems (BESS), enhancing grid stability.",
      image: "/images/BESS.jpg"
    },
    {
      year: "2023",
      title: "CBG Solutions",
      description: "Ventured into Compressed Biogas (CBG) solutions, converting organic waste into renewable energy.",
      image: "/images/CBG.jpg"
    },
    {
      year: "2025",
      title: "Innovation Hub",
      description: "Launched our research and development center focused on next-generation renewable energy technologies.",
      image: "/images/innovation_lab.jpg"
    },
    {
      year: "2027",
      title: "Future Expansion",
      description: "Aim to expand from 50 MW to 250 MW solar and 10 TPD CBG, powering a cleaner tomorrow.",
      image: "/images/future.jpg"
    }
  ];

  return (
    <section className="journey-timeline">
      <div className="container">
        <div className="timeline-header">
          <h2 className="timeline-title">Our Journey & Future Plans</h2>
        </div>
        
        <div className="timeline-container">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-image-container">
                <img 
                  src={milestone.image} 
                  alt={milestone.title}
                  className="timeline-image"
                />
              </div>
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <h3 className="timeline-milestone-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
