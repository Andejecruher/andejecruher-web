export type ProjectStatus = 'en-desarrollo' | 'demo' | 'produccion' | 'privado' | 'caso-profesional';

export interface Project {
  name: string;
  slug: string;
  category: string;
  tags: string[];
  description: string;
  problem: string;
  role: string;
  technologies: string[];
  status: ProjectStatus;
  featured: boolean;
  links: {
    demo?: string;
    repo?: string;
  };
  image?: string;
}

export const projects: Project[] = [
  {
    name: 'Voz Ciudadana',
    slug: 'voz-ciudadana',
    category: 'SaaS / Plataforma Cívica',
    tags: ['SaaS', 'Laravel', 'Node.js', 'IA', 'Automatización'],
    description:
      'Plataforma SaaS multi-tenant para gestión de reportes ciudadanos con integración de canales de mensajería y agentes IA para clasificación y respuesta automatizada.',
    problem:
      'Los municipios carecen de canales digitales unificados para recibir y gestionar reportes ciudadanos de forma eficiente.',
    role: 'Desarrollador Full Stack & Arquitecto de sistema',
    technologies: ['Laravel', 'Node.js', 'MySQL', 'WhatsApp API', 'FastAPI', 'Docker'],
    status: 'en-desarrollo',
    featured: true,
    links: {},
  },
  {
    name: 'Baklava Club de Mar',
    slug: 'baklava-club-de-mar',
    category: 'Landing Page / Branding',
    tags: ['Astro', 'Tailwind CSS', 'Landing Page'],
    description:
      'Landing page elegante y responsive para club de mar con diseño premium, galería de imágenes, sección de servicios y formulario de contacto.',
    problem:
      'El club necesitaba una presencia digital profesional que reflejara su propuesta de valor premium y atrajera nuevos socios.',
    role: 'Desarrollador Frontend & Diseñador',
    technologies: ['Astro', 'Tailwind CSS', 'JavaScript'],
    status: 'produccion',
    featured: true,
    links: {},
  },
  {
    name: 'Code Creatives',
    slug: 'code-creatives',
    category: 'Agencia Digital / Web App',
    tags: ['React', 'Node.js', 'MongoDB', 'SaaS'],
    description:
      'Plataforma web para agencia creativa con gestión de proyectos, portal de clientes, seguimiento de entregables y comunicación integrada.',
    problem:
      'La agencia gestionaba proyectos de forma manual generando fricciones con clientes y pérdida de visibilidad en el estado de los trabajos.',
    role: 'Desarrollador Full Stack',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    status: 'caso-profesional',
    featured: true,
    links: {},
  },
  {
    name: 'HunadChat',
    slug: 'hunadchat',
    category: 'Mensajería / IA Conversacional',
    tags: ['Node.js', 'WhatsApp', 'IA Agents', 'Automatización'],
    description:
      'Sistema de mensajería multicanal con agentes conversacionales IA, integración de WhatsApp Business, flujos automatizados y panel de administración.',
    problem:
      'Las empresas necesitaban centralizar la atención al cliente de múltiples canales con respuestas inteligentes y automatizadas.',
    role: 'Desarrollador Backend & Integrador',
    technologies: ['Node.js', 'WhatsApp API', 'FastAPI', 'Python', 'MongoDB', 'Docker'],
    status: 'privado',
    featured: true,
    links: {},
  },
];

export const statusLabels: Record<ProjectStatus, string> = {
  'en-desarrollo': 'En desarrollo',
  demo: 'Demo',
  produccion: 'Producción',
  privado: 'Privado',
  'caso-profesional': 'Caso profesional',
};

export const statusColors: Record<ProjectStatus, string> = {
  'en-desarrollo': 'border-yellow-500/40 text-yellow-400',
  demo: 'border-blue-500/40 text-blue-400',
  produccion: 'border-green-500/40 text-green-400',
  privado: 'border-gray-500/40 text-gray-400',
  'caso-profesional': 'border-cyan-500/40 text-cyan-400',
};
