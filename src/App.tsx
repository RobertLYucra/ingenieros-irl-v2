import "./App.scss";
import { IonIcon } from "@ionic/react";
import { logoWhatsapp } from "ionicons/icons";
import Navbar from "./shared/components/nabvar/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./shared/components/footer/Footer";
import Inicio from "./modules/inicio/Inicio";
import Nosotros from "./modules/nosotros/Nosotros";
import Servicios from "./modules/servicios/Servicios";
import Trayectoria from "./modules/trayectoria/Trayectoria";
import Equipo from "./modules/equipo/Equipo";
import Contacto from "./modules/contacto/Contacto";
import NotFound from "./modules/not-found/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <div className="routes-main">
        <div className="routes">
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/quienes-somos" element={<Nosotros />}></Route>
            <Route path="/servicios" element={<Servicios />}></Route>
            <Route path="/proyectos" element={<Trayectoria />}></Route>
            <Route path="/equipo" element={<Equipo />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            {/* Rutas no encontradas */}
            <Route path="*" element={<NotFound />}></Route>
            {/* Temporary mapping just to scroll to footer or similar */}
          </Routes>
        </div>
      </div>
      <a
        href="https://wa.me/51932711516"
        className="whatsapp-float-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contáctanos por WhatsApp"
      >
        <IonIcon icon={logoWhatsapp} />
      </a>
      <Footer />
    </>
  );
}

export default App;
