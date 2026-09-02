import Logo from "../../../assets/logo.png";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { IconFacebook, IconInstagram, IconLinkedin, IconTikTok } from "../icons/Icons";
import { Link } from "react-router-dom";
import { mapsUrl, siteConfig } from "../../data/site";
import "./Footer.scss";

const Footer = () => {
  const footerLinks = [
    { href: "/", label: "Inicio" },
    { href: "/quienes-somos", label: "Quiénes Somos" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/equipo", label: "Equipo" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container footer-v2">
        <div className="footer-v2__topbar">
          <Link to="/" className="footer-v2__brand" aria-label="Ir al inicio de YR Ingenieros">
            <img src={Logo} alt="YR Ingenieros E.I.R.L." width="512" height="155" />
          </Link>

          <nav className="footer-v2__nav" aria-label="Navegación del pie de página">
            {footerLinks.map((link) => <Link key={link.href} to={link.href}>{link.label}</Link>)}
          </nav>

          <div className="footer-v2__social">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <IconFacebook aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <IconInstagram aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <IconTikTok aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <IconLinkedin aria-hidden="true" />
              </a>
          </div>
        </div>

        <div className="footer-v2__statement">
          <div className="footer-v2__copy">
            <span>Ingeniería que acompaña tus decisiones</span>
            <h2>
              Diseñamos tu sueño
              <em>y construimos tu futuro.</em>
            </h2>
          </div>

          <div className="footer-v2__contact-card">
            <p>¿Tienes un proyecto en mente?</p>
            <Link to="/contacto" className="footer-v2__action">
              Conversemos <ArrowUpRight aria-hidden="true" />
            </Link>
            <div className="footer-v2__direct">
              <a href={`tel:${siteConfig.phoneInternational}`}><Phone aria-hidden="true" />{siteConfig.phoneDisplay}</a>
              <a href={`mailto:${siteConfig.email}`}><Mail aria-hidden="true" />{siteConfig.email}</a>
            </div>
          </div>
        </div>

        <div className="footer-v2__bottom">
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="footer-v2__address">
            <MapPin aria-hidden="true" /><span>{siteConfig.address}</span>
          </a>
          <p>© {currentYear} {siteConfig.name}</p>
          <Link to="/privacidad">Privacidad</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
