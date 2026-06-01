export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  modality: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  relatedProjects?: string[];
  confidential?: boolean;
}

export const experiences: Experience[] = [
  {
    company: 'Clupp',
    role: 'Desarrollador Full Stack',
    period: 'Diciembre 2024 — Actualidad',
    location: 'México',
    modality: 'Remoto · Tiempo completo',
    description:
      'Desarrollo de soluciones web escalables orientadas a producto, con enfoque en interfaces dinámicas, APIs backend y buenas prácticas de desarrollo.',
    responsibilities: [
      'Desarrollo de soluciones web escalables con Next.js, React.js, Node.js y Firebase.',
      'Construcción de interfaces dinámicas, responsivas e intuitivas orientadas a producto.',
      'Desarrollo e integración de APIs y servicios backend para funcionalidades del producto.',
      'Implementación de autenticación, gestión de datos e integración de servicios con Firebase.',
      'Aplicación de buenas prácticas de desarrollo frontend y backend en un entorno tecnológico.',
    ],
    achievements: [],
    technologies: ['Next.js', 'React.js', 'Node.js', 'Firebase'],
    confidential: false,
  },
  {
    company: 'Diferente Web',
    role: 'Desarrollador Full Stack',
    period: 'Septiembre 2023 — Junio 2024',
    location: 'México',
    modality: 'Remoto · Tiempo completo',
    description:
      'Desarrollo y mantenimiento de APIs, integración de servicios externos, soluciones e-commerce y administración de bases de datos en proyectos full stack.',
    responsibilities: [
      'Desarrollo y mantenimiento de APIs para integrar servicios externos y mejorar la comunicación entre aplicaciones.',
      'Integración y personalización de soluciones e-commerce mediante BigCommerce.',
      'Administración de datos con MySQL y MongoDB, considerando escalabilidad, seguridad y eficiencia.',
      'Participación en proyectos full stack combinando backend, frontend e integraciones externas.',
    ],
    achievements: [],
    technologies: ['MySQL', 'MongoDB', 'BigCommerce', 'JavaScript', 'PHP'],
    relatedProjects: ['Integraciones e-commerce con BigCommerce'],
    confidential: false,
  },
  {
    company: 'Hoteles Buenaventura',
    role: 'Desarrollador Full Stack',
    period: 'Abril 2023 — Julio 2023',
    location: 'Puerto Vallarta, Jalisco, México',
    modality: 'Presencial',
    description:
      'Desarrollo de calendario interactivo para gestión de fechas, reservas y disponibilidad, con construcción de APIs REST y frontend en React.js.',
    responsibilities: [
      'Desarrollo de calendario interactivo para gestión de fechas, reservas y disponibilidad.',
      'Construcción de APIs REST con Laravel y MySQL para administrar información operativa.',
      'Desarrollo de frontend con React.js para visualización y selección interactiva de fechas.',
      'Integración entre frontend y backend para mejorar la experiencia del usuario final.',
    ],
    achievements: [],
    technologies: ['Laravel', 'MySQL', 'React.js'],
    relatedProjects: ['Calendario de reservas para Hoteles Buenaventura'],
    confidential: false,
  },
  {
    company: 'The Rocket Code',
    role: 'Desarrollador Full Stack',
    period: 'Marzo 2022 — Mayo 2023',
    location: 'México',
    modality: 'Remoto · Tiempo completo',
    description:
      'Desarrollo de funcionalidades web, migración de sistemas frontend y construcción de APIs para comunicación eficiente entre cliente y servidor.',
    responsibilities: [
      'Desarrollo de funcionalidades para aplicaciones web utilizando React.js.',
      'Migración de cotizador de precios desde Next.js hacia React.js, mejorando estructura y mantenibilidad.',
      'Desarrollo de APIs con Node.js, Express y MongoDB para comunicación eficiente entre frontend y backend.',
      'Participación en creación de sitios y aplicaciones web para distintos clientes.',
    ],
    achievements: [],
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
    relatedProjects: ['Cotizador web (migración Next.js → React.js)'],
    confidential: false,
  },
  {
    company: 'Creativa Softline',
    role: 'Diseñador Web',
    period: 'Experiencia inicial',
    location: 'Tuxtla Gutiérrez, Chiapas, México',
    modality: 'Presencial',
    description:
      'Diseño y desarrollo de sitios web funcionales y responsivos. Primera experiencia profesional en desarrollo e implementación web.',
    responsibilities: [
      'Diseño y desarrollo de sitios web funcionales, responsivos y visualmente atractivos.',
      'Implementación de interfaces con Bootstrap, Skeleton y Boilerplate.',
      'Participación en procesos de diseño, maquetación e implementación web.',
    ],
    achievements: [],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    confidential: false,
  },
];
