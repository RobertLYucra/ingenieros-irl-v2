import "./Servicios.scss";
import { serviciosMock } from "../../shared/data/servicios";
import { IconCheck } from "../../shared/components/icons/Icons";
import BannerImg from "../../shared/images/ai-generated/project_1.webp";

import PageHero from "../../shared/components/page-hero/PageHero";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const Servicios = () => {
  return (
    <div className="page-container servicios-page">
      <PageHero 
        eyebrow="Servicios"
        title="Ingeniería para cada etapa del proyecto"
        subtitle="Diseñamos, coordinamos, supervisamos y ejecutamos con un mismo objetivo: reducir incertidumbre y hacer que el proyecto avance."
        bgImage={BannerImg}
      />

      <section className="services-intro">
        <div className="content-wrapper services-intro__grid">
          <p className="services-intro__label">Qué resolvemos</p>
          <div>
            <h2>Del primer criterio estructural a la entrega de obra.</h2>
            <p>Integramos las especialidades necesarias para que la información técnica sea útil, coordinada y ejecutable.</p>
          </div>
        </div>
      </section>

      <div className="services-index-section">
        <div className="content-wrapper">
        <div className="servicios-index">
          <div className="index-heading">
            <span>Selecciona un servicio</span>
            <ArrowDown size={18} aria-hidden="true" />
          </div>
          <div className="index-grid">
            {serviciosMock.map((servicio, index) => (
              <button 
                key={`index-${servicio.id}`}
                className="index-card"
                onClick={() => {
                  const el = document.getElementById(`servicio-${servicio.id}`);
                  if (el) {
                    const headerOffset = 100; // Adjust if there is a sticky header
                    const elementPosition = el.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                <span className="index-number">0{index + 1}</span>
                <div className="index-icon">{servicio.icono}</div>
                <span className="index-name">{servicio.titulo}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      </div>

      <section className="services-detail-section">
      <div className="content-wrapper">
        <div className="servicios-lista">
          {serviciosMock.map((servicio, index) => (
            <div 
              className={`servicio-detalle-card ${index % 2 !== 0 ? 'reverse' : ''}`} 
              key={servicio.id}
              id={`servicio-${servicio.id}`}
            >
              
              <div className="servicio-image-column">
                <div className="servicio-img-wrapper">
                  <div className="servicio-glow"></div>
                  {servicio.vimeoId ? (
                    <div className="vimeo-crop-container">
                      <iframe 
                        src={`https://player.vimeo.com/video/${servicio.vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&transparent=1`} 
                        className="vimeo-crop-iframe" 
                        allow="autoplay; fullscreen" 
                        title={`Vista previa de ${servicio.titulo}`}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <img src={servicio.imagen} alt={servicio.titulo} className="servicio-img" loading="lazy" decoding="async" />
                  )}
                  <div className="servicio-icon-badge">
                    {servicio.icono}
                  </div>
                </div>
              </div>

              <div className="servicio-text-column">
                <div className="servicio-texto">
                  <div className="servicio-number"><span>Servicio</span> 0{index + 1}</div>
                  <h2>{servicio.titulo}</h2>
                  
                  <p className="servicio-desc-corta">{servicio.descripcionCorta}</p>
                  <p className="servicio-desc-larga">{servicio.descripcionLarga}</p>
                  
                  <ul className="servicio-bullets">
                    {servicio.beneficios.map((beneficio) => (
                      <li key={beneficio}>
                        <div className="bullet-check"><IconCheck size={14} /></div>
                        <span>{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="servicio-action">
                    <Link to={`/contacto?servicio=${encodeURIComponent(servicio.titulo)}`} className="btn-primary servicio-btn">
                      Cotizar este servicio <ArrowUpRight size={18} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      </section>

      <section className="services-cta">
        <div className="content-wrapper services-cta__inner">
          <div>
            <span>¿No sabes qué servicio necesitas?</span>
            <h2>Cuéntanos en qué etapa está tu proyecto.</h2>
          </div>
          <Link to="/contacto" className="services-cta__link">Revisar mi caso <ArrowUpRight size={20} /></Link>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
