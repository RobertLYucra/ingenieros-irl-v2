import Team1 from '../images/ai-generated/team_1.png';
import Team2 from '../images/ai-generated/team_2.png';
import Team3 from '../images/ai-generated/service_2.png'; // Reusing for a third member

export interface MiembroEquipo {
  id: string;
  nombre: string;
  cargo: string;
  descripcion: string;
  imagen: string;
  linkedin?: string;
}

export const equipoMock: MiembroEquipo[] = [
  {
    id: 'e1',
    nombre: 'Ing. Carlos Yucra',
    cargo: 'Gerente General',
    descripcion: 'Ingeniero Civil con más de 18 años de experiencia en la dirección y gestión de megaproyectos de infraestructura a nivel nacional. Especialista en optimización de procesos constructivos y liderazgo corporativo.',
    imagen: Team1,
  },
  {
    id: 'e2',
    nombre: 'Ing. Valeria Romero',
    cargo: 'Jefa de Proyectos Estructurales',
    descripcion: 'Especialista en diseño sismorresistente con maestría en Ingeniería Estructural. Ha liderado el diseño de más de 30 edificaciones corporativas e industriales implementando metodología BIM avanzada.',
    imagen: Team2,
  },
  {
    id: 'e3',
    nombre: 'Ing. Luis Fernández',
    cargo: 'Director de Supervisión y Obras',
    descripcion: 'Experto en control de calidad, programación y gestión de riesgos en obra. Coordina equipos multidisciplinarios en campo asegurando el cumplimiento estricto de los estándares de seguridad (SST).',
    imagen: Team3,
  }
];
