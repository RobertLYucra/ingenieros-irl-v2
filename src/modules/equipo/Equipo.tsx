import { useEffect } from "react";
import "./Equipo.scss";
import { equipoMock } from "../../shared/data/equipo";
import BannerImg from "../../shared/images/trabajos/IMG_E6912.webp";
import { IonIcon } from "@ionic/react";
import { logoLinkedin, timeOutline, constructOutline, shieldCheckmarkOutline, peopleOutline } from "ionicons/icons";

import PageHero from "../../shared/components/page-hero/PageHero";

const Equipo = () => {
  useEffect(() => {
    document.title = "Nuestro Equipo - YR INGENIEROS E.I.R.L.";
  }, []);

  return (
    <div className="page-container bg-light">
      <PageHero 
        title="Nuestros Profesionales"
        subtitle="Contamos con un equipo multidisciplinario de ingenieros y especialistas altamente capacitados y comprometidos con la excelencia en cada proyecto."
        bgImage={BannerImg}
      />
      <div className="content-wrapper section-padding">

        {/* Sección de Trayectoria/Stats */}
        <div className="equipo-trayectoria">
          <div className="trayectoria-header">
            <h2>Trayectoria y Respaldo</h2>
            <div className="title-underline"></div>
            <p>
              Nuestro equipo suma décadas de experiencia combinada, garantizando soluciones técnicas de primer nivel y resultados excepcionales en cada desafío estructural e ingenieril.
            </p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <IonIcon icon={timeOutline} />
              </div>
              <h3 className="stat-number">+18</h3>
              <p className="stat-label">Años de Experiencia</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <IonIcon icon={constructOutline} />
              </div>
              <h3 className="stat-number">+50</h3>
              <p className="stat-label">Obras Ejecutadas</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <IonIcon icon={peopleOutline} />
              </div>
              <h3 className="stat-number">+20</h3>
              <p className="stat-label">Profesionales de Primer Nivel</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <IonIcon icon={shieldCheckmarkOutline} />
              </div>
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Compromiso y Calidad</p>
            </div>
          </div>
        </div>

        <div className="trayectoria-header leaders-header">
          <h2>Líderes de Proyecto</h2>
          <div className="title-underline"></div>
        </div>

        <div className="equipo-grid">
          {equipoMock.map((miembro) => (
            <div className="equipo-card premium-card" key={miembro.id}>
              <div className="equipo-card-header"></div>
              <div className="miembro-img-wrapper">
                <img src={miembro.imagen} alt={miembro.nombre} className="miembro-img" />
              </div>
              <div className="miembro-info">
                <h3>{miembro.nombre}</h3>
                <h4 className="miembro-cargo">{miembro.cargo}</h4>
                <div className="title-underline-small"></div>
                <p>{miembro.descripcion}</p>
                {miembro.linkedin && (
                  <a href={miembro.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                    <IonIcon icon={logoLinkedin} /> Conectar
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipo;
