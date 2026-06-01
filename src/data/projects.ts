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
    name: 'Insurance Boosters',
    slug: 'insurance-boosters-platform',
    category: 'Aplicación Web',
    tags: ['SaaS', 'Full Stack', 'Monorepo', 'TypeScript', 'Next.js', 'Express'],
    description: 'Plataforma completa de gestión de seguros con arquitectura monorepo escalable. Sistema integral que incluye aplicación web frontend, API REST con Express, y servicios backend para cotización y automatización de workflows.',
    problem: 'Las aseguradoras necesitan una plataforma moderna y escalable para gestionar cotizaciones, workflows automáticos, y comunicaciones vía Twilio, integrando APIs externas con un backend robusto capaz de procesar solicitudes en tiempo real.',
    role: 'Desarrollador Full Stack',
    technologies: ['Next.js 15', 'TypeScript', 'Express', 'Firebase', 'Twilio', 'OpenAI', 'Google Cloud', 'Deepgram', 'Socket.io', 'TanStack React Table', 'Radix UI', 'Tailwind CSS'],
    status: 'privado',
    featured: true,
    links: {
      repo: 'https://github.com/AutoClupp/insurance-boosters-app',
      demo: 'https://portal.insuranceboosters.com/ib/pas/login',
    },
  },
  {
    name: 'Insurance Boosters Multicotizador',
    slug: 'multicotizador-seguros',
    category: 'Aplicación Web',
    tags: ['Frontend', 'Next.js', 'SaaS', 'Comparación', 'Cotizaciones'],
    description: 'Frontend especializado para comparación multicotización de pólizas de seguros. Interfaz responsiva construida con Next.js 15 y Tailwind CSS, optimizada para comparación en tiempo real y generación de cotizaciones en PDF.',
    problem: 'Los usuarios finales necesitan herramientas rápidas e intuitivas para comparar múltiples cotizaciones de seguros de diferentes aseguradoras y generar reportes en PDF sin complejidad técnica.',
    role: 'Desarrollador Frontend',
    technologies: ['Next.js 16', 'TypeScript', 'React 18', 'Tailwind CSS', 'Radix UI', 'React PDF', 'SWR', 'Framer Motion', 'Lucide Icons'],
    status: 'privado',
    featured: true,
    links: {
      repo: 'https://github.com/AutoClupp/insurance-boosters-multicotizador',
      demo: 'https://dev.multicotizador.insuranceboosters.com/pruebas-ib/andejecruher-grupo',
    },
  },
  {
    name: 'Voz Ciudadana',
    slug: 'voz-ciudadana',
    category: 'SaaS / Plataforma Cívica',
    tags: ['SaaS', 'Node.js', 'IA', 'Automatización'],
    description:
      'Plataforma SaaS multi-tenant para gestión de reportes ciudadanos con integración de canales de mensajería y agentes IA para clasificación y respuesta automatizada.',
    problem:
      'Los municipios carecen de canales digitales unificados para recibir y gestionar reportes ciudadanos de forma eficiente.',
    role: 'Desarrollador Full Stack & Arquitecto de sistema',
    technologies: ['Node.js', 'MySQL', 'WhatsApp API', 'FastAPI', 'Docker'],
    status: 'privado',
    featured: true,
    links: {
      repo: 'https://github.com/Andejecruher/voz-ciudadana',
      demo: 'https://voz-ciudadana-rust.vercel.app',
    },
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
    links: {
      repo: 'https://github.com/Andejecruher/baklava',
      demo: 'https://baklava-seven.vercel.app',
    },
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
    tags: ['Node.js', 'Laravel', 'WhatsApp', 'IA Agents', 'Automatización'],
    description:
      'Sistema de mensajería multicanal con agentes conversacionales IA, integración de WhatsApp Business, flujos automatizados y panel de administración.',
    problem:
      'Las empresas necesitaban centralizar la atención al cliente de múltiples canales con respuestas inteligentes y automatizadas.',
    role: 'Desarrollador Backend & Integrador',
    technologies: ['Node.js', 'Laravel', 'WhatsApp API', 'FastAPI', 'Python', 'MongoDB', 'Docker'],
    status: 'en-desarrollo',
    featured: true,
    links: {
      repo: 'https://github.com/Andejecruher/hunad-chat',
    },
  },
  {
    name: 'Andejecruher Web',
    slug: 'andejecruher-web',
    category: 'Portafolio Profesional',
    tags: ['portfolio', 'personal-branding', 'astro', 'seo', 'typescript'],
    description:
      'Portafolio profesional desarrollado con Astro, TypeScript y Tailwind CSS para presentar experiencia en desarrollo full stack, SaaS, automatización e inteligencia artificial.',
    problem:
      'Resuelve la necesidad de contar con una presencia profesional clara, rápida y optimizada para mostrar experiencia técnica, propuesta de valor y proyectos relevantes a reclutadores y potenciales clientes.',
    role: 'Desarrollador Frontend & Diseñador',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS'],
    status: 'en-desarrollo',
    featured: true,
    links: {
      repo: 'https://github.com/Andejecruher/andejecruher-web',
    },
  },
  {
    name: 'URL Shortener API',
    slug: 'url-shortener-api',
    category: 'Backend / API',
    tags: ['api', 'rest', 'url-shortener', 'express', 'mongodb', 'backend'],
    description:
      'API REST para acortamiento de URLs con generación de códigos únicos, redirección, edición, eliminación y métricas de uso, diseñada con una estructura modular de backend.',
    problem:
      'Resuelve el caso de uso de transformar enlaces largos en URLs cortas y manejables, incorporando estadísticas básicas y operaciones CRUD para servicios ligeros, MVPs o integraciones internas.',
    role: 'Desarrollador Backend',
    technologies: [
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Jest',
      'Supertest',
      'Bun',
      'Valibot',
    ],
    status: 'caso-profesional',
    featured: true,
    links: {
      repo: 'https://github.com/Andejecruher/url-shortener-api',
    },
    // TODO: Agregar demo o documentación publicada de la API si existe.
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
