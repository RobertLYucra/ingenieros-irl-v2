import React from 'react';
import Service1 from '../images/ai-generated/service_1.webp';
import DiseñoEstructural from '../images/servicios/diseño.webp';
import Supervisión from '../images/servicios/supervicion.webp';
import Construccion from '../images/servicios/construcción.webp';

// Reusing for construction
import { IconDisenoEstructural, IconSupervision, IconConstruccion } from '../components/icons/Icons';

export interface Servicio {
  id: string;
  titulo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  imagen: string;
  vimeoId?: string;
  icono: React.ReactNode | string;
}

export const serviciosMock: Servicio[] = [
  {
    id: 's1',
    titulo: 'Diseño Estructural',
    descripcionCorta: 'Estructuración, Análisis, Diseño, Dibujo y Memoria de cálculo.',
    descripcionLarga: 'Nuestra empresa busca lograr la estructura de edificaciones que no fallen en su vida útil. Para ello ofrecemos cumplir con los siguientes elementos de Diseño Estructural: Estructuración, Análisis, Diseño, Dibujo y Memoria de cálculo.',
    imagen: DiseñoEstructural,
    vimeoId: '1209724622',
    icono: <IconDisenoEstructural size={32} />,
  },
  {
    id: 's2',
    titulo: 'Supervisión',
    descripcionCorta: 'Trabajo eficiente y de calidad sin ignorar ningún detalle.',
    descripcionLarga: 'Supervisión es una parte importante durante una actividad, lo cual ayuda para un trabajo eficiente y de calidad, nosotros nos encargamos sin ignorar ningún detalle.',
    imagen: Supervisión,
    icono: <IconSupervision size={32} />,
  },
  {
    id: 's3',
    titulo: 'Gestión',
    descripcionCorta: 'Planificación, coordinación y control total del proceso de construcción.',
    descripcionLarga: 'Nos encargamos de la gestión del proyecto desde el principio hasta el final, lo cual incluye la Planificación, coordinación y control total del proceso de construcción.',
    imagen: Service1,
    icono: <IconConstruccion size={32} />,
  },
  {
    id: 's4',
    titulo: 'Construcción',
    descripcionCorta: 'Construcción de edificios y carreteras con la máxima calidad posible.',
    descripcionLarga: 'Somos una empresa que uno de sus servicios es la construcción de todo tipo de edificios, carreteras, caminos, etc. Para cada una de ellas verificamos que nuestros resultados tengan la máxima calidad posible.',
    imagen: Construccion,
    icono: <IconConstruccion size={32} />,
  }
];
