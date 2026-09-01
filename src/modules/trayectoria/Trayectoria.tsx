import { useEffect, useState, useRef } from "react";
import "./Trayectoria.scss";
import { proyectosMock } from "../../shared/data/proyectos";
import type { Proyecto } from "../../shared/data/proyectos";
import BannerImg from "../../shared/images/ai-generated/hero_bg.webp";
import PageHero from "../../shared/components/page-hero/PageHero";
import { X, PlayCircle, MapPin, User, CheckCircle2, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from "react-router-dom";

const ProyectoCard = ({ proyecto, onClick }: { proyecto: Proyecto, onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    // Retardo sutil de 150ms para evitar cargas accidentales al pasar rápido el mouse
    hoverTimeoutRef.current = window.setTimeout(() => {
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 150);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div 
      className="proyecto-card" 
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      aria-label={`Ver proyecto: ${proyecto.titulo}`}
    >
      <div className="proyecto-img-container">
        
        {/* Ambient Blurred Background to fix mixed aspect ratios (vertical/horizontal) */}
        {proyecto.tipoMedia === 'vimeo' ? (
          <img src={`https://vumbnail.com/${proyecto.imagen}.jpg`} className="ambient-background" alt="" loading="lazy" decoding="async" />
        ) : (
          proyecto.tipoMedia !== 'video' && <img src={proyecto.imagen} className="ambient-background" alt="" loading="lazy" decoding="async" />
        )}

        {proyecto.tipoMedia === 'video' ? (
          <>
            <video ref={videoRef} src={proyecto.imagen} className="proyecto-img" muted loop playsInline style={{ objectFit: 'contain' }} />
            {!isHovered && (
              <div className="video-icon-overlay-grid">
                <PlayCircle size={48} color="white" strokeWidth={1.5} />
              </div>
            )}
          </>
        ) : proyecto.tipoMedia === 'vimeo' ? (
          <>
            {isHovered ? (
              <iframe 
                src={`https://player.vimeo.com/video/${proyecto.imagen}?background=1&autoplay=1&loop=1&byline=0&title=0&transparent=1`} 
                className="proyecto-img" 
                allow="autoplay; fullscreen" 
                style={{ pointerEvents: 'none', border: 'none' }}
                title={`Vista previa de ${proyecto.titulo}`}
                loading="lazy"
              />
            ) : (
              <img 
                src={`https://vumbnail.com/${proyecto.imagen}.jpg`} 
                alt={proyecto.titulo} 
                className="proyecto-img" 
                style={{ objectFit: 'contain' }}
                loading="lazy"
                decoding="async"
              />
            )}
            {!isHovered && (
              <div className="video-icon-overlay-grid">
                <PlayCircle size={48} color="white" strokeWidth={1.5} />
              </div>
            )}
          </>
        ) : (
          <img src={proyecto.imagen} alt={proyecto.titulo} className="proyecto-img" style={{ objectFit: 'contain' }} loading="lazy" decoding="async" />
        )}
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
  );
};

const Trayectoria = () => {
  const [filtro, setFiltro] = useState<string>('Todos');
  const [proyectos, setProyectos] = useState<Proyecto[]>(proyectosMock);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<Proyecto | null>(null);
  const [activeMedia, setActiveMedia] = useState<{ url: string, tipoMedia: 'imagen' | 'video' | 'vimeo' } | null>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const categorias = ['Todos', ...Array.from(new Set(proyectosMock.map((proyecto) => proyecto.categoria)))];

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
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setProyectoSeleccionado(null);
          setActiveMedia(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      window.requestAnimationFrame(() => modalCloseRef.current?.focus());
      return () => {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener("keydown", handleKeyDown);
        lastFocusedRef.current?.focus();
      };
    }
  }, [proyectoSeleccionado]);

  return (
    <div className="page-container projects-page">
      <PageHero 
        eyebrow="Proyectos"
        title="Trabajo construido. Experiencia comprobable."
        subtitle="Una selección de proyectos de diseño estructural y construcción desarrollados para distintos usos, escalas y ciudades del Perú."
        bgImage={BannerImg}
      />
      <section className="projects-catalog">
      <div className="content-wrapper">

        <div className="projects-heading">
          <div>
            <span className="projects-heading__kicker">Portafolio seleccionado</span>
            <h2>Proyectos que explican cómo trabajamos.</h2>
          </div>
          <p>Explora los casos por especialidad y abre cada ficha para ver sus datos y recursos disponibles.</p>
        </div>

        {/* Filtros */}
        <div className="filtros-container">
          {categorias.map(cat => (
            <button 
              key={cat}
              className={`filtro-btn ${filtro === cat ? 'active' : ''}`}
              onClick={() => handleFilter(cat)}
              aria-pressed={filtro === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Galería de Proyectos */}
        <div className="proyectos-grid">
          {proyectos.slice(0, visibleCount).map(proyecto => (
            <ProyectoCard 
              key={proyecto.id} 
              proyecto={proyecto} 
              onClick={() => {
                lastFocusedRef.current = document.activeElement as HTMLElement;
                setProyectoSeleccionado(proyecto);
                setActiveMedia({ url: proyecto.imagen, tipoMedia: proyecto.tipoMedia || 'imagen' });
              }} 
            />
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
      </section>

      <section className="projects-cta">
        <div className="content-wrapper projects-cta__inner">
          <span className="projects-cta__number">40+</span>
          <div>
            <p>Proyectos documentados</p>
            <h2>El próximo puede comenzar con una conversación.</h2>
          </div>
          <Link to="/contacto" className="projects-cta__link">Hablar de mi proyecto <ArrowUpRight size={20} /></Link>
        </div>
      </section>

      {/* Modal de Proyecto */}
      {proyectoSeleccionado && (
        <div className="proyecto-modal-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) { setProyectoSeleccionado(null); setActiveMedia(null); } }}>
          <div className="proyecto-modal-content" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <button ref={modalCloseRef} type="button" className="modal-close" aria-label="Cerrar proyecto" onClick={() => { setProyectoSeleccionado(null); setActiveMedia(null); }}>
              <X size={28} strokeWidth={2.5} />
            </button>
            
            <div className="modal-img-col">
               {activeMedia?.tipoMedia === 'video' ? (
                 <video src={activeMedia.url} controls autoPlay className="modal-video" key={activeMedia.url} />
               ) : activeMedia?.tipoMedia === 'vimeo' ? (
                 <iframe 
                   src={`https://player.vimeo.com/video/${activeMedia.url}?autoplay=1&color=ffffff&title=0&byline=0&portrait=0`} 
                   className="modal-video" 
                   allow="autoplay; fullscreen" 
                   style={{ border: 'none', width: '100%', height: '100%' }}
                   key={activeMedia.url}
                   title={`Video de ${proyectoSeleccionado.titulo}`}
                 />
               ) : (
                 <img src={activeMedia?.url || ''} alt={proyectoSeleccionado.titulo} key={activeMedia?.url || 'img'} />
               )}
               
               <div className="modal-badge-categoria">{proyectoSeleccionado.categoria}</div>
            </div>
            
            <div className="modal-info-col">
               <div className="modal-info-content">
                 <h2 id="project-modal-title">{proyectoSeleccionado.titulo}</h2>
                 
                 <div className={`modal-badge-estado ${proyectoSeleccionado.estado.replace(' ', '-').toLowerCase()}`}>
                    {proyectoSeleccionado.estado === 'Completado' ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <Clock size={16} />
                    )}
                    {proyectoSeleccionado.estado}
                 </div>
                 
                 <p className="modal-desc">{proyectoSeleccionado.descripcion}</p>
                 
                 <div className="modal-datos">
                    <div className="modal-dato-item">
                       <div className="dato-header">
                         <User size={16} className="dato-icon" />
                         <strong>Cliente</strong>
                       </div>
                       <span>{proyectoSeleccionado.cliente}</span>
                    </div>
                    <div className="modal-dato-item">
                       <div className="dato-header">
                         <MapPin size={16} className="dato-icon" />
                         <strong>Ubicación</strong>
                       </div>
                       <span>{proyectoSeleccionado.ubicacion}</span>
                    </div>
                 </div>
               </div>

               {proyectoSeleccionado.galeria && proyectoSeleccionado.galeria.length > 0 && (
                 <div className="modal-galeria-container">
                   <h4 className="galeria-title">Galería del Proyecto</h4>
                   <div className="modal-galeria">
                     {proyectoSeleccionado.galeria.map((item, idx) => (
                       <button
                         type="button"
                         key={idx} 
                         className={`modal-thumbnail ${activeMedia?.url === item.url ? 'active' : ''}`}
                         onClick={() => setActiveMedia(item)}
                         aria-label={`Mostrar recurso ${idx + 1} de ${proyectoSeleccionado.titulo}`}
                       >
                         {item.tipoMedia === 'video' ? (
                           <video src={item.url} />
                         ) : item.tipoMedia === 'vimeo' ? (
                           <img src={`https://vumbnail.com/${item.url}.jpg`} alt={`Video ${idx}`} />
                         ) : (
                           <img src={item.url} alt={`miniatura ${idx}`} />
                         )}
                         {(item.tipoMedia === 'video' || item.tipoMedia === 'vimeo') && (
                           <div className="video-icon-overlay">
                             <PlayCircle size={20} color="white" />
                           </div>
                         )}
                       </button>
                     ))}
                   </div>
                 </div>
               )}
               
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trayectoria;
