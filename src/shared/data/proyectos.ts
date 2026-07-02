import Img1 from '../images/proyectos/Foto (1).jpg';
import Img2 from '../images/proyectos/Foto (2).jpg';
import Img3 from '../images/proyectos/Foto (3).jpg';
import Img4 from '../images/proyectos/Foto (4).jpg';
import Img5 from '../images/proyectos/Foto (5).jpg';
import Img6 from '../images/proyectos/Foto (6).jpg';
import Img7 from '../images/proyectos/Foto (7).jpg';
import Img8 from '../images/proyectos/Foto (8).jpg';
import Img9 from '../images/proyectos/Foto (9).jpg';
import Img10 from '../images/proyectos/Foto (10).jpg';
import Img11 from '../images/proyectos/Foto (11).jpg';



export interface Proyecto {
  id: string;
  titulo: string;
  categoria: string;
  cliente: string;
  ubicacion: string;
  estado: string;
  descripcion: string;
  imagen: string;
}

export const proyectosMock: Proyecto[] = [
  {
    id: 'p1',
    titulo: 'Minicomplejo Deportivo Sivia',
    categoria: 'Construcción',
    cliente: 'Municipalidad de Sivia',
    ubicacion: 'Ayacucho, Perú',
    estado: 'Completado',
    descripcion: 'Diseño y construcción del minicomplejo deportivo para fomentar el deporte en la región.',
    imagen: Img1,
  },
  {
    id: 'p2',
    titulo: 'Evaluación Estructural Edificio Tramar',
    categoria: 'Diseño Estructural',
    cliente: 'Marina de Guerra del Perú',
    ubicacion: 'Callao, Perú',
    estado: 'Completado',
    descripcion: 'Evaluación y reforzamiento estructural del edificio principal Tramar.',
    imagen: Img2,
  },
  {
    id: 'p3',
    titulo: 'Minicomplejo Deportivo Pichari',
    categoria: 'Construcción',
    cliente: 'Municipalidad de Pichari',
    ubicacion: 'Cusco, Perú',
    estado: 'Completado',
    descripcion: 'Ejecución del proyecto del minicomplejo deportivo para la comunidad de Pichari.',
    imagen: Img3,
  },
  {
    id: 'p4',
    titulo: 'Diseño Estructural del Hotel Paredes',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Cusco, Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural completo para las instalaciones del Hotel Paredes.',
    imagen: Img4,
  },
  {
    id: 'p5',
    titulo: 'Xtrem Disco Club',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Cusco, Perú',
    estado: 'Completado',
    descripcion: 'Diseño de Arquitectura y Estructura del centro de entretenimiento Xtrem Disco Club.',
    imagen: Img5,
  },
  {
    id: 'p6',
    titulo: 'Actualización Diseño Edificio CAFAE',
    categoria: 'Diseño Estructural',
    cliente: 'CAFAE',
    ubicacion: 'Lima, Perú',
    estado: 'Completado',
    descripcion: 'Actualización del diseño estructural del edificio según la norma NTP E.030-2019.',
    imagen: Img6,
  },
  {
    id: 'p7',
    titulo: 'Edificio Multifamiliar',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Lima, Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural completo para edificio residencial multifamiliar.',
    imagen: Img7,
  },
  {
    id: 'p8',
    titulo: 'Edificio de Ingeniería - Oficinas',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Puente Piedra, Lima',
    estado: 'Completado',
    descripcion: 'Diseño estructural de modernas instalaciones para centro de oficinas e ingeniería.',
    imagen: Img8,
  },
  {
    id: 'p9',
    titulo: 'Servicio Tráfico Marítimo del Puerto del Callao',
    categoria: 'Construcción',
    cliente: 'Marina de Guerra del Perú',
    ubicacion: 'Isla San Lorenzo, Callao',
    estado: 'En Progreso',
    descripcion: 'Mejoramiento y Ampliación del Servicio Tráfico Marítimo en la Isla San Lorenzo.',
    imagen: Img9,
  },
  {
    id: 'p10',
    titulo: 'Pórtico para Transformador',
    categoria: 'Construcción',
    cliente: 'Sector Eléctrico',
    ubicacion: 'Ica, Perú',
    estado: 'Completado',
    descripcion: 'Construcción de pórtico para transformador de subestación eléctrica de potencia.',
    imagen: Img10,
  },
  {
    id: 'p11',
    titulo: 'Edificio con Tanque de Agua',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural especializado para edificio que soporta tanque elevado de agua.',
    imagen: Img11,
  }
];
