import { useEffect, useState } from "react";
import "./Trayectoria.scss";
import { proyectosMock } from "../../shared/data/proyectos";
import type { Proyecto } from "../../shared/data/proyectos";
import BannerImg from "../../shared/images/ai-generated/hero_bg.png";
import PageHero from "../../shared/components/page-hero/PageHero";

const Trayectoria = () => {
  const [filtro, setFiltro] = useState<string>('Todos');
  const [proyectos, setProyectos] = useState<Proyecto[]>(proyectosMock);
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<Proyecto | null>(null);

  useEffect(() => {
    document.title = "Proyectos - YR INGENIEROS E.I.R.L.";
  }, []);

  const categorias = ['Todos', 'Diseño Estructural', 'Supervisión', 'Construcción', 'Gestión'];

  const handleFilter = (categoria: string) => {
    setFiltro(categoria);
    setVisibleCount(4); // Reset pagination on filter change
    if (categoria === 'Todos') {
      setProyectos(proyectosMock);
    } else {
      setProyectos(proyectosMock.filter(p => p.categoria === categoria));
    }
  };

  const handleShowMore = () => {
    setVisibleCount(proyectos.length);
  };

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (proyectoSeleccionado) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [proyectoSeleccionado]);

  return (
    <div className="page-container bg-light">
      <PageHero 
        title="Nuestra Trayectoria"
        subtitle="En los últimos 9 años, hemos participado en una amplia variedad de proyectos de construcción y diseño estructural. Destacamos por haber participado en proyectos emblemáticos como la Línea 1 y 2 del Metro de Lima, el Puente Nanay y los centros comerciales más grandes del Perú."
        bgImage={BannerImg}
      />
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
          {proyectos.slice(0, visibleCount).map(proyecto => (
            <div className="proyecto-card" key={proyecto.id} onClick={() => setProyectoSeleccionado(proyecto)}>
              
              <div className="proyecto-img-container">
                <img src={proyecto.imagen} alt={proyecto.titulo} className="proyecto-img" />
                <span className="badge-categoria">{proyecto.categoria}</span>
                <div className="proyecto-overlay">
                  <span>Ver Proyecto</span>
                </div>
              </div>
              
              <div className="proyecto-info">
                <div className="info-header">
                  <h3>{proyecto.titulo}</h3>
                  <span className={`badge-estado ${proyecto.estado.replace(' ', '-').toLowerCase()}`}>
                    <span className="estado-dot"></span>
                    {proyecto.estado}
                  </span>
                </div>
                
                <p className="proyecto-desc">{proyecto.descripcion}</p>
                
                <div className="proyecto-meta">
                  <div className="meta-item">
                    <span className="meta-lbl">Cliente:</span>
                    <span className="meta-val">{proyecto.cliente}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-lbl">Ubicación:</span>
                    <span className="meta-val">{proyecto.ubicacion}</span>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        {visibleCount < proyectos.length && (
          <div className="load-more-container">
            <button className="btn-primary" onClick={handleShowMore} style={{ padding: '0.8rem 2.5rem', fontSize: '1.1rem' }}>
              Ver todos los proyectos
            </button>
          </div>
        )}
      </div>

      {/* Modal de Proyecto */}
      {proyectoSeleccionado && (
        <div className="proyecto-modal-overlay" onClick={() => setProyectoSeleccionado(null)}>
          <div className="proyecto-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setProyectoSeleccionado(null)}>×</button>
            
            <div className="modal-img-col">
               <img src={proyectoSeleccionado.imagen} alt={proyectoSeleccionado.titulo} />
               <div className="modal-badge-categoria">{proyectoSeleccionado.categoria}</div>
            </div>
            
            <div className="modal-info-col">
               <h2>{proyectoSeleccionado.titulo}</h2>
               
               <div className={`modal-badge-estado ${proyectoSeleccionado.estado.replace(' ', '-').toLowerCase()}`}>
                  <span className="estado-dot"></span>
                  {proyectoSeleccionado.estado}
               </div>
               
               <p className="modal-desc">{proyectoSeleccionado.descripcion}</p>
               
               <div className="modal-datos">
                  <div className="modal-dato-item">
                     <strong>Cliente:</strong>
                     <span>{proyectoSeleccionado.cliente}</span>
                  </div>
                  <div className="modal-dato-item">
                     <strong>Ubicación:</strong>
                     <span>{proyectoSeleccionado.ubicacion}</span>
                  </div>
                  <div className="modal-dato-item">
                     <strong>Fecha:</strong>
                     <span>2023 - 2024</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trayectoria;
