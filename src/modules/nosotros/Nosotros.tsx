import { IonIcon } from "@ionic/react";
import {
  bulbOutline,
  eyeOutline,
  diamondOutline,
  ribbonOutline,
  constructOutline,
} from "ionicons/icons";
import "./Nosotros.scss";
import { useEffect } from "react";

const Nosotros = () => {
  useEffect(() => {
    document.title = "Nosotros - YR INGENIEROS E.I.R.L.";
  }, []);

  return (
    <div className="page-container nosotros-page">
      {/* Internal Hero */}
      <section className="internal-hero">
        <div className="overlay"></div>
        <div className="content-wrapper">
          <h1>Quiénes Somos</h1>
          <p>
            Más de 18 años construyendo confianza y seguridad estructural en el
            Perú.
          </p>
        </div>
      </section>

      {/* Our Story / Intro */}
      <section className="story-section section-padding">
        <div className="content-wrapper story-grid">
          <div className="story-text">
            <span className="subtitle">Nuestra Historia</span>
            <h2 className="section-title text-left">
              Experiencia que Construye Futuro
            </h2>
            <p>
              YR INGENIEROS E.I.R.L. nació con la visión de elevar los
              estándares de la ingeniería estructural en el país. Contamos con
              un equipo de profesionales altamente capacitados con amplia
              experiencia tanto en la ejecución como en el desarrollo de
              proyectos complejos.
            </p>
            <p>
              Nuestra especialización abarca el Análisis y Diseño en Concreto
              Armado, Acero, Albañilería Confinada y Muros de Ductilidad
              Limitada, brindando soluciones que equilibran seguridad,
              funcionalidad y economía.
            </p>
          </div>
          <div className="story-visual">
            <div className="visual-placeholder">
              <span>18+ Años de Trayectoria</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="mvv-section section-padding bg-light">
        <div className="content-wrapper">
          <div className="cards-grid">
            <div className="mvv-card">
              <div className="icon-box">
                <IonIcon icon={bulbOutline} />
              </div>
              <h3>Misión</h3>
              <p>
                Proveer soluciones de ingeniería e infraestructura de
                excelencia, superando las expectativas técnicas y de servicio de
                nuestros clientes, garantizando seguridad y sostenibilidad.
              </p>
            </div>
            <div className="mvv-card featured">
              <div className="icon-box">
                <IonIcon icon={eyeOutline} />
              </div>
              <h3>Visión</h3>
              <p>
                Ser reconocidos como la compañía líder y más confiable en
                servicios de ingeniería estructural e infraestructura del país,
                referente de calidad e innovación.
              </p>
            </div>
            <div className="mvv-card">
              <div className="icon-box">
                <IonIcon icon={diamondOutline} />
              </div>
              <h3>Valores</h3>
              <ul className="values-list">
                <li>
                  <strong>Compromiso:</strong> Con la seguridad y el cliente.
                </li>
                <li>
                  <strong>Honestidad:</strong> Transparencia total.
                </li>
                <li>
                  <strong>Excelencia:</strong> Calidad sin compromisos.
                </li>
                <li>
                  <strong>Vocación:</strong> Pasión por la ingeniería.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="certifications-section section-padding">
        <div className="content-wrapper">
          <div className="cert-header">
            <h2 className="section-title">Estándares de Calidad</h2>
            <p className="section-description">
              Nos regimos por las normativas más exigentes y estándares
              internacionales.
            </p>
          </div>
          <div className="certs-grid">
            <div className="cert-item">
              <IonIcon icon={ribbonOutline} className="cert-icon" />
              <h4>ISO 9001</h4>
              <p>Gestión de Calidad</p>
            </div>
            <div className="cert-item">
              <IonIcon icon={constructOutline} className="cert-icon" />
              <h4>Normativa RNE</h4>
              <p>Cumplimiento Estricto</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
