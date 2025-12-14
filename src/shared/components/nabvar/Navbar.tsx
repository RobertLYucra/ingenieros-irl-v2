import { IonIcon } from "@ionic/react";
import Logo from "../../../assets/logo.png";
import "./Navbar.scss";
import {
  arrowForward,
  menuOutline,
  closeOutline,
  logoFacebook,
  logoInstagram,
  logoLinkedin,
  mailOutline,
} from "ionicons/icons";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "quienes-somos", label: "Quiénes Somos" },
    { href: "servicios", label: "Servicios" },
    { href: "proyectos", label: "Proyectos" },
    { href: "equipo", label: "Equipo" },
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Cierra con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`backdrop ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`navbar ${isScrolled ? "scrolled" : ""} ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="main-nav">
          <div className="prueba-div">
            <a href="/">
              <img src={Logo} className="logo" alt="logo" />
            </a>
          </div>

          <div className="right">
            <div className={`nav-ul ${isOpen ? "open" : ""}`}>
              <div className={`nav-ul__panel ${isOpen ? "open" : ""}`}>
                {/* Botón cerrar dentro del panel */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="close-button"
                  aria-label="Cerrar menú"
                >
                  <IonIcon className="close-icon" icon={closeOutline} />
                </button>

                <ul className="links">
                  {navLinks.map((link) => (
                    <li key={link.href} className="etiquetas">
                      <a href={link.href} onClick={() => setIsOpen(false)}>
                        {link.label}
                      </a>
                      <IonIcon className="icon" icon={arrowForward} />
                    </li>
                  ))}
                </ul>

                {/* Content to fill empty space */}
                <div className="mobile-extra-content">
                  <p className="extra-title">Síguenos</p>
                  <div className="social-row">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IonIcon icon={logoFacebook} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IonIcon icon={logoInstagram} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IonIcon icon={logoLinkedin} />
                    </a>
                  </div>
                  <div className="contact-row">
                    <IonIcon icon={mailOutline} />
                    <span>contacto@yr-ingenieros.com</span>
                  </div>
                </div>

                <div className="mobile-contact-container">
                  <a
                    href="contacto"
                    className="mobile-contacto-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    CONTACTOS
                  </a>
                </div>
              </div>
            </div>

            <a href="contacto" className="contacto">
              CONTACTOS
            </a>

            <button
              onClick={toggleNavbar}
              className={`menu ${isOpen ? "open" : ""}`}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <IonIcon
                className="menu-icon"
                icon={isOpen ? closeOutline : menuOutline}
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
