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
  beneficios: string[];
  imagen: string;
  vimeoId?: string;
  icono: React.ReactNode | string;
}

export const serviciosMock: Servicio[] = [
  {
    id: 's1',
    titulo: 'Diseño Estructural',
    descripcionCorta: 'Definimos estructuras seguras, eficientes y compatibles con la arquitectura.',
    descripcionLarga: 'Desarrollamos la estructuración, el análisis y el diseño de la edificación; traducimos los criterios técnicos en planos claros y una memoria de cálculo preparada para revisión y ejecución.',
    beneficios: [
      'Análisis estático y dinámico según la normativa vigente.',
      'Planos estructurales y memoria de cálculo coordinados.',
      'Soluciones seguras y optimizadas para cada sistema constructivo.',
    ],
    imagen: DiseñoEstructural,
    vimeoId: '1209724622',
    icono: <IconDisenoEstructural size={32} />,
  },
  {
    id: 's2',
    titulo: 'Supervisión',
    descripcionCorta: 'Verificamos que la ejecución responda a los planos, la calidad y el alcance acordado.',
    descripcionLarga: 'Acompañamos la obra con inspecciones, revisión de partidas y seguimiento de observaciones. La supervisión convierte la información del proyecto en controles concretos para anticipar desviaciones.',
    beneficios: [
      'Control de calidad y revisión de partidas ejecutadas.',
      'Seguimiento de observaciones, avances y documentación técnica.',
      'Acompañamiento para reducir retrabajos y desviaciones en obra.',
    ],
    imagen: Supervisión,
    icono: <IconSupervision size={32} />,
  },
  {
    id: 's3',
    titulo: 'Gestión',
    descripcionCorta: 'Ordenamos alcance, información, responsables y decisiones para mantener el control.',
    descripcionLarga: 'Gestionamos el proyecto desde la planificación hasta el cierre, articulando cronograma, costos, entregables y coordinación entre especialistas, proveedores y contratistas.',
    beneficios: [
      'Planificación integral de alcance, costos y cronograma.',
      'Coordinación entre especialidades, proveedores y contratistas.',
      'Reportes claros para facilitar decisiones oportunas.',
    ],
    imagen: Service1,
    icono: <IconConstruccion size={32} />,
  },
  {
    id: 's4',
    titulo: 'Construcción',
    descripcionCorta: 'Ejecutamos obras civiles con planificación, control técnico y seguridad.',
    descripcionLarga: 'Llevamos el proyecto al terreno mediante una ejecución organizada, control permanente de recursos y seguimiento de calidad. Trabajamos para que cada partida responda a la documentación aprobada.',
    beneficios: [
      'Ejecución organizada con control técnico permanente.',
      'Gestión responsable de recursos, seguridad y plazos.',
      'Entrega documentada y seguimiento de calidad.',
    ],
    imagen: Construccion,
    icono: <IconConstruccion size={32} />,
  }
];
