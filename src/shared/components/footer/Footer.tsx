import Logo from "../../../assets/logo.png";
import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoInstagram,
  logoLinkedin,
  logoYoutube,
  arrowForward,
} from "ionicons/icons";
import "./Footer.scss";

const Footer = () => {
  const footerLinks = [
    { href: "/", label: "Inicio" },
    { href: "quienes-somos", label: "Quiénes Somos" },
    { href: "servicios", label: "Servicios" },
    { href: "proyectos", label: "Proyectos" },
    { href: "equipo", label: "Equipo" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-logo-section">
            <a href="/">
              <img
                src={Logo}
                alt="Ingenieros EIRL Logo"
                className="footer-logo"
              />
            </a>
            <p className="footer-description">
              Construcción e ingeniería de excelencia para el desarrollo del
              Perú. Brindamos soluciones integrales y sostenibles.
            </p>
            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <IonIcon icon={logoFacebook} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <IonIcon icon={logoInstagram} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <IonIcon icon={logoLinkedin} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <IonIcon icon={logoYoutube} />
              </a>
            </div>
          </div>

          <div className="footer-links-section">
            <h3>Navegación</h3>
            <ul className="links-list">
              {footerLinks.map((link) => (
                <li key={link.href} className="footer-link-item">
                  <a href={link.href}>{link.label}</a>
                  <IonIcon className="icon" icon={arrowForward} />
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-section">
            <h3>Contacto</h3>
            <div className="contact-info">
              <p>Jr. Manuel Villavicencio 1711, Lince</p>
              <p>Lima, Perú</p>
              <p className="phone">
                <a
                  href="tel:+51954185870"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  +51 954 185 870
                </a>
              </p>
              <p className="email">
                <a
                  href="mailto:contacto@yringenieroseirl.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  contacto@yringenieroseirl.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} YR Ingenieros EIRL. Todos los derechos reservados.
          </p>
          <p>Diseñado con excelencia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
