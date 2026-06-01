export interface Experience {
  company: string;
  role: string;
  period: string;
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
    company: 'Freelance / Proyectos Propios',
    role: 'Full Stack Developer & Tech Lead',
    period: '2023 — Presente',
    modality: 'Remoto · Independiente',
    description:
      'Diseño y desarrollo de plataformas SaaS, agentes de IA, integraciones de mensajería y soluciones backend para clientes y proyectos propios.',
    responsibilities: [
      'Arquitectura e implementación de plataformas SaaS multi-tenant con Laravel y Node.js.',
      'Desarrollo de agentes conversacionales con integración de WhatsApp, Telegram e Instagram.',
      'Construcción de APIs REST robustas y microservicios con FastAPI y Express.',
      'Diseño e implementación de bases de datos relacionales y no relacionales.',
      'Despliegue y gestión de aplicaciones con Docker y Vercel.',
      'Desarrollo frontend con React y Astro para interfaces modernas.',
    ],
    achievements: [
      'Entrega de 4 proyectos complejos en tiempo y forma.',
      'Reducción de tiempos de respuesta de atención al cliente mediante automatización.',
      'Implementación de flujos IA que redujeron la intervención manual en un 60%.',
    ],
    technologies: ['Laravel', 'Node.js', 'FastAPI', 'React', 'Astro', 'MySQL', 'MongoDB', 'Docker', 'WhatsApp API'],
    relatedProjects: ['Voz Ciudadana', 'HunadChat', 'Code Creatives'],
    confidential: false,
  },
  {
    company: 'Empresa de Desarrollo de Software (Confidencial)',
    role: 'Full Stack Developer',
    period: '2022 — 2023',
    modality: 'Remoto · Tiempo completo',
    description:
      'Desarrollo de sistemas internos y plataformas web para clientes de distintos sectores. Trabajo en equipo con metodologías ágiles.',
    responsibilities: [
      'Desarrollo de módulos backend con Laravel y PHP.',
      'Integración de APIs de terceros para pagos, mensajería y datos.',
      'Mantenimiento y optimización de sistemas legacy.',
      'Colaboración en sprints ágiles con equipo distribuido.',
      'Revisión de código y documentación técnica.',
    ],
    achievements: [
      'Optimización de consultas SQL que mejoró el rendimiento en un 40%.',
      'Migración exitosa de sistema monolítico a arquitectura modular.',
      'Implementación de sistema de notificaciones en tiempo real con WebSockets.',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Vue.js', 'Redis'],
    confidential: true,
  },
  {
    company: 'Proyectos de Aprendizaje & Comunidad',
    role: 'Developer & Contribuidor',
    period: '2021 — 2022',
    modality: 'Personal',
    description:
      'Período de formación intensiva, proyectos personales y contribuciones a la comunidad de desarrollo. Base técnica sólida en backend y APIs.',
    responsibilities: [
      'Construcción de proyectos personales para aprender tecnologías backend.',
      'Participación en comunidades de desarrollo y foros técnicos.',
      'Experimentación con Node.js, Express, Python y bases de datos.',
    ],
    achievements: [
      'Dominio de JavaScript full stack (frontend y backend).',
      'Primeros proyectos desplegados en producción.',
      'Comprensión sólida de REST APIs y arquitecturas cliente-servidor.',
    ],
    technologies: ['Node.js', 'Express', 'JavaScript', 'Python', 'MySQL', 'MongoDB', 'HTML', 'CSS'],
    confidential: false,
  },
];
