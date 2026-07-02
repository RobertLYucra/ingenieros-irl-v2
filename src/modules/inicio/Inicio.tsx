import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import "./Inicio.scss";
import HeroImage from "../../shared/images/ai-generated/hero_bg.png";
import TechImg from "../../shared/images/ai-generated/bim1.jpg";

import { serviciosMock } from "../../shared/data/servicios";
import { IconCheck } from "../../shared/components/icons/Icons";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const zoomInfinite: Variants = {
  hidden: { scale: 1 },
  visible: { 
    scale: 1.15, 
    transition: { 
      duration: 30, 
      ease: "linear", 
      repeat: Infinity,
      repeatType: "reverse"
    } 
  }
};

const Inicio = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const servicesList = ["Diseño Estructural", "Supervisión", "Gestión", "Construcción"];

  useEffect(() => {
    document.title = "Inicio - YR INGENIEROS E.I.R.L.";
    
    // Rotating text interval
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % servicesList.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, [servicesList.length]);

  return (
    <div className="inicio-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ overflow: 'hidden' }}>
        <motion.div 
          className="hero-bg-animated"
          variants={zoomInfinite}
          initial="hidden"
          animate="visible"
          style={{ 
            backgroundImage: `url(${HeroImage})`,
            position: 'absolute',
            inset: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        <div className="hero-overlay"></div>
        <div className="architectural-grid"></div>

        {/* Social Sidebar */}
        <motion.div variants={fadeInUp} className="hero-socials" initial="hidden" animate="visible">
          <a href="#" title="Facebook">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" title="Mail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
          <div className="social-line"></div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div variants={fadeInUp} className="scroll-indicator" initial="hidden" animate="visible">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Explorar</span>
        </motion.div>

        {/* Floating Trust Badge */}
        <motion.div variants={fadeInUp} className="hero-trust-badge" initial="hidden" animate="visible">
          <div className="trust-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 12 15 16 9"></polyline></svg>
          </div>
          <div className="trust-text">
            <strong>Calidad ISO</strong>
            <span>Estándares Globales</span>
          </div>
        </motion.div>

        <motion.div 
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="hero-badge">
            <span style={{ color: 'var(--primary-color)' }}>•</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentServiceIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="hero-badge-text"
              >
                {servicesList[currentServiceIndex].toUpperCase()}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="hero-title">
            YR INGENIEROS E.I.R.L.
          </motion.h1>
          <motion.p variants={fadeInUp} className="hero-subtitle">
            Especialistas en diseño, supervisión y gestión de proyectos con 9 años de experiencia a nivel nacional. Diseñamos tu sueño y construimos tu futuro.
          </motion.p>
          <motion.div variants={fadeInUp} className="hero-actions">
            <a href="/servicios" className="btn-primary hero-btn">
              Nuestros Servicios
            </a>
            <a href="/proyectos" className="btn-secondary hero-btn">
              Ver Proyectos
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar Premium */}
      <section className="stats-bar">
        <motion.div 
          className="content-wrapper stats-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeInUp} className="stat-item">
            <span className="stat-number">18+</span>
            <span className="stat-label">Años de Experiencia</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="stat-item">
            <span className="stat-number">ISO</span>
            <span className="stat-label">Calidad Certificada</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Proyectos Exitosos</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="stat-item">
            <span className="stat-number">+50</span>
            <span className="stat-label">Obras Ejecutadas</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Highlight */}
      <section className="services-highlight section-padding">
        <div className="content-wrapper">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <h2 className="section-title">Soluciones Integrales</h2>
            <p className="section-description">
              Abarcamos todas las etapas de tu proyecto, desde la concepción
              estructural hasta la ejecución y supervisión con los más altos estándares.
            </p>
          </motion.div>

          <motion.div 
            className="services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {serviciosMock.slice(0, 3).map((servicio) => (
              <motion.div variants={fadeInUp} className="premium-card service-card poster-card" key={servicio.id}>
                <div className="card-image-wrapper">
                  <img src={servicio.imagen} alt={servicio.titulo} className="service-img" />
                  <div className="card-overlay"></div>
                </div>
                <div className="card-content">
                  <div className="card-icon">{servicio.icono}</div>
                  <h3>{servicio.titulo}</h3>
                  <div className="hover-reveal">
                    <p>{servicio.descripcionCorta}</p>
                    <a href="/servicios" className="service-link">Leer más &rarr;</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="center-btn" style={{ marginTop: '3rem', textAlign: 'center' }}
          >
            <a href="/servicios" className="btn-primary">
              Ver todos los servicios
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us (BIM/Tech) */}
      <section className="why-us section-padding">
        <div className="content-wrapper why-us-container">
          <motion.div 
            className="why-text"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <h2 className="section-title text-left" style={{ left: '0', transform: 'none' }}>Innovación y Tecnología</h2>
            <div className="title-underline-left"></div>
            <p>
              Implementamos metodología BIM (Building Information Modeling) para
              optimizar el diseño, reducir conflictos en obra y asegurar la
              eficiencia de recursos, llevando tu proyecto al futuro de la ingeniería.
            </p>
            <ul className="benefits-list">
              <li>
                <div className="check-glass"><IconCheck size={18} /></div>
                <span>Modelado 3D de alta precisión.</span>
              </li>
              <li>
                <div className="check-glass"><IconCheck size={18} /></div>
                <span>Detección temprana de interferencias.</span>
              </li>
              <li>
                <div className="check-glass"><IconCheck size={18} /></div>
                <span>Optimización de costos y cronogramas reales.</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="why-visual"
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="tech-image-container">
              <div className="tech-glow"></div>
              <img src={TechImg} alt="Metodología BIM" className="tech-img" />
              <div className="tech-glass-badge">
                <span className="badge-title">BIM</span>
                <span className="badge-subtitle">CERTIFIED</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <motion.div 
          className="content-wrapper cta-content"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        >
          <h2>¿Listo para iniciar tu próximo gran proyecto?</h2>
          <p>
            Confía en la experiencia de YR Ingenieros para materializar tu
            visión con seguridad, innovación y eficiencia.
          </p>
          <a href="/contacto" className="btn-primary cta-btn">
            Solicitar Cotización Ahora
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Inicio;

