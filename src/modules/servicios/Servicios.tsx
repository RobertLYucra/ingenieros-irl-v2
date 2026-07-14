import { useEffect } from "react";
import "./Servicios.scss";
import { serviciosMock } from "../../shared/data/servicios";
import { IconCheck } from "../../shared/components/icons/Icons";
import BannerImg from "../../shared/images/ai-generated/project_1.webp";

import PageHero from "../../shared/components/page-hero/PageHero";

const Servicios = () => {
  useEffect(() => {
    document.title = "Servicios - YR INGENIEROS E.I.R.L.";
  }, []);

  return (
    <div className="page-container bg-light">
      <PageHero 
        title="Nuestros Servicios"
        subtitle="Soluciones de ingeniería integral diseñadas para garantizar la seguridad, eficiencia y éxito de tu proyecto."
        bgImage={BannerImg}
      />

      {/* Services Index / Quick Navigation */}
      <div className="content-wrapper section-padding pb-0">
        <div className="servicios-index">
          <h3 className="index-title">Explora nuestros servicios</h3>
          <div className="index-grid">
            {serviciosMock.map((servicio) => (
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
                <div className="index-icon">{servicio.icono}</div>
                <span className="index-name">{servicio.titulo}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="content-wrapper section-padding">
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
                      />
                    </div>
                  ) : (
                    <img src={servicio.imagen} alt={servicio.titulo} className="servicio-img" />
                  )}
                  <div className="servicio-icon-badge">
                    {servicio.icono}
                  </div>
                </div>
              </div>

              <div className="servicio-text-column">
                <div className="servicio-texto">
                  <div className="servicio-number">0{index + 1}</div>
                  <h2>{servicio.titulo}</h2>
                  <div className="title-underline-left"></div>
                  
                  <p className="servicio-desc-corta">{servicio.descripcionCorta}</p>
                  <p className="servicio-desc-larga">{servicio.descripcionLarga}</p>
                  
                  <ul className="servicio-bullets">
                    <li>
                      <div className="bullet-check"><IconCheck size={14} /></div>
                      <span>Calidad garantizada bajo normativas vigentes.</span>
                    </li>
                    <li>
                      <div className="bullet-check"><IconCheck size={14} /></div>
                      <span>Profesionales altamente capacitados.</span>
                    </li>
                    <li>
                      <div className="bullet-check"><IconCheck size={14} /></div>
                      <span>Optimización de recursos y tiempos de entrega.</span>
                    </li>
                  </ul>
                  
                  <div className="servicio-action">
                    <a href="/contacto" className="btn-primary servicio-btn">
                      Solicitar Cotización
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;
