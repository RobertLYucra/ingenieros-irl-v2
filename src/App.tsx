import "./App.scss";
import Navbar from "./shared/components/nabvar/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./shared/components/footer/Footer";
import Inicio from "./modules/inicio/Inicio";
import Nosotros from "./modules/nosotros/Nosotros";
import Servicios from "./modules/servicios/Servicios";
import Trayectoria from "./modules/trayectoria/Trayectoria";
import Equipo from "./modules/equipo/Equipo";
import Contacto from "./modules/contacto/Contacto";

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
            {/* Temporary mapping just to scroll to footer or similar */}
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
