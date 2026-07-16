import RomuloImg from '../images/equipo/Romulo.png';
import SosimoImg from '../images/equipo/sosimo.png';
import EliasImg from '../images/equipo/Elias.png';
import WilliamImg from '../images/equipo/william.png';

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
    imagen: RomuloImg,
    linkedin: 'https://www.linkedin.com/in/romulo-yucra-rodas/'
  },
  {
    id: 'e2',
    nombre: 'Ing. Sósimo Yucra R.',
    cargo: 'Gerente de Operaciones',
    descripcion: 'Coordinación, supervisión y control de calidad de proyectos.',
    imagen: SosimoImg,
    linkedin:'https://www.linkedin.com/in/sosimo-yucra-rodas-pmp%C2%AE-983752125/'
  },
  {
    id: 'e3',
    nombre: 'Ing. Elías Yucra R.',
    cargo: 'Gerente de Proyectos',
    descripcion: 'Desarrollo de soluciones estructurales seguras y eficientes.',
    imagen: EliasImg,
    linkedin:'#'
  },
  {
    id: 'e4',
    nombre: 'Ing. William Yucra R.',
    cargo: 'Gerente Comercial',
    descripcion: 'Planificación y ejecución de obras civiles bajo estrictos estándares.',
    imagen: WilliamImg,
    linkedin:'#'
  }
];
