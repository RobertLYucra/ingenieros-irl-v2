import "./App.scss";
import { lazy, Suspense } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "./shared/components/nabvar/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./shared/components/footer/Footer";
import SeoManager from "./shared/components/SeoManager";
import ScrollToTop from "./shared/components/ScrollToTop";
import { whatsappUrl } from "./shared/data/site";

const Inicio = lazy(() => import("./modules/inicio/Inicio"));
const Nosotros = lazy(() => import("./modules/nosotros/Nosotros"));
const Servicios = lazy(() => import("./modules/servicios/Servicios"));
const Trayectoria = lazy(() => import("./modules/trayectoria/Trayectoria"));
const Equipo = lazy(() => import("./modules/equipo/Equipo"));
const Contacto = lazy(() => import("./modules/contacto/Contacto"));
const Privacidad = lazy(() => import("./modules/Privacidad"));
const NotFound = lazy(() => import("./modules/not-found/NotFound"));

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido principal
      </a>
      <SeoManager />
      <ScrollToTop />
      <Navbar />

      <main id="contenido-principal" className="routes-main" tabIndex={-1}>
        <Suspense fallback={<div className="route-loading" role="status">Cargando contenido…</div>}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/quienes-somos" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/proyectos" element={<Trayectoria />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <a
        href={whatsappUrl}
        className="whatsapp-float-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contáctanos por WhatsApp"
      >
        <MessageCircle aria-hidden="true" />
      </a>
      <Footer />
    </>
  );
}

export default App;
