import "./Nosotros.scss";
import { IconMision, IconVision, IconShieldCheck, IconConstruccion, IconDisenoEstructural, IconSupervision } from "../../shared/components/icons/Icons";
import HeroBg from "../../shared/images/ai-generated/project_3.webp";
import HistoriaMainImg from "../../shared/images/servicios/supervicion.webp";
import PageHero from "../../shared/components/page-hero/PageHero";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <div className="page-container nosotros-page">
      <PageHero 
        eyebrow="Nosotros"
        title="Ingeniería con criterio y cercanía"
        subtitle="Convertimos decisiones estructurales complejas en soluciones claras, coordinadas y ejecutables para cada proyecto."
        bgImage={HeroBg} 
      />

      <section className="about-intro">
        <div className="content-wrapper about-intro__grid">
          <div className="about-intro__label">
            <span>01</span>
            <p>Nuestra manera de trabajar</p>
          </div>
          <div className="about-intro__copy">
            <h2>No entregamos solo cálculos. Entregamos decisiones que funcionan en obra.</h2>
            <div className="about-intro__body">
              <p>
                <strong>YR Ingenieros E.I.R.L.</strong> reúne especialistas en análisis, diseño,
                supervisión y ejecución de estructuras. Nuestro trabajo parte de comprender el uso,
                el terreno y las restricciones reales del proyecto.
              </p>
              <p>
                Desarrollamos soluciones en concreto armado, acero, albañilería confinada y muros de
                ductilidad limitada, acompañadas por planos coordinados y memorias de cálculo según la
                normativa aplicable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-proof">
        <div className="content-wrapper about-proof__grid">
          <div className="about-proof__visual">
            <img src={HistoriaMainImg} alt="Equipo realizando supervisión técnica en obra" loading="lazy" decoding="async" />
            <div className="about-proof__metric">
              <strong>40+</strong>
              <span>proyectos documentados</span>
            </div>
          </div>

          <div className="about-proof__content">
            <p className="section-kicker">Capacidad técnica</p>
            <h2>Un proceso que conecta el plano con la realidad.</h2>
            <p className="about-proof__lead">
              Coordinamos información, verificamos criterios y acompañamos la ejecución para reducir
              incertidumbre, retrabajos y decisiones tardías.
            </p>
            <div className="about-capabilities">
              <article>
                <IconShieldCheck size={27} />
                <div><h3>Normativa aplicable</h3><p>Diseño y revisión bajo criterios técnicos vigentes.</p></div>
              </article>
              <article>
                <IconConstruccion size={27} />
                <div><h3>Especialización</h3><p>Enfoque estructural durante todo el ciclo del proyecto.</p></div>
              </article>
              <article>
                <IconSupervision size={27} />
                <div><h3>Control en obra</h3><p>Seguimiento técnico de calidad, avance y observaciones.</p></div>
              </article>
              <article>
                <IconDisenoEstructural size={27} />
                <div><h3>Coordinación BIM</h3><p>Información compatible y útil para tomar decisiones.</p></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="about-purpose">
        <div className="content-wrapper about-purpose__grid">
          <article>
            <div className="purpose-card__top"><span>01</span><IconMision size={32} /></div>
            <h2>Misión</h2>
            <p>
              Resolver las necesidades de ingeniería e infraestructura de nuestros clientes,
              acompañando cada proyecto con excelencia, vocación de servicio y compromiso técnico.
            </p>
          </article>
          <article>
            <div className="purpose-card__top"><span>02</span><IconVision size={32} /></div>
            <h2>Visión</h2>
            <p>
              Ser reconocidos como una empresa de ingeniería e infraestructura confiable en el Perú,
              destacada por su innovación, claridad técnica y resultados sostenibles.
            </p>
          </article>
        </div>
      </section>

      <section className="about-values">
        <div className="content-wrapper">
          <div className="about-values__heading">
            <p className="section-kicker">Lo que nos guía</p>
            <h2>Valores que se notan en el resultado.</h2>
          </div>
          <div className="about-values__list">
            {[
              ["01", "Compromiso", "Acompañamos el proyecto hasta convertir decisiones en resultados."],
              ["02", "Honestidad", "Comunicamos alcances, riesgos y alternativas de forma transparente."],
              ["03", "Innovación", "Aplicamos herramientas que mejoran la coordinación y el control."],
              ["04", "Excelencia", "Cuidamos el detalle técnico y la calidad de cada entregable."],
            ].map(([number, name, description]) => (
              <article key={name}>
                <span>{number}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="content-wrapper about-cta__inner">
          <div>
            <p className="section-kicker">Conversemos</p>
            <h2>¿Tienes un proyecto que necesita una mirada estructural?</h2>
          </div>
          <Link to="/contacto" className="about-cta__link">Evaluar mi proyecto <ArrowUpRight size={20} /></Link>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
