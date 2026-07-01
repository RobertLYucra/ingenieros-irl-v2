import { useEffect } from "react";
import "./Servicios.scss";
import { serviciosMock } from "../../shared/data/servicios";
import { IconCheck } from "../../shared/components/icons/Icons";
import BannerImg from "../../shared/images/ai-generated/project_1.png";

const Servicios = () => {
  useEffect(() => {
    document.title = "Servicios - YR INGENIEROS E.I.R.L.";
  }, []);

  return (
    <div className="page-container bg-light">
      <div className="page-hero" style={{ backgroundImage: `url(${BannerImg})` }}>
        <div className="content-wrapper">
          <h1 className="section-title">Nuestros Servicios</h1>
          <p className="section-description">
            Soluciones de ingeniería integral diseñadas para garantizar la
            seguridad, eficiencia y éxito de tu proyecto.
          </p>
        </div>
      </div>

      <div className="content-wrapper section-padding">
        <div className="servicios-lista">
          {serviciosMock.map((servicio, index) => (
            <div className={`servicio-detalle-card premium-card ${index % 2 !== 0 ? 'reverse' : ''}`} key={servicio.id}>
              <div className="servicio-img-wrapper">
                <img src={servicio.imagen} alt={servicio.titulo} />
                <div className="servicio-icon-large">{servicio.icono}</div>
              </div>
              <div className="servicio-texto">
                <h2>{servicio.titulo}</h2>
                <div className="title-underline"></div>
                <p className="servicio-desc-corta">{servicio.descripcionCorta}</p>
                <p className="servicio-desc-larga">{servicio.descripcionLarga}</p>
                <ul className="servicio-bullets">
                  <li><span className="bullet-check"><IconCheck size={16} /></span> Calidad garantizada bajo normativas vigentes.</li>
                  <li><span className="bullet-check"><IconCheck size={16} /></span> Profesionales altamente capacitados.</li>
                  <li><span className="bullet-check"><IconCheck size={16} /></span> Optimización de recursos y tiempos.</li>
                </ul>
                <a href="/contacto" className="btn-secondary" style={{ marginTop: '2rem' }}>
                  Solicitar este servicio
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;
