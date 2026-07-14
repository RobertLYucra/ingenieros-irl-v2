import Img1 from '../images/proyectos/Foto (1).webp';
import Img2 from '../images/proyectos/Foto (2).webp';
import Img3 from '../images/proyectos/Foto (3).webp';
import Img4 from '../images/proyectos/Foto (4).webp';
import Img5 from '../images/proyectos/Foto (5).webp';
import Img6 from '../images/proyectos/Foto (6).webp';
import Img7 from '../images/proyectos/Foto (7).webp';
import Img8 from '../images/proyectos/Foto (8).webp';
import Img9 from '../images/proyectos/Foto (9).webp';
import Img10 from '../images/proyectos/Foto (10).webp';
import Img11 from '../images/proyectos/Foto (11).webp';
import Img12 from '../images/proyectos/DIseño vivienda Lima.webp';
import Img13 from '../images/proyectos/Diseño Estructural de un hotel.webp';
import Img14 from '../images/proyectos/Diseño de un hotel.webp';
import Img15 from '../images/proyectos/Estructural-mansory.webp';
import Img17 from '../images/proyectos/JEJL2175.webp';
import Img18 from '../images/proyectos/OWSH9774.webp';
import Img19 from '../images/proyectos/RUEO5418.webp';
import Img20 from '../images/proyectos/RYAM2296.webp';
import Img21 from '../images/proyectos/VPYG7349.webp';
import Img22 from '../images/proyectos/VVMI3184.webp';




export interface Proyecto {
  id: string;
  titulo: string;
  categoria: string;
  cliente: string;
  ubicacion: string;
  estado: string;
  descripcion: string;
  imagen: string;
  tipoMedia?: 'imagen' | 'video' | 'vimeo';
  galeria?: Array<{ url: string, tipoMedia: 'imagen' | 'video' | 'vimeo' }>;
} 

export const proyectosMock: Proyecto[] = [
  {
    id: 'np1',
    titulo: 'Análisis y Diseño Luxury - Hotel FK',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Iquitos, Loreto, Perú',
    estado: 'Completado',
    descripcion: 'Análisis y diseño estructural del Hotel Luxury FK en Iquitos (Bloque A y B).',
    imagen: '1209695707',
    tipoMedia: 'vimeo',
    galeria: [
      { url: '1209695707', tipoMedia: 'vimeo' },
      { url: '1209695710', tipoMedia: 'vimeo' }
    ]
  },
  {
    id: 'np2',
    titulo: 'Estadio FK Club Iquitos',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Iquitos, Perú',
    estado: 'Completado',
    descripcion: 'Análisis y diseño estructural del Estadio FK Club en Iquitos.',
    imagen: '1209695636',
    tipoMedia: 'vimeo',
    galeria: [
      { url: '1209695636', tipoMedia: 'vimeo' },
      { url: '1209695630', tipoMedia: 'vimeo' },
      { url: '1209695634', tipoMedia: 'vimeo' }
    ]
  },
  {
    id: 'np3',
    titulo: 'Xtreme Cines Cusco',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Cusco, Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural de instalaciones para Xtreme Cines en Cusco.',
    imagen: '1209695680',
    tipoMedia: 'vimeo',
    galeria: [
      { url: '1209695680', tipoMedia: 'vimeo' },
      { url: '1209695679', tipoMedia: 'vimeo' },
      { url: '1209695650', tipoMedia: 'vimeo' }
    ]
  },
  {
    id: 'np4',
    titulo: 'Edificio Multifamiliar San Isidro',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'San Isidro, Lima, Perú',
    estado: 'Completado',
    descripcion: 'Análisis y diseño estructural de edificio multifamiliar en San Isidro.',
    imagen: '1209695433',
    tipoMedia: 'vimeo',
    galeria: [
      { url: '1209695433', tipoMedia: 'vimeo' },
      { url: '1209695420', tipoMedia: 'vimeo' },
      { url: '1209695435', tipoMedia: 'vimeo' }
    ]
  },
  {
    id: 'np5',
    titulo: 'Edificio Multifamiliar Santa Anita',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Santa Anita, Lima, Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural de edificación residencial multifamiliar en Santa Anita.',
    imagen: '1209695621',
    tipoMedia: 'vimeo',
    galeria: [
      { url: '1209695621', tipoMedia: 'vimeo' },
      { url: '1209695434', tipoMedia: 'vimeo' }
    ]
  },
  {
    id: 'np6',
    titulo: 'Edificio Multifamiliar Surco',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Surco, Lima, Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural para edificio multifamiliar en Surco.',
    imagen: '1209695457',
    tipoMedia: 'vimeo',
    galeria: [
      { url: '1209695457', tipoMedia: 'vimeo' },
      { url: '1209695455', tipoMedia: 'vimeo' }
    ]
  },
  {
    id: 'np7',
    titulo: 'Edificio Multifamiliar JM',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Cusco, Perú',
    estado: 'Completado',
    descripcion: 'Diseño de edificación multifamiliar JM.',
    imagen: '1209695392',
    tipoMedia: 'vimeo',
    galeria: [
      { url: '1209695392', tipoMedia: 'vimeo' },
      { url: '1209695395', tipoMedia: 'vimeo' }
    ]
  },
  {
    id: 'np8',
    titulo: 'Edificio Multifamiliar Lima',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Lima, Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural de proyecto multifamiliar.',
    imagen: '1209695393',
    tipoMedia: 'vimeo',
    galeria: [
      { url: '1209695393', tipoMedia: 'vimeo' },
      { url: '1209695461', tipoMedia: 'vimeo' }
    ]
  },
  {
    id: 'np9',
    titulo: 'Refinamiento CCSF',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Lima, Perú',
    estado: 'Completado',
    descripcion: 'Análisis y diseño de refinamiento CCSF.',
    imagen: '1209695701',
    tipoMedia: 'vimeo'
  },
  {
    id: 'np10',
    titulo: 'Dimensión Estructural de Maquinarias',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Perú',
    estado: 'Completado',
    descripcion: 'Análisis y dimensión estructural de maquinarias pesadas.',
    imagen: '1209695688',
    tipoMedia: 'vimeo'
  },
  {
    id: 'np11',
    titulo: 'Centro Comercial RP - EEMM',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Perú',
    estado: 'Completado',
    descripcion: 'Análisis estructural del Centro Comercial RP EEMM.',
    imagen: '1209695713',
    tipoMedia: 'vimeo'
  },
  {
    id: 'np12',
    titulo: 'Muros de Contención HL-93',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Lima, Perú',
    estado: 'Completado',
    descripcion: 'Diseño de muros de contención HL-93.',
    imagen: '1209695723',
    tipoMedia: 'vimeo'
  },
  {
    id: 'np13',
    titulo: 'Edificio Multifamiliar AC',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Lima, Perú',
    estado: 'Completado',
    descripcion: 'Diseño para el edificio multifamiliar AC en Lima.',
    imagen: '1209695728',
    tipoMedia: 'vimeo'
  },
  {
    id: 'np14',
    titulo: 'Edificio Multifamiliar SL',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Lima, Perú',
    estado: 'Completado',
    descripcion: 'Diseño para el edificio multifamiliar SL.',
    imagen: '1209695452',
    tipoMedia: 'vimeo'
  },
  {
    id: 'np15',
    titulo: 'Edificio Multifamiliar San Borja',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'San Borja, Lima, Perú',
    estado: 'Completado',
    descripcion: 'Proyecto estructural de edificio en San Borja.',
    imagen: '1209695394',
    tipoMedia: 'vimeo'
  },
  {
    id: 'np16',
    titulo: 'Puente Compuesto - Arequipa (37m)',
    categoria: 'Construcción',
    cliente: 'Privado',
    ubicacion: 'Arequipa, Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural de puente compuesto de 37 metros.',
    imagen: '1209695652',
    tipoMedia: 'vimeo'
  },
  {
    id: 'np17',
    titulo: 'SF Hotel',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Lima, Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural para el SF Hotel.',
    imagen: '1209695654',
    tipoMedia: 'vimeo'
  },
  {
    id: 'np18',
    titulo: 'Simulación Colapso de Edificio ante Sismo',
    categoria: 'Diseño Estructural',
    cliente: 'Investigación',
    ubicacion: 'Perú',
    estado: 'Completado',
    descripcion: 'Simulación del comportamiento y colapso de un edificio multifamiliar ante un evento sísmico.',
    imagen: '1209695657',
    tipoMedia: 'vimeo'
  },
  {
    id: 'np19',
    titulo: 'Proyecto Estructural (Video 5)',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Perú',
    estado: 'Completado',
    descripcion: 'Recorrido estructural del proyecto.',
    imagen: '1209695666',
    tipoMedia: 'vimeo'
  },
  {
    id: 'np20',
    titulo: 'Proyecto Estructural (Video 6)',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Perú',
    estado: 'Completado',
    descripcion: 'Recorrido estructural del proyecto.',
    imagen: '1209695674',
    tipoMedia: 'vimeo'
  },
  {
    id: 'v1',
    titulo: 'Diseño Estructural de una Vivienda Multifamiliar',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Santiago de Surco, Lima, Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural de una vivienda multifamiliar con sótano, ubicado en la calle Los Nardos.',
    imagen: '1206589105',
    tipoMedia: 'vimeo'
  },
  {
    id: 'v2',
    titulo: 'Recorrido Estructural (Video 2)',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Perú',
    estado: 'Completado',
    descripcion: 'Previsualización y recorrido dinámico del modelo estructural tridimensional.',
    imagen: '1206589073',
    tipoMedia: 'vimeo'
  },

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
    imagen: '1206589090',
    tipoMedia: 'vimeo',
    galeria: [
      { url: '1206589090', tipoMedia: 'vimeo' },
      { url: Img5, tipoMedia: 'imagen' }
    ]
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
  },
  {
    id: 'p12',
    titulo: 'Diseño Vivienda en Lima',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Lima, Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural para vivienda unifamiliar.',
    imagen: Img12,
  },
  {
    id: 'p13',
    titulo: 'Diseño Estructural de un Hotel',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Perú',
    estado: 'Completado',
    descripcion: 'Análisis y diseño estructural de proyecto hotelero.',
    imagen: Img13,
  },
  {
    id: 'p14',
    titulo: 'Diseño de un Hotel',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Perú',
    estado: 'Completado',
    descripcion: 'Desarrollo de diseño para nuevo establecimiento hotelero.',
    imagen: Img14,
  },
  {
    id: 'p15',
    titulo: 'Diseño Estructural Masonería',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Perú',
    estado: 'Completado',
    descripcion: 'Diseño y análisis estructural para edificación de albañilería (masonería).',
    imagen: Img15,
  },
  {
    id: 'p17',
    titulo: 'Tramoya de Auditorio',
    categoria: 'Diseño Estructural',
    cliente: 'MINEDU',
    ubicacion: 'Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural de tramoya de un auditorio para el Ministerio de Educación.',
    imagen: Img17,
  },
  {
    id: 'p18',
    titulo: 'Vivienda Unifamiliar',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural de una vivienda unifamiliar de varios niveles.',
    imagen: Img18,
  },
  {
    id: 'p19',
    titulo: 'Vivienda en Lima',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Lima, Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural de una vivienda moderna en la ciudad de Lima.',
    imagen: Img19,
  },
  {
    id: 'p20',
    titulo: 'Vivienda en Cusco',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Cusco, Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural de una edificación residencial en Cusco.',
    imagen: Img20,
  },
  {
    id: 'p21',
    titulo: 'Hotel (Bloque A)',
    categoria: 'Diseño Estructural',
    cliente: 'Privado',
    ubicacion: 'Perú',
    estado: 'Completado',
    descripcion: 'Diseño estructural del Bloque A para un establecimiento hotelero.',
    imagen: Img21,
  },
  {
    id: 'p22',
    titulo: 'Tramoya de Auditorio (Vista 2)',
    categoria: 'Diseño Estructural',
    cliente: 'MINEDU',
    ubicacion: 'Perú',
    estado: 'Completado',
    descripcion: 'Análisis y diseño estructural de tramoya de un auditorio para el MINEDU.',
    imagen: Img22,
  },
];
