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
    nombre: 'Ing. Rómulo Yucra R.',
    cargo: 'Gerente General - Ingeniero Estructural',
    descripcion: 'Especialista en diseño sismorresistente y gestión de megaproyectos.',
    imagen: Team1,
    linkedin: 'https://www.linkedin.com/in/romulo-yucra-rodas/'
  },
  {
    id: 'e2',
    nombre: 'Ing. Sósimo Yucra R.',
    cargo: 'Gerente de Operaciones',
    descripcion: 'Coordinación, supervisión y control de calidad de proyectos.',
    imagen: Team2,
  },
  {
    id: 'e3',
    nombre: 'Ing. Elías Yucra R.',
    cargo: 'Gerente de Proyectos',
    descripcion: 'Desarrollo de soluciones estructurales seguras y eficientes.',
    imagen: Team1,
  },
  {
    id: 'e4',
    nombre: 'Ing. William Yucra R.',
    cargo: 'Gerente Comercial',
    descripcion: 'Planificación y ejecución de obras civiles bajo estrictos estándares.',
    imagen: Team3,
  }
];
