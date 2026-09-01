import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import "./Inicio.scss";
import TechImg from "../../shared/images/ai-generated/bim1.webp";
import SupervisionImg from "../../shared/images/servicios/supervicion.webp";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";

import { serviciosMock } from "../../shared/data/servicios";
import { proyectosMock } from "../../shared/data/proyectos";
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

const Inicio = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoTriggerRef = useRef<HTMLButtonElement>(null);
  const videoCloseRef = useRef<HTMLButtonElement>(null);
  const featuredProjects = proyectosMock
    .filter((project) => project.tipoMedia !== "vimeo")
    .slice(0, 3);

  useEffect(() => {
    if (!isVideoOpen) return;
    const previousOverflow = document.body.style.overflow;
    const videoTrigger = videoTriggerRef.current;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsVideoOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => videoCloseRef.current?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      videoTrigger?.focus();
    };
  }, [isVideoOpen]);

  return (
    <div className="inicio-container">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            className="video-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsVideoOpen(false);
            }}
          >
            <div className="lightbox-content" role="dialog" aria-modal="true" aria-labelledby="video-dialog-title">
              <h2 id="video-dialog-title" className="sr-only">Video de presentación de YR Ingenieros</h2>
              <button ref={videoCloseRef} type="button" className="close-lightbox-btn" onClick={() => setIsVideoOpen(false)} aria-label="Cerrar video">
                ✕
              </button>
              <div className="lightbox-video-wrapper">
                <iframe 
                  src="https://player.vimeo.com/video/1210936572?autoplay=1&color=be1522&title=0&byline=0&portrait=0" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                  title="Presentación de YR Ingenieros"
                ></iframe>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="hero-section hero-redesign">
        <div className="hero-blueprint" aria-hidden="true"></div>
        <motion.div className="hero-shell" variants={staggerContainer} initial="hidden" animate="visible">
          <div className="hero-copy">
            <motion.p variants={fadeInUp} className="hero-eyebrow">
              Ingeniería estructural · Supervisión · Construcción
            </motion.p>
            <motion.h1 variants={fadeInUp}>
              Estructuras seguras.
              <span> Proyectos que avanzan.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="hero-lead">
              Convertimos necesidades complejas en soluciones técnicas claras,
              coordinadas y listas para construir en todo el Perú.
            </motion.p>
            <motion.p variants={fadeInUp} className="hero-brand-slogan">
              Diseñamos tu sueño y construimos tu futuro
            </motion.p>
            <motion.div variants={fadeInUp} className="hero-actions-new">
              <Link to="/contacto" className="hero-primary-action">
                Evaluar mi proyecto <ArrowUpRight aria-hidden="true" />
              </Link>
              <Link to="/proyectos" className="hero-secondary-action">
                Ver proyectos
              </Link>
            </motion.div>
            <motion.ul variants={fadeInUp} className="hero-assurances" aria-label="Nuestro enfoque">
              <li><IconCheck size={17} aria-hidden="true" /> Normativa técnica vigente</li>
              <li><IconCheck size={17} aria-hidden="true" /> Atención a nivel nacional</li>
            </motion.ul>
          </div>

          <motion.figure variants={fadeInUp} className="hero-field-photo">
            <img
              src={SupervisionImg}
              alt="Supervisión técnica de infraestructura en campo"
              width="900"
              height="1200"
              fetchPriority="high"
            />
            <figcaption>
              <span>Trabajo en campo</span>
              <strong>Ingeniería que acompaña la ejecución</strong>
            </figcaption>
            <button
              ref={videoTriggerRef}
              type="button"
              className="hero-play-button"
              onClick={() => setIsVideoOpen(true)}
              aria-haspopup="dialog"
            >
              <Play aria-hidden="true" fill="currentColor" />
              <span>Ver presentación</span>
            </button>
          </motion.figure>
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
            <span className="stat-number">40+</span>
            <span className="stat-label">Proyectos documentados</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Líneas de servicio</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="stat-item">
            <span className="stat-number">BIM</span>
            <span className="stat-label">Diseño coordinado</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="stat-item">
            <span className="stat-number">Perú</span>
            <span className="stat-label">Cobertura nacional</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Highlight */}
      <section className="services-highlight section-padding">
        <div className="content-wrapper">
          <motion.div
            className="home-services-heading"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <div>
              <p className="services-kicker">Servicios integrales</p>
              <h2>Una respuesta técnica para cada etapa</h2>
            </div>
            <p>
              Desde el primer cálculo hasta la ejecución, coordinamos las decisiones
              que hacen que un proyecto sea seguro, viable y construible.
            </p>
          </motion.div>

          <motion.div 
            className="services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {serviciosMock.slice(0, 4).map((servicio, index) => (
              <motion.article variants={fadeInUp} className="service-card-modern" key={servicio.id}>
                <div className="card-image-header">
                  <img src={servicio.imagen} alt={servicio.titulo} className="service-img" loading="lazy" decoding="async" />
                  <span className="service-card-number">0{index + 1}</span>
                </div>
                <div className="card-content-body">
                  <div className="service-card-label">
                    <span>{servicio.icono}</span>
                    <small>Servicio especializado</small>
                  </div>
                  <h3>{servicio.titulo}</h3>
                  <p>{servicio.descripcionCorta}</p>
                  <div className="card-footer">
                    <Link to="/servicios" className="service-link-btn">
                      <span>Ver alcance</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="home-projects section-padding">
        <div className="content-wrapper">
          <div className="home-section-heading">
            <div>
              <span className="section-kicker">Portafolio seleccionado</span>
              <h2>Proyectos que respaldan nuestro trabajo</h2>
            </div>
            <Link to="/proyectos" className="projects-all-link">
              Explorar portafolio <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="home-projects-grid">
            {featuredProjects.map((project) => (
              <article className="home-project-card" key={project.id}>
                <Link to="/proyectos" aria-label={`Ver ${project.titulo}`}>
                  <div className="home-project-image">
                    <img src={project.imagen} alt={project.titulo} loading="lazy" decoding="async" />
                    <span>{project.categoria}</span>
                  </div>
                  <div className="home-project-info">
                    <p>{project.ubicacion}</p>
                    <h3>{project.titulo}</h3>
                    <ArrowUpRight aria-hidden="true" />
                  </div>
                </Link>
              </article>
            ))}
          </div>
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
              <img src={TechImg} alt="Metodología BIM" className="tech-img" loading="lazy" decoding="async" />
              <div className="tech-glass-badge">
                <span className="badge-title">BIM</span>
                <span className="badge-subtitle">METODOLOGÍA</span>
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
          <h2>Tomemos buenas decisiones antes de llegar a obra</h2>
          <p>
            Cuéntanos qué necesitas y revisaremos el mejor punto de partida para tu proyecto.
          </p>
          <Link to="/contacto" className="btn-primary cta-btn">
            Revisar mi proyecto
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Inicio;

