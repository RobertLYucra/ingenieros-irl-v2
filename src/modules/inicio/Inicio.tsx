import { useEffect } from "react";
import "./Inicio.scss";
import PortadaVideo from "../../assets/portada-video.mp4";

const Inicio = () => {
  useEffect(() => {
    document.title = "Inicio - YR INGENIEROS E.I.R.L.";
  }, []);

  return (
    <div className="inicio-container">
      {/* Hero Section */}
      <section className="hero-section">
        <video
          src={PortadaVideo}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        ></video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">YR INGENIEROS E.I.R.L.</h1>
          <p className="hero-subtitle">
            Diseño Estructural - Supervisión - Gestión - Construcción
          </p>
          <div className="hero-actions">
            <a href="/servicios" className="hero-btn btn-primary">
              Nuestros Servicios
            </a>
            <a href="/contacto" className="hero-btn btn-secondary">
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="content-wrapper stats-grid">
          <div className="stat-item">
            <span className="stat-number">18+</span>
            <span className="stat-label">Años de Experiencia</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">ISO</span>
            <span className="stat-label">Calidad Certificada</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Proyectos Exitosos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">+50</span>
            <span className="stat-label">Obras Ejecutadas</span>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="services-highlight section-padding">
        <div className="content-wrapper">
          <div className="section-header">
            <h2 className="section-title">
              Soluciones Integrales en Ingeniería
            </h2>
            <p className="section-description">
              Abarcamos todas las etapas de tu proyecto, desde la concepción
              estructural hasta la ejecución y supervisión.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="card-icon">🏗️</div>
              <h3>Diseño Estructural</h3>
              <p>
                Análisis y diseño sismorresistente con normativa vigente para
                edificaciones seguras.
              </p>
            </div>
            <div className="service-card">
              <div className="card-icon">👷</div>
              <h3>Supervisión de Obra</h3>
              <p>
                Control de calidad, costos y plazos para garantizar el éxito de
                la construcción.
              </p>
            </div>
            <div className="service-card">
              <div className="card-icon">🏢</div>
              <h3>Construcción y Gestión</h3>
              <p>
                Ejecución de proyectos de infraestructura y edificaciones con
                altos estándares.
              </p>
            </div>
          </div>
          <div className="center-btn">
            <a href="/servicios" className="btn-link">
              Ver todos los servicios &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us (BIM/Tech) */}
      <section className="why-us section-padding bg-light">
        <div className="content-wrapper why-us-container">
          <div className="why-text">
            <h2 className="section-title text-left">Innovación y Tecnología</h2>
            <p>
              Implementamos metodología BIM (Building Information Modeling) para
              optimizar el diseño, reducir conflictos en obra y asegurar la
              eficiencia de recursos.
            </p>
            <ul className="benefits-list">
              <li>Modelado 3D de alta precisión.</li>
              <li>Detección temprana de interferencias.</li>
              <li>Optimización de costos y cronogramas.</li>
            </ul>
          </div>
          <div className="why-visual">
            <div className="tech-placeholder">
              <span>BIM MODELING</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="content-wrapper cta-content">
          <h2>¿Listo para iniciar tu próximo proyecto?</h2>
          <p>
            Confía en la experiencia de YR Ingenieros para materializar tu
            visión con seguridad y eficiencia.
          </p>
          <a href="/contacto" className="cta-btn">
            Solicitar Cotización
          </a>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
