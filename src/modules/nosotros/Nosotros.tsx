import { useEffect } from "react";
import "./Nosotros.scss";
import { IconMision, IconVision } from "../../shared/components/icons/Icons";
import BannerImg from "../../shared/images/ai-generated/project_3.png";

const Nosotros = () => {
  useEffect(() => {
    document.title = "Quiénes Somos - YR INGENIEROS E.I.R.L.";
  }, []);

  return (
    <div className="page-container bg-light">
      <div className="page-hero" style={{ backgroundImage: `url(${BannerImg})` }}>
        <div className="content-wrapper">
          <h1 className="section-title">Sobre Nosotros</h1>
          <p className="section-description">
            Más de 18 años construyendo el futuro con bases sólidas.
          </p>
        </div>
      </div>

      <div className="content-wrapper section-padding">
        <div className="historia-section premium-card">
          <div className="historia-texto">
            <h2>Nuestra Historia</h2>
            <div className="title-underline"></div>
            <p>
              <strong>YR INGENIEROS E.I.R.L.</strong> nació con la visión de transformar la ingeniería civil en el país a través de diseños innovadores, seguros y eficientes. Desde nuestros inicios, nos hemos consolidado como una empresa líder en el rubro del diseño estructural, supervisión y ejecución de obras civiles, comerciales e industriales.
            </p>
            <p>
              A lo largo de más de 18 años, hemos superado retos complejos, adoptando nuevas tecnologías como la metodología BIM y garantizando siempre la máxima satisfacción de nuestros clientes institucionales y privados.
            </p>
          </div>
          <div className="historia-stats">
            <div className="stat-circle">
              <span className="stat-num">+50</span>
              <span className="stat-text">Proyectos Entregados</span>
            </div>
            <div className="stat-circle primary">
              <span className="stat-num">18</span>
              <span className="stat-text">Años de Trayectoria</span>
            </div>
          </div>
        </div>

        <div className="mision-vision-grid mt-5">
          <div className="mv-card premium-card">
            <div className="mv-icon"><IconMision size={48} /></div>
            <h3>Misión</h3>
            <p>
              Brindar servicios de ingeniería y construcción de la más alta calidad, priorizando la seguridad estructural, la innovación y el cumplimiento riguroso de normativas y plazos, generando valor sostenido para nuestros clientes y la sociedad.
            </p>
          </div>
          <div className="mv-card premium-card">
            <div className="mv-icon"><IconVision size={48} /></div>
            <h3>Visión</h3>
            <p>
              Ser la empresa peruana referente en soluciones integrales de ingeniería civil y estructural a nivel nacional, reconocida por nuestra excelencia técnica, vanguardia tecnológica y compromiso con el desarrollo sostenible del país.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
