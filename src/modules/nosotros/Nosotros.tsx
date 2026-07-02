import { useEffect } from "react";
import "./Nosotros.scss";
import { IconMision, IconVision, IconShieldCheck, IconConstruccion, IconDisenoEstructural, IconSupervision } from "../../shared/components/icons/Icons";
import BannerImg from "../../shared/images/ai-generated/project_3.png";
import HistoriaImg2 from "../../shared/images/ai-generated/project_2.png";

import PageHero from "../../shared/components/page-hero/PageHero";
import Team1 from "../../shared/images/ai-generated/team_1.png";
import Team2 from "../../shared/images/ai-generated/team_2.png";
import Team3 from "../../shared/images/ai-generated/team_3.png";

const Nosotros = () => {
  useEffect(() => {
    document.title = "Quiénes Somos - YR INGENIEROS E.I.R.L.";
  }, []);

  return (
    <div className="page-container bg-light nosotros-page">
      <PageHero 
        title="Sobre Nosotros" 
        subtitle="Más de 9 años construyendo el futuro con bases sólidas y visión innovadora."
        bgImage={BannerImg} 
      />

      {/* Historia Section (Rediseñada) */}
      <div className="content-wrapper section-padding">
        <div className="historia-section">
          <div className="historia-image-collage">
            <div className="img-main-wrapper">
              <img src={BannerImg} alt="Nuestro Equipo" className="historia-img main-img" />
              <div className="years-badge-float">
                <span className="years-num">9+</span>
                <span className="years-text">Años de<br/>Experiencia</span>
              </div>
            </div>
            <div className="img-secondary-wrapper">
              <img src={HistoriaImg2} alt="Proyecto en construcción" className="historia-img secondary-img" />
              <div className="pattern-dots"></div>
            </div>
          </div>
          
          <div className="historia-texto">
            <h2 className="section-title text-left">Nuestra Historia</h2>
            <div className="title-underline-left"></div>
            <p className="lead-text">
              Nuestra compañía <strong>YR INGENIEROS E.I.R.L.</strong> cuenta con profesionales 
              altamente capacitados de amplia experiencia, tanto en ejecución como desarrollo de proyectos 
              en el área de Ingeniería Estructural. 
            </p>
            <p>
              Comprende el Análisis y Diseño en Concreto Armado, Acero,
              Albañilería Confinada y Muros de Ductilidad Limitada. Cada proyecto se entrega con sus respectivos 
              planos y memoria de cálculo que consta del Análisis Estático, Análisis Dinámico y 
              Diseño según las normas vigentes.
            </p>
            
            <div className="historia-stats-inline">
              <div className="stat-item">
                <span className="stat-num">50+</span>
                <span className="stat-text">Proyectos<br/>Entregados</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">100%</span>
                <span className="stat-text">Clientes<br/>Satisfechos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificaciones y Licencias */}
      <section className="certificaciones-section section-padding bg-light">
        <div className="content-wrapper text-center">
          <h2 className="section-title">Certificaciones y Licencias</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Operamos bajo los más estrictos estándares de calidad nacional e internacional, avalados por las principales instituciones.
          </p>
          
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-icon-wrapper"><IconShieldCheck size={36} /></div>
              <h4>ISO 9001</h4>
              <p>Gestión de Calidad en Diseño y Construcción</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon-wrapper"><IconConstruccion size={36} /></div>
              <h4>CIP Habilitado</h4>
              <p>Colegio de Ingenieros del Perú</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon-wrapper"><IconSupervision size={36} /></div>
              <h4>Ley 29783 (SST)</h4>
              <p>Seguridad y Salud en el Trabajo</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon-wrapper"><IconDisenoEstructural size={36} /></div>
              <h4>BIM Certified</h4>
              <p>Modelado y Gestión de Información</p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión Section */}
      <section className="mision-vision-section">
        <div className="mv-overlay"></div>
        <div className="content-wrapper mision-vision-grid">
          <div className="mv-card dark-glass-card">
            <div className="mv-icon-wrapper"><IconMision size={40} /></div>
            <h3>Nuestra Misión</h3>
            <p>
              Ser reconocidos como la compañía en servicios de Ingeniería e Infraestructura más confiable del país, 
              superando siempre las expectativas en cada obra que ejecutamos mediante innovación tecnológica y rigor técnico.
            </p>
          </div>
          <div className="mv-card dark-glass-card">
            <div className="mv-icon-wrapper"><IconVision size={40} /></div>
            <h3>Nuestra Visión</h3>
            <p>
              Resolver las necesidades de Servicios de Ingeniería e Infraestructura de nuestros clientes, 
              yendo más allá de las obligaciones contractuales con excelencia, vocación de servicio y compromiso total.
            </p>
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="equipo-section section-padding bg-light">
        <div className="content-wrapper text-center">
          <h2 className="section-title">Nuestro Equipo Directivo</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Contamos con especialistas de primer nivel, comprometidos con la excelencia, la seguridad y la innovación en cada proyecto estructural.
          </p>

          <div className="equipo-grid">
            <div className="team-card">
              <div className="team-img-wrapper">
                <img src={Team1} alt="Ing. Carlos Mendoza" className="team-img" />
                <div className="team-socials">
                  <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                  <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
                </div>
              </div>
              <div className="team-info">
                <h3>Ing. Carlos Mendoza</h3>
                <span>Director de Proyectos</span>
              </div>
            </div>

            <div className="team-card">
              <div className="team-img-wrapper">
                <img src={Team2} alt="Arq. Valeria Ríos" className="team-img" />
                <div className="team-socials">
                  <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                  <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
                </div>
              </div>
              <div className="team-info">
                <h3>Arq. Valeria Ríos</h3>
                <span>Jefa de Arquitectura</span>
              </div>
            </div>

            <div className="team-card">
              <div className="team-img-wrapper">
                <img src={Team3} alt="Ing. Roberto Yucra" className="team-img" />
                <div className="team-socials">
                  <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                  <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
                </div>
              </div>
              <div className="team-info">
                <h3>Ing. Roberto Yucra</h3>
                <span>Gerente General</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <div className="content-wrapper section-padding">
        <div className="valores-section text-center">
          <h2 className="section-title">Valores Empresariales</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Los pilares fundamentales que guían cada decisión y proyecto en YR Ingenieros.
          </p>
          
          <div className="valores-grid">
            <div className="valor-card">
              <div className="valor-icon">01</div>
              <span className="valor-text">Compromiso</span>
            </div>
            <div className="valor-card">
              <div className="valor-icon">02</div>
              <span className="valor-text">Honestidad</span>
            </div>
            <div className="valor-card">
              <div className="valor-icon">03</div>
              <span className="valor-text">Diferencia</span>
            </div>
            <div className="valor-card">
              <div className="valor-icon">04</div>
              <span className="valor-text">Excelencia</span>
            </div>
            <div className="valor-card">
              <div className="valor-icon">05</div>
              <span className="valor-text">Vocación</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
