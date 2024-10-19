import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // Importing the CSS file
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="homepage-section">
      <div className="homepage-container">
        <div className="homepage-content">
          
          {/* Left Section - Text and Buttons */}
          <div className="left-section">
            
            <h1 className="headline">
              P2P Based Layer
            </h1>
            <p className="description">
              Simplifying the tracking
            </p>
            <div className="tagline">Version 1.0 is here</div>
            <div className="button-group">
              <Link to="/neworders">
                <button className="primary-button">
                  Get Started
                </button>
              </Link>
              <button className="secondary-button">
                <span>Learn more</span>
                <svg
                  className="arrow-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section - Animated Image */}
          <motion.div
            className="right-section"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          >
            <motion.img
              src="https://www.base.org/_next/static/media/logo.f6fdedfc.svg"
              alt="Base logo Image"
              className="animated-image"
              animate={{ y: [-10, 10, -10] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;
