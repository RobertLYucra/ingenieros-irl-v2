import { useEffect, useState } from "react";
import "./Trayectoria.scss";
import { proyectosMock } from "../../shared/data/proyectos";
import type { Proyecto } from "../../shared/data/proyectos";
import BannerImg from "../../shared/images/ai-generated/hero_bg.png";

const Trayectoria = () => {
  const [filtro, setFiltro] = useState<string>('Todos');
  const [proyectos, setProyectos] = useState<Proyecto[]>(proyectosMock);

  useEffect(() => {
    document.title = "Proyectos - YR INGENIEROS E.I.R.L.";
  }, []);

  const categorias = ['Todos', 'Diseño Estructural', 'Supervisión', 'Construcción'];

  const handleFilter = (categoria: string) => {
    setFiltro(categoria);
    if (categoria === 'Todos') {
      setProyectos(proyectosMock);
    } else {
      setProyectos(proyectosMock.filter(p => p.categoria === categoria));
    }
  };

  return (
    <div className="page-container bg-light">
      <div className="page-hero" style={{ backgroundImage: `url(${BannerImg})` }}>
        <div className="content-wrapper">
          <h1 className="section-title">Nuestra Trayectoria</h1>
          <p className="section-description">
            Descubre nuestro portafolio de proyectos ejecutados con excelencia,
            seguridad y altos estándares de calidad a nivel nacional.
          </p>
        </div>
      </div>
      <div className="content-wrapper section-padding">

        {/* Filtros */}
        <div className="filtros-container">
          {categorias.map(cat => (
            <button 
              key={cat}
              className={`filtro-btn ${filtro === cat ? 'active' : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Galería de Proyectos */}
        <div className="proyectos-grid">
          {proyectos.map(proyecto => (
            <div className="proyecto-card premium-card" key={proyecto.id}>
              <div className="proyecto-img-container">
                <img src={proyecto.imagen} alt={proyecto.titulo} className="proyecto-img" />
                <div className="proyecto-categoria">{proyecto.categoria}</div>
              </div>
              <div className="proyecto-info">
                <h3>{proyecto.titulo}</h3>
                <div className="proyecto-meta">
                  <span><strong>Cliente:</strong> {proyecto.cliente}</span>
                  <span><strong>Ubicación:</strong> {proyecto.ubicacion}</span>
                  <span><strong>Estado:</strong> <span className={`estado-badge ${proyecto.estado.replace(' ', '-').toLowerCase()}`}>{proyecto.estado}</span></span>
                </div>
                <p>{proyecto.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trayectoria;
