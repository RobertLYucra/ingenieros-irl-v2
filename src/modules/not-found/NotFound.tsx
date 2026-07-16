import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <motion.div 
        className="not-found-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Página no encontrada</h2>
        <p className="error-text">
          Lo sentimos, la ruta que estás buscando no existe o ha sido movida.
        </p>
        <Link to="/" className="btn-primary back-home-btn">
          Volver al Inicio
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
