import "./Servicios.scss";
import { IonIcon } from "@ionic/react";
import {
  businessOutline,
  checkmarkCircleOutline,
  constructOutline,
  statsChartOutline,
} from "ionicons/icons";
import { useEffect } from "react";

const Servicios = () => {
  useEffect(() => {
    document.title = "Servicios - YR INGENIEROS E.I.R.L.";
  }, []);

  const services = [
    {
      title: "Ingeniería Estructural",
      icon: businessOutline,
      description:
        "Desarrollamos proyectos estructurales seguros y eficientes, cumpliendo rigurosamente con la normativa vigente.",
      items: [
        "Análisis Sísmico Avanzado",
        "Diseño en Concreto Armado",
        "Estructuras Metálicas",
        "Albañilería Confinada",
        "Reforzamiento Estructural",
      ],
    },
    {
      title: "Supervisión de Obras",
      icon: checkmarkCircleOutline,
      description:
        "Garantizamos que la ejecución de su proyecto cumpla con los estándares de calidad, seguridad y expedientes técnicos.",
      items: [
        "Control de Calidad (QC)",
        "Seguridad (SSOMA)",
        "Control de Procesos Constructivos",
        "Informes Técnicos Mensuales",
        "Recepción de Obra",
      ],
    },
    {
      title: "Gerencia de Proyectos",
      icon: statsChartOutline,
      description:
        "Gestión integral del proyecto para optimizar recursos, plazos y costos mediante metodologías modernas.",
      items: [
        "Planificación y Cronogramas",
        "Coordinación BIM",
        "Control de Costos",
        "Gestión de Proveedores",
        "Ingeniería de Valor",
      ],
    },
    {
      title: "Construcción",
      icon: constructOutline,
      description:
        "Ejecución de obras civiles con un equipo técnico especializado y mano de obra calificada.",
      items: [
        "Edificaciones Residenciales",
        "Naves Industriales",
        "Obras de Saneamiento",
        "Remodelaciones y Ampliaciones",
        "Obras Llave en Mano",
      ],
    },
  ];

  return (
    <div className="page-container servicios-page">
      {/* Internal Hero */}
      <section className="internal-hero">
        <div className="overlay"></div>
        <div className="content-wrapper">
          <h1>Nuestros Servicios</h1>
          <p>Ingeniería de excelencia para cada etapa de su proyecto</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list section-padding">
        <div className="content-wrapper">
          <div className="services-grid-layout">
            {services.map((service, index) => (
              <div className="service-detail-card" key={index}>
                <div className="card-header">
                  <div className="icon-wrapper">
                    <IonIcon icon={service.icon} />
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <div className="card-body">
                  <p>{service.description}</p>
                  <ul className="service-items">
                    {service.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow / Methodology */}
      <section className="methodology-section section-padding bg-light">
        <div className="content-wrapper">
          <h2 className="section-title">Nuestra Metodología</h2>
          <div className="methodology-steps">
            <div className="step">
              <span className="step-number">01</span>
              <h4>Análisis</h4>
              <p>
                Evaluación detallada de requerimientos y condiciones del sitio.
              </p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <span className="step-number">02</span>
              <h4>Diseño / Planificación</h4>
              <p>Desarrollo de ingeniería con tecnología BIM y optimización.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <span className="step-number">03</span>
              <h4>Ejecución / Control</h4>
              <p>
                Materialización del proyecto bajo estrictos estándares de
                calidad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
