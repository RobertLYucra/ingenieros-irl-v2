import Logo from "../../../assets/logo.png";
import "./Navbar.scss";
import {
  ArrowRight,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { IconFacebook, IconInstagram, IconLinkedin, IconTikTok } from "../icons/Icons";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "../../data/site";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
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
    setIsOpen((current) => !current);
  };

  const closeNavbar = (restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  const handleNavigation = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => {
      document.getElementById("contenido-principal")?.focus();
    });
  };

  // Bloquea scroll del body cuando está abierto
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Mantiene el foco dentro del panel y permite cerrarlo con Escape.
  useEffect(() => {
    if (!isOpen) return;

    const handleMenuKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || !menuPanelRef.current) return;

      const focusableElements = Array.from(
        menuPanelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (!firstElement || !lastElement) return;

      if (!menuPanelRef.current.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? lastElement : firstElement).focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleMenuKeyboard);
    return () => document.removeEventListener("keydown", handleMenuKeyboard);
  }, [isOpen]);

  // Cierra el panel si una tablet cambia a una vista de escritorio.
  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 1240px)");
    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (!event.matches) setIsOpen(false);
    };
    mobileQuery.addEventListener("change", handleBreakpointChange);
    return () => mobileQuery.removeEventListener("change", handleBreakpointChange);
  }, []);

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
        aria-hidden="true"
        tabIndex={-1}
        className={`backdrop ${isOpen ? "show" : ""}`}
        onClick={() => closeNavbar(true)}
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
            <div id="mobile-navigation" className={`nav-ul ${isOpen ? "open" : ""}`}>
              <div ref={menuPanelRef} className={`nav-ul__panel ${isOpen ? "open" : ""}`}>
                {/* Botón cerrar dentro del panel */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => closeNavbar(true)}
                  className="close-button"
                  aria-label="Cerrar menú"
                >
                  <X className="close-icon" aria-hidden="true" />
                </button>

                <ul className="links">
                  {navLinks.map((link) => (
                    <li key={link.href} className="etiquetas">
                      <NavLink to={link.href} onClick={handleNavigation}>
                        {link.label}
                      </NavLink>
                      <ArrowRight className="icon" aria-hidden="true" />
                    </li>
                  ))}
                  <li className="etiquetas mobile-only-link">
                    <NavLink to="/contacto" onClick={handleNavigation}>
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
                  <div className="contact-row">
                    <Mail aria-hidden="true" />
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </div>
                </div>

                <div className="mobile-contact-container">
                  <Link
                    to="/contacto"
                    className="mobile-contacto-btn"
                    onClick={handleNavigation}
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
              aria-hidden={isOpen}
              tabIndex={isOpen ? -1 : 0}
            >
              <Menu className="menu-icon" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
