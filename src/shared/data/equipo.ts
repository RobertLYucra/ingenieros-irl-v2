import Team1 from '../images/ai-generated/team_1.webp';
import Team2 from '../images/ai-generated/team_2.webp';
import Team3 from '../images/ai-generated/team_3.webp';

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
    nombre: 'Romulo Yucra Rodas',
    cargo: 'Gerente General',
    descripcion: 'Ingeniero Civil con maestría en Ingeniería Estructural y más de 10 años de experiencia. Especialista en diseño sismorresistente y experto en la gestión y construcción de megaproyectos de infraestructura.',
    imagen: Team1,
    linkedin: 'https://www.linkedin.com/in/romulo-yucra-rodas/'
  },
  {
    id: 'e2',
    nombre: 'Sosimo Yucra Rodas',
    cargo: 'Ingeniero de Proyectos',
    descripcion: 'Profesional destacado con sólida experiencia en la coordinación, supervisión y control de calidad integral de proyectos de ingeniería civil.',
    imagen: Team2,
  },
  {
    id: 'e3',
    nombre: 'Wiliam Yucra Rodas',
    cargo: 'Ingeniero Especialista',
    descripcion: 'Especialista en planificación, gestión y ejecución de obras civiles, asegurando el cumplimiento estricto de los estándares técnicos y plazos.',
    imagen: Team3,
  },
  {
    id: 'e4',
    nombre: 'Elias Yucra Rodas',
    cargo: 'Ingeniero Estructural',
    descripcion: 'Profesional enfocado en el análisis, modelamiento y desarrollo de soluciones estructurales seguras y eficientes para edificaciones complejas.',
    imagen: Team1,
  }
];
