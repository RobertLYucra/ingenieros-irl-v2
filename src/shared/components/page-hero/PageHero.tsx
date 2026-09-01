import type { CSSProperties } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./PageHero.scss";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage: string;
  eyebrow?: string;
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const PageHero = ({ title, subtitle, bgImage, eyebrow = "YR Ingenieros" }: PageHeroProps) => (
    <header
      className="page-hero"
      style={{ "--page-hero-image": `url(${bgImage})` } as CSSProperties}
    >
      <div className="page-hero__media" aria-hidden="true" />
      <div className="page-hero__grid" aria-hidden="true" />

      <div className="page-hero__inner">
        <motion.div
          className="page-hero__content"
          initial="hidden"
          animate="visible"
          variants={reveal}
        >
          <div className="page-hero__breadcrumb">
            <Link to="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span>{eyebrow}</span>
          </div>
          <p className="page-hero__eyebrow">
            <span aria-hidden="true" />
            Ingeniería que se puede construir
          </p>
          <h1>{title}</h1>
          {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        </motion.div>

        <div className="page-hero__rail" aria-label="Áreas de trabajo">
          <span>Diseño</span>
          <span>Supervisión</span>
          <span>Gestión</span>
          <span>Construcción</span>
          <ArrowDownRight aria-hidden="true" />
        </div>
      </div>
    </header>
  );

export default PageHero;
