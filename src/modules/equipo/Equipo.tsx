import { useEffect } from "react";
import "./Equipo.scss";
import { equipoMock } from "../../shared/data/equipo";
import BannerImg from "../../shared/images/ai-generated/service_2.png";

const Equipo = () => {
  useEffect(() => {
    document.title = "Nuestro Equipo - YR INGENIEROS E.I.R.L.";
  }, []);

  return (
    <div className="page-container bg-light">
      <div className="page-hero" style={{ backgroundImage: `url(${BannerImg})` }}>
        <div className="content-wrapper">
          <h1 className="section-title">Nuestros Profesionales</h1>
          <p className="section-description">
            Contamos con un equipo multidisciplinario de ingenieros y especialistas
            altamente capacitados y comprometidos con la excelencia en cada proyecto.
          </p>
        </div>
      </div>
      <div className="content-wrapper section-padding">

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipo;
