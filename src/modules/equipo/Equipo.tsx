import "./Equipo.scss";
import { IonIcon } from "@ionic/react";
import {
  logoLinkedin,
  personOutline,
  ribbonOutline,
  closeOutline,
  schoolOutline,
  analyticsOutline,
} from "ionicons/icons";
import { useEffect, useState } from "react";

const Equipo = () => {
  useEffect(() => {
    document.title = "Nuestro Equipo - YR INGENIEROS E.I.R.L.";
  }, []);

  interface Leader {
    name: string;
    role: string;
    education: string;
    degrees: string[];
    specialties: string[];
    bio: string;
  }

  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const leadership: Leader[] = [
    {
      name: "Ing. Romulo Yucra Rodas",
      role: "Gerente General",
      education: "CIP 123456",
      degrees: ["Ingeniero Civil", "Maestría en Gestión (UNI)"],
      specialties: [
        "Dirección de Proyectos",
        "Optimización de Procesos",
        "Auditor ISO 9001",
      ],
      bio: "Líder estratégico con más de 20 años de experiencia en la dirección de proyectos de infraestructura de gran envergadura. Especialista en optimización de procesos y gestión de calidad bajo estándares internacionales. Su visión ha guiado a la empresa hacia la excelencia operativa y el crecimiento sostenible.",
    },
    {
      name: "Ing. William Yucra Rodas",
      role: "Gerente de Operaciones",
      education: "CIP 234567",
      degrees: ["Ingeniero Civil", "Maestría en Gestión de Proyectos"],
      specialties: [
        "Lean Construction",
        "Supervisión de Obras",
        "Planificación Estratégica",
      ],
      bio: "Experto en la planificación y ejecución de obras civiles. Su enfoque en la metodología Lean Construction garantiza la eficiencia operativa y el cumplimiento estricto de los cronogramas, minimizando desperdicios y maximizando valor.",
    },
    {
      name: "Ing. Sosimo Yucra Rodas",
      role: "Gerente de Ingeniería y Diseño",
      education: "CIP 345678",
      degrees: ["Ingeniero Civil", "PMP Certified"],
      specialties: [
        "Diseño Sismorresistente",
        "Modelado BIM",
        "Cálculo Estructural Avanzado",
      ],
      bio: "Encargado de la dirección técnica y el control de calidad de los expedientes. Posee una profunda especialización en análisis estructural avanzado, asegurando que cada diseño cumpla con las normativas más exigentes de seguridad sísmica.",
    },
    {
      name: "Ing. Elias Yucra Rodas",
      role: "Gerente Comercial y SSOMA",
      education: "CIP 456789",
      degrees: ["Ing. Ambiental y Sanitario", "Maestría en Gestión"],
      specialties: [
        "Seguridad y Salud (SSOMA)",
        "Gestión Ambiental",
        "Relaciones Corporativas",
      ],
      bio: "Responsable de las relaciones corporativas y la implementación de sistemas de gestión ambiental y seguridad. Asegura que cada proyecto se ejecute bajo los más altos estándares de sostenibilidad y protección del talento humano.",
    },
  ];

  const openModal = (leader: Leader) => {
    setSelectedLeader(leader);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedLeader(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="page-container equipo-page">
      {/* Internal Hero */}
      <section className="internal-hero">
        <div className="overlay"></div>
        <div className="content-wrapper">
          <h1>Nuestro Equipo</h1>
          <p>
            Liderazgo visionario y excelencia técnica al servicio de su proyecto
          </p>
        </div>
      </section>

      {/* Intro Content */}
      <section className="team-intro section-padding">
        <div className="content-wrapper">
          <div className="intro-text text-center">
            <h2 className="section-title">El Pilar de Nuestra Excelencia</h2>
            <p className="max-w-800 mx-auto">
              En YR INGENIEROS, nuestro activo más valioso es nuestro capital
              humano. Contamos con una estructura organizacional sólida,
              liderada por profesionales de primer nivel.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="leadership-section section-padding bg-light">
        <div className="content-wrapper">
          <h3 className="section-subtitle text-center mb-5">
            Equipo Directivo
          </h3>
          <div className="leadership-grid">
            {leadership.map((leader, index) => (
              <div
                className="leader-card compact"
                key={index}
                onClick={() => openModal(leader)}
              >
                <div className="card-top">
                  <div className="photo-placeholder">
                    <IonIcon icon={personOutline} />
                  </div>
                </div>
                <div className="card-content">
                  <h4 className="leader-name">{leader.name}</h4>
                  <span className="leader-role">{leader.role}</span>

                  {/* Specialties with Icon again */}
                  <div className="card-specialties">
                    {leader.specialties.slice(0, 3).map((spec, i) => (
                      <span key={i} className="mini-spec">
                        <IonIcon icon={ribbonOutline} className="icon-tiny" />{" "}
                        {spec}
                      </span>
                    ))}
                  </div>

                  <button className="view-profile-btn">
                    Ver Perfil Completo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leader Modal */}
      {selectedLeader && (
        <div className="leader-modal-overlay" onClick={closeModal}>
          <div
            className="leader-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal-btn" onClick={closeModal}>
              <IonIcon icon={closeOutline} />
            </button>

            <div className="modal-header-profile">
              <div className="profile-photo-large placeholder-mode">
                <IonIcon icon={personOutline} />
              </div>
              <h2 className="modal-name">{selectedLeader.name}</h2>
              <span className="modal-role">{selectedLeader.role}</span>
              <span className="modal-cip">{selectedLeader.education}</span>

              <div className="modal-socials">
                <a href="#" className="social-icon">
                  <IonIcon icon={logoLinkedin} />
                </a>
              </div>
            </div>

            <div className="modal-body-profile">
              <div className="profile-section">
                <h3>
                  <IonIcon icon={personOutline} /> Biografía
                </h3>
                <p>{selectedLeader.bio}</p>
              </div>

              <div className="profile-grid">
                <div className="profile-column">
                  <h3>
                    <IonIcon icon={schoolOutline} /> Educación
                  </h3>
                  <ul className="profile-list">
                    {selectedLeader.degrees.map((degree, i) => (
                      <li key={i}>{degree}</li>
                    ))}
                  </ul>
                </div>
                <div className="profile-column">
                  <h3>
                    <IonIcon icon={analyticsOutline} /> Especialidades
                  </h3>
                  <div className="specialties-tags">
                    {selectedLeader.specialties.map((spec, i) => (
                      <span key={i} className="spec-tag">
                        <IonIcon icon={ribbonOutline} className="icon-tiny" />{" "}
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Equipo;
