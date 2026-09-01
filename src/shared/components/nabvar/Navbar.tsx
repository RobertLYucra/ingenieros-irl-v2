import Logo from "../../../assets/logo.png";
import "./Navbar.scss";
import {
  ArrowRight,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { IconFacebook, IconInstagram, IconLinkedin } from "../icons/Icons";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "../../data/site";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/quienes-somos", label: "Quiénes Somos" },
    { href: "/servicios", label: "Servicios" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/equipo", label: "Equipo" },
  ];

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Bloquea scroll del body cuando está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) {
      window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Cierra con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Cerrar menú de navegación"
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        className={`backdrop ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        aria-label="Navegación principal"
        className={`navbar ${isScrolled ? "scrolled" : ""} ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="main-nav">
          <div className="prueba-div">
            <Link to="/" aria-label="Ir al inicio de YR Ingenieros">
              <img src={Logo} className="logo" alt="YR Ingenieros E.I.R.L." width="512" height="155" />
            </Link>
          </div>

          <div className="right">
            <div id="mobile-navigation" className={`nav-ul ${isOpen ? "open" : ""}`} aria-hidden={!isOpen && window.innerWidth <= 1240}>
              <div className={`nav-ul__panel ${isOpen ? "open" : ""}`}>
                {/* Botón cerrar dentro del panel */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="close-button"
                  aria-label="Cerrar menú"
                >
                  <X className="close-icon" aria-hidden="true" />
                </button>

                <ul className="links">
                  {navLinks.map((link) => (
                    <li key={link.href} className="etiquetas">
                      <NavLink to={link.href} onClick={() => setIsOpen(false)}>
                        {link.label}
                      </NavLink>
                      <ArrowRight className="icon" aria-hidden="true" />
                    </li>
                  ))}
                  <li className="etiquetas mobile-only-link">
                    <NavLink to="/contacto" onClick={() => setIsOpen(false)}>
                      Contacto
                    </NavLink>
                    <ArrowRight className="icon" aria-hidden="true" />
                  </li>
                </ul>

                {/* Content to fill empty space */}
                <div className="mobile-extra-content">
                  <p className="extra-title">Síguenos</p>
                  <div className="social-row">
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
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      <IconLinkedin aria-hidden="true" />
                    </a>
                  </div>
                  <div className="contact-row">
                    <Mail aria-hidden="true" />
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </div>
                </div>

                <div className="mobile-contact-container">
                  <Link
                    to="/contacto"
                    className="mobile-contacto-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    SOLICITAR COTIZACIÓN
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/contacto" className="contacto">
              CONTACTO
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={toggleNavbar}
              className={`menu ${isOpen ? "open" : ""}`}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="menu-icon" aria-hidden="true" /> : <Menu className="menu-icon" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
