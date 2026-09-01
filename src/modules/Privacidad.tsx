import { Link } from "react-router-dom";
import PageHero from "../shared/components/page-hero/PageHero";
import BannerImg from "../shared/images/ai-generated/project_3.webp";
import { siteConfig } from "../shared/data/site";
import "./Privacidad.scss";

const Privacidad = () => (
  <div className="page-container bg-light privacy-page">
    <PageHero
      title="Política de Privacidad"
      subtitle="Cómo utilizamos la información que nos envías a través de nuestros canales de contacto."
      bgImage={BannerImg}
    />
    <div className="content-wrapper section-padding">
      <article className="privacy-content">
        <p className="privacy-updated">Última actualización: septiembre de 2026</p>
        <h2>Información que recopilamos</h2>
        <p>
          Cuando solicitas una cotización podemos recibir tu nombre, correo, teléfono,
          servicio de interés y los detalles que decidas compartir sobre tu proyecto.
        </p>
        <h2>Para qué la utilizamos</h2>
        <p>
          Utilizamos esta información exclusivamente para responder tu consulta,
          preparar una propuesta y dar seguimiento a la relación comercial solicitada.
        </p>
        <h2>Conservación y protección</h2>
        <p>
          Conservamos los datos durante el tiempo necesario para atender la solicitud y
          cumplir las obligaciones aplicables. Aplicamos medidas razonables para evitar
          accesos, alteraciones o divulgaciones no autorizadas.
        </p>
        <h2>Tus solicitudes</h2>
        <p>
          Puedes pedir información, actualización o eliminación de tus datos escribiendo
          a <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
        <p className="privacy-back">
          <Link to="/contacto" className="btn-primary">Volver a contacto</Link>
        </p>
      </article>
    </div>
  </div>
);

export default Privacidad;

