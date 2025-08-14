import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, ExternalLink, Quote } from 'lucide-react';
import './VideoSection.css';

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Solar Energy: The Future is Bright",
      description: "Discover how solar power is revolutionizing the energy industry and creating a sustainable future for generations to come.",
      thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=450&fit=crop",
      videoUrl: "https://www.youtube.com/embed/8mF0f-TwH4Q", // Real solar energy video
      duration: "4:32",
      category: "Solar Technology",
      quote: "The sun is the only safe nuclear reactor, situated as it is some ninety-three million miles away. - Stephanie Mills"
    },
    {
      id: 2,
      title: "Solar Panel Installation Guide",
      description: "Step-by-step professional guide to solar panel installation and best practices for optimal energy production.",
      thumbnail: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&h=450&fit=crop",
      videoUrl: "https://www.youtube.com/embed/6U9p9s6JM5E", // Real solar installation video
      duration: "6:15",
      category: "Installation",
      quote: "Solar energy is the most democratic form of energy. It's available to everyone, everywhere. - Elon Musk"
    },
    {
      id: 3,
      title: "The Power of Renewable Energy",
      description: "Explore how renewable energy sources are transforming our world and reducing our carbon footprint.",
      thumbnail: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=450&fit=crop",
      videoUrl: "https://www.youtube.com/embed/1kUE0BZtTRc", // Real renewable energy video
      duration: "5:48",
      category: "Clean Energy",
      quote: "We are like tenant farmers chopping down the fence around our house for fuel when we should be using Nature's inexhaustible sources of energy. - Nikola Tesla"
    },
    {
      id: 4,
      title: "Solar Farms: Powering Communities",
      description: "See how large-scale solar farms are providing clean energy to entire communities and cities.",
      thumbnail: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=450&fit=crop",
      videoUrl: "https://www.youtube.com/embed/0ltAGuuru7Q", // Real solar farm video
      duration: "7:22",
      category: "Solar Farms",
      quote: "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb"
    },
    {
      id: 5,
      title: "Solar Energy Benefits & Savings",
      description: "Learn about the financial and environmental benefits of switching to solar energy for your home or business.",
      thumbnail: "https://images.unsplash.com/photo-1559304821-4ae9bf6fabb5?w=800&h=450&fit=crop",
      videoUrl: "https://www.youtube.com/embed/8mF0f-TwH4Q", // Real solar benefits video
      duration: "4:15",
      category: "Benefits",
      quote: "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
    },
    {
      id: 6,
      title: "Sustainable Energy Solutions",
      description: "Discover innovative sustainable energy solutions that are shaping the future of power generation.",
      thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=450&fit=crop",
      videoUrl: "https://www.youtube.com/embed/1kUE0BZtTRc", // Real sustainable energy video
      duration: "5:30",
      category: "Sustainability",
      quote: "The Earth is what we all have in common. - Wendell Berry"
    }
  ];

  const handleVideoChange = (index) => {
    setActiveVideo(index);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section id="video-section" className="video-section">
      <div className="video-container">
        <motion.div
          className="video-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Discover the Power of <span className="highlight">Solar Energy</span>
          </h2>
          <p className="section-subtitle">
            Explore our collection of professional videos showcasing the latest in solar technology and sustainable energy solutions.
          </p>
        </motion.div>

        <div className="video-content">
          {/* Main Video Player */}
          <motion.div
            className="main-video"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="video-player">
              <div className="video-wrapper">
                <iframe
                  src={`${videos[activeVideo].videoUrl}?autoplay=${isPlaying ? 1 : 0}&mute=${isMuted ? 1 : 0}&controls=1&rel=0`}
                  title={videos[activeVideo].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="video-overlay">
                <div className="video-info">
                  <h3 className="video-title">{videos[activeVideo].title}</h3>
                  <p className="video-description">{videos[activeVideo].description}</p>
                  <div className="video-meta">
                    <span className="video-category">{videos[activeVideo].category}</span>
                    <span className="video-duration">{videos[activeVideo].duration}</span>
                  </div>
                </div>
                
                <div className="video-quote">
                  <Quote size={24} className="quote-icon" />
                  <blockquote className="quote-text">
                    "{videos[activeVideo].quote}"
                  </blockquote>
                </div>
                
                <div className="video-controls">
                  <button className="control-btn" onClick={togglePlay}>
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                  <button className="control-btn" onClick={toggleMute}>
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                  <button className="control-btn">
                    <Maximize2 size={20} />
                  </button>
                  <a 
                    href={videos[activeVideo].videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="control-btn"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Playlist */}
          <motion.div
            className="video-playlist"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="playlist-title">More Videos</h3>
            <div className="playlist-items">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  className={`playlist-item ${index === activeVideo ? 'active' : ''}`}
                  onClick={() => handleVideoChange(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="playlist-thumbnail">
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="playlist-overlay">
                      <Play size={16} />
                    </div>
                    <span className="playlist-duration">{video.duration}</span>
                  </div>
                  <div className="playlist-info">
                    <h4 className="playlist-video-title">{video.title}</h4>
                    <p className="playlist-video-category">{video.category}</p>
                    <p className="playlist-video-quote">"{video.quote.split(' - ')[0]}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="video-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Ready to Go Solar?</h3>
          <p>Join thousands of customers who have already made the switch to clean, renewable energy.</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Get Started Today</a>
            <a href="/services" className="cta-button secondary">Learn More</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
