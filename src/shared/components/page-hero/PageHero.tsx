import React from 'react';
import { motion, type Variants } from 'framer-motion';
import './PageHero.scss';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, bgImage }) => {
  return (
    <div className="page-hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="page-hero-overlay"></div>
      <div className="architectural-grid"></div>
      
      <div className="content-wrapper">
        <motion.div 
          className="page-hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="hero-title">{title}</h1>
          <div className="title-underline"></div>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHero;
