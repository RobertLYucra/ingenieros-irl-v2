import React from 'react';
import Service1 from '../images/ai-generated/service_1.png';
import Service2 from '../images/ai-generated/service_2.png';
import Service3 from '../images/ai-generated/project_3.png'; // Reusing for construction
import { IconDisenoEstructural, IconSupervision, IconConstruccion } from '../components/icons/Icons';

export interface Servicio {
  id: string;
  titulo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  imagen: string;
  icono: React.ReactNode | string;
}

export const serviciosMock: Servicio[] = [
  {
    id: 's1',
    titulo: 'Diseño Estructural',
    descripcionCorta: 'Análisis y diseño sismorresistente con normativa vigente para edificaciones seguras.',
    descripcionLarga: 'Ofrecemos soluciones avanzadas en diseño estructural, empleando software de última generación para modelado y cálculo de estructuras en concreto armado, acero y albañilería. Garantizamos la seguridad y eficiencia económica de cada proyecto bajo estrictas normativas nacionales e internacionales.',
    imagen: Service1,
    icono: <IconDisenoEstructural size={32} />,
  },
  {
    id: 's2',
    titulo: 'Supervisión de Obra',
    descripcionCorta: 'Control de calidad, costos y plazos para garantizar el éxito de la construcción.',
    descripcionLarga: 'Nuestro equipo de supervisión vela celosamente por los intereses del cliente, realizando un riguroso control técnico, económico y administrativo. Aseguramos que la obra se ejecute exactamente según los planos y especificaciones, previniendo sobrecostos y retrasos.',
    imagen: Service2,
    icono: <IconSupervision size={32} />,
  },
  {
    id: 's3',
    titulo: 'Construcción y Gestión',
    descripcionCorta: 'Ejecución de proyectos de infraestructura y edificaciones con altos estándares.',
    descripcionLarga: 'Llevamos a cabo la construcción integral de obras civiles, comerciales e industriales. Aplicamos metodologías ágiles de gestión (Lean Construction, PMI) para optimizar recursos, mantener una comunicación transparente y entregar proyectos sobresalientes dentro del cronograma.',
    imagen: Service3,
    icono: <IconConstruccion size={32} />,
  }
];
