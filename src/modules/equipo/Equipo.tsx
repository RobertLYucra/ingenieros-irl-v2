import "./Equipo.scss";
import { equipoMock } from "../../shared/data/equipo";
import BannerImg from "../../shared/images/trabajos/IMG_E6912.webp";
import { ArrowUpRight } from "lucide-react";
import { IconLinkedin } from "../../shared/components/icons/Icons";
import { Link } from "react-router-dom";

import PageHero from "../../shared/components/page-hero/PageHero";

const Equipo = () => {
  return (
    <div className="page-container team-page">
      <PageHero 
        eyebrow="Equipo"
        title="Personas responsables de cada decisión"
        subtitle="Ingenieros y gestores que conectan especialidad técnica, coordinación y ejecución para acompañar cada proyecto de principio a fin."
        bgImage={BannerImg}
      />
      <section className="team-directory">
      <div className="content-wrapper">

        <div className="team-heading">
          <div>
            <span>Liderazgo técnico</span>
            <h2>Un equipo visible. Una responsabilidad clara.</h2>
          </div>
          <p>Presentamos a quienes lideran la dirección técnica, operativa, de proyectos y comercial de YR Ingenieros.</p>
        </div>

        <div className="equipo-grid">
          {equipoMock.map((miembro, index) => (
            <article className="equipo-card" key={miembro.id}>
              <div className="miembro-img-wrapper">
                <img src={miembro.imagen} alt={miembro.nombre} className="miembro-img" width="720" height="720" loading="lazy" />
                <span className="member-number">0{index + 1}</span>
              </div>
              <div className="miembro-info">
                <h3>{miembro.nombre}</h3>
                <h4 className="miembro-cargo">{miembro.cargo}</h4>
                <p>{miembro.descripcion}</p>
                {miembro.linkedin && (
                  <a href={miembro.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link" aria-label={`Ver LinkedIn de ${miembro.nombre}`}>
                    <IconLinkedin aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      </section>

      <section className="team-principles">
        <div className="content-wrapper team-principles__grid">
          <div className="team-principles__copy">
            <span>Nuestra forma de colaborar</span>
            <h2>La especialidad importa. La coordinación también.</h2>
            <p>
              Cada responsable aporta una mirada distinta, pero las decisiones se trabajan como un solo equipo para mantener alineados alcance, técnica y ejecución.
            </p>
          </div>
          
          <div className="team-facts">
            <div><strong>40+</strong><span>Proyectos documentados</span></div>
            <div><strong>04</strong><span>Líderes presentados</span></div>
            <div><strong>04</strong><span>Líneas de servicio</span></div>
            <div><strong>PE</strong><span>Cobertura nacional</span></div>
          </div>
        </div>
      </section>

      <section className="team-cta">
        <div className="content-wrapper team-cta__inner">
          <div><span>Trabajemos juntos</span><h2>Háblanos del reto técnico de tu proyecto.</h2></div>
          <Link to="/contacto" className="team-cta__link">Contactar al equipo <ArrowUpRight size={20} /></Link>
        </div>
      </section>
    </div>
  );
};

export default Equipo;
