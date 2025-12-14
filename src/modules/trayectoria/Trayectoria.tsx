import { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import {
  locationOutline,
  expandOutline,
  closeOutline,
  calendarOutline,
  pricetagOutline,
} from "ionicons/icons";
import "./Trayectoria.scss";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image_placeholder: string;
  description: string;
}

const Trayectoria = () => {
  useEffect(() => {
    document.title = "Trayectoria - YR INGENIEROS E.I.R.L.";
  }, []);

  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Edificio Multifamiliar Residencial",
      category: "Vivienda",
      location: "Miraflores, Lima",
      year: "2023",
      image_placeholder: "🏢",
      description:
        "Diseño estructural y reforzamiento antisísmico para edificio multifamiliar de 15 pisos con 3 sótanos. Se emplearon sistemas de muros de ductilidad limitada y placas de concreto armado.",
    },
    {
      id: 2,
      title: "Centro Comercial Plaza Norte",
      category: "Comercial",
      location: "Independencia, Lima",
      year: "2022",
      image_placeholder: "🏬",
      description:
        "Supervisión de obra para la ampliación del ala norte. Control de calidad de estructuras metálicas de grandes luces y pavimentos industriales.",
    },
    {
      id: 3,
      title: "Nave Industrial Logística",
      category: "Industrial",
      location: "Lurín, Lima",
      year: "2023",
      image_placeholder: "🏭",
      description:
        "Construcción integral de nave industrial de 5000m². Incluye cimentación profunda, estructura metálica aporticada y losas de alta resistencia.",
    },
    {
      id: 4,
      title: "Clínica Especializada",
      category: "Salud",
      location: "San Borja, Lima",
      year: "2021",
      image_placeholder: "🏥",
      description:
        "Gerencia de proyecto para la remodelación y reforzamiento estructural de clínica existente. Implementación de aisladores sísmicos.",
    },
    {
      id: 5,
      title: "Reforzamiento Estructural Colegio",
      category: "Educación",
      location: "Arequipa",
      year: "2020",
      image_placeholder: "🏫",
      description:
        "Evaluación y reforzamiento de infraestructura educativa. Refuerzo con fibra de carbono y encamisado de columnas.",
    },
    {
      id: 6,
      title: "Condominio Las Praderas",
      category: "Vivienda",
      location: "Piura",
      year: "2022",
      image_placeholder: "🏡",
      description:
        "Diseño y supervisión de conjunto habitacional de 10 bloques de 5 pisos. Diseño optimizado con albañilería confinada.",
    },
  ];

  const categories = [
    "Todos",
    "Vivienda",
    "Comercial",
    "Industrial",
    "Salud",
    "Educación",
  ];

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  return (
    <div className="page-container trayectoria-page">
      {/* Internal Hero */}
      <section className="internal-hero">
        <div className="overlay"></div>
        <div className="content-wrapper">
          <h1>Nuestra Trayectoria</h1>
          <p>
            Un portafolio sólido construido sobre la confianza y la excelencia
            técnica
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="project-stats-section">
        <div className="content-wrapper stats-flex">
          <div className="p-stat">
            <span className="value">+50</span>
            <span className="label">Proyectos Ejecutados</span>
          </div>
          <div className="p-stat">
            <span className="value">100k+</span>
            <span className="label">m² Diseñados</span>
          </div>
          <div className="p-stat">
            <span className="value">100%</span>
            <span className="label">Clientes Satisfechos</span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section section-padding">
        <div className="content-wrapper">
          {/* Filters */}
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div
                className="project-card"
                key={project.id}
                onClick={() => openModal(project)}
              >
                <div className="card-image">
                  <div className="placeholder-img">
                    {project.image_placeholder}
                  </div>
                  <div className="card-overlay">
                    <button className="view-btn">
                      <IonIcon icon={expandOutline} />
                    </button>
                  </div>
                  <div className="card-badge">{project.category}</div>
                </div>
                <div className="card-info">
                  <h3>{project.title}</h3>
                  <div className="meta-row">
                    <span className="location">
                      <IonIcon icon={locationOutline} /> {project.location}
                    </span>
                    <span className="year">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal-btn" onClick={closeModal}>
              <IonIcon icon={closeOutline} />
            </button>

            <div className="modal-header-image">
              <div className="placeholder-img-large">
                {selectedProject.image_placeholder}
              </div>
              <div className="category-tag">{selectedProject.category}</div>
            </div>

            <div className="modal-body">
              <h2>{selectedProject.title}</h2>

              <div className="modal-meta">
                <div className="meta-item">
                  <IonIcon icon={locationOutline} />
                  <span>{selectedProject.location}</span>
                </div>
                <div className="meta-item">
                  <IonIcon icon={calendarOutline} />
                  <span>Año: {selectedProject.year}</span>
                </div>
                <div className="meta-item">
                  <IonIcon icon={pricetagOutline} />
                  <span>Tipo: {selectedProject.category}</span>
                </div>
              </div>

              <div className="modal-description">
                <h3>Descripción del Proyecto</h3>
                <p>{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trayectoria;
