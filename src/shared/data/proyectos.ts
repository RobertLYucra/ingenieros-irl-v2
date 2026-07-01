import Project1 from '../images/ai-generated/project_1.png';
import Project2 from '../images/ai-generated/project_2.png';
import Project3 from '../images/ai-generated/project_3.png';

export interface Proyecto {
  id: string;
  titulo: string;
  cliente: string;
  ubicacion: string;
  descripcion: string;
  categoria: 'Diseño Estructural' | 'Supervisión' | 'Construcción';
  estado: 'Completado' | 'En Proceso';
  imagen: string;
}

export const proyectosMock: Proyecto[] = [
  {
    id: 'p1',
    titulo: 'Torre Empresarial Lima',
    cliente: 'Inmobiliaria Horizonte',
    ubicacion: 'San Isidro, Lima',
    descripcion: 'Diseño estructural sismorresistente de una torre corporativa de 25 pisos, incluyendo 4 niveles de sótanos y áreas comerciales, optimizando el uso de materiales de alta resistencia.',
    categoria: 'Diseño Estructural',
    estado: 'Completado',
    imagen: Project1,
  },
  {
    id: 'p2',
    titulo: 'Puente Sur Interconectado',
    cliente: 'Ministerio de Transportes',
    ubicacion: 'Arequipa',
    descripcion: 'Supervisión integral de la construcción de un puente colgante de gran luz, asegurando el cumplimiento de especificaciones técnicas internacionales y normas de seguridad.',
    categoria: 'Supervisión',
    estado: 'Completado',
    imagen: Project2,
  },
  {
    id: 'p3',
    titulo: 'Planta Industrial Andina',
    cliente: 'Consorcio Manufacturero del Sur',
    ubicacion: 'Ica',
    descripcion: 'Gestión y construcción llave en mano de una moderna nave industrial, incluyendo cimentaciones profundas, estructuras metálicas y facilidades electromecánicas completas.',
    categoria: 'Construcción',
    estado: 'En Proceso',
    imagen: Project3,
  }
];
