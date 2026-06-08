import type { Lang } from '../i18n/config';
import { DEFAULT_LANG } from '../i18n/config';
import enProjectsData from '../i18n/en/projects-data.json';
import esProjectsData from '../i18n/es/projects-data.json';

export type ProjectStatus = 'en-desarrollo' | 'demo' | 'produccion' | 'privado' | 'caso-profesional';

export type ProjectCategoryKey =
  | 'web-app'
  | 'saas-civic-platform'
  | 'landing-page-branding'
  | 'digital-agency-web-app'
  | 'messaging-ai-conversational'
  | 'professional-portfolio'
  | 'backend-api';

export interface Project {
  name: string;
  slug: string;
  categoryKey: ProjectCategoryKey;
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

interface ProjectBase {
  slug: string;
  name: string;
  categoryKey: ProjectCategoryKey;
  tags: string[];
  technologies: string[];
  status: ProjectStatus;
  featured: boolean;
  links: {
    demo?: string;
    repo?: string;
  };
  image?: string;
}

interface ProjectLocaleContent {
  description: string;
  problem: string;
  role: string;
}

interface ProjectsDataFile {
  items: Record<string, ProjectLocaleContent>;
}

const projectsBase: ProjectBase[] = [
  {
    name: 'Insurance Boosters',
    slug: 'insurance-boosters-platform',
    categoryKey: 'web-app',
    tags: ['SaaS', 'Full Stack', 'Monorepo', 'TypeScript', 'Next.js', 'Express'],
    technologies: [
      'Next.js 15',
      'TypeScript',
      'Express',
      'Firebase',
      'Twilio',
      'OpenAI',
      'Google Cloud',
      'Deepgram',
      'Socket.io',
      'TanStack React Table',
      'Radix UI',
      'Tailwind CSS',
    ],
    status: 'privado',
    featured: true,
    links: {
      demo: 'https://portal.insuranceboosters.com/ib/pas/login',
    },
    image: '/images/projects/insurance-boosters-platform.webp',
  },
  {
    name: 'Insurance Boosters Multicotizador',
    slug: 'multicotizador-seguros',
    categoryKey: 'web-app',
    tags: ['Frontend', 'Next.js', 'SaaS', 'Comparison', 'Quotations'],
    technologies: ['Next.js 16', 'TypeScript', 'React 18', 'Tailwind CSS', 'Radix UI', 'React PDF', 'SWR', 'Framer Motion', 'Lucide Icons'],
    status: 'privado',
    featured: true,
    links: {
      demo: 'https://dev.multicotizador.insuranceboosters.com/pruebas-ib/andejecruher-grupo',
    },
    image: '/images/projects/multicotizador-seguros.webp',
  },
  {
    name: 'Voz Ciudadana',
    slug: 'voz-ciudadana',
    categoryKey: 'saas-civic-platform',
    tags: ['SaaS', 'Node.js', 'AI', 'Automation'],
    technologies: ['Node.js', 'MySQL', 'WhatsApp API', 'FastAPI', 'Docker'],
    status: 'privado',
    featured: true,
    links: {
      repo: 'https://github.com/Andejecruher/voz-ciudadana',
      demo: 'https://voz-ciudadana-rust.vercel.app',
    },
    image: '/images/projects/voz-ciudadana.webp',
  },
  {
    name: 'Baklava Club de Mar',
    slug: 'baklava-club-de-mar',
    categoryKey: 'landing-page-branding',
    tags: ['Astro', 'Tailwind CSS', 'Landing Page'],
    technologies: ['Astro', 'Tailwind CSS', 'JavaScript'],
    status: 'produccion',
    featured: true,
    links: {
      repo: 'https://github.com/Andejecruher/baklava',
      demo: 'https://baklava-seven.vercel.app',
    },
    image: '/images/projects/baklava-club-de-mar.webp',
  },
  {
    name: 'Code Creatives',
    slug: 'code-creatives',
    categoryKey: 'digital-agency-web-app',
    tags: ['React', 'Node.js', 'MongoDB', 'SaaS'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    status: 'caso-profesional',
    featured: true,
    links: {
      repo: 'https://github.com/Andejecruher/code-creatives',
    },
    image: '/images/projects/code-creatives.webp',
  },
  {
    name: 'Andejecruher Web',
    slug: 'andejecruher-web',
    categoryKey: 'professional-portfolio',
    tags: ['portfolio', 'personal-branding', 'astro', 'seo', 'typescript'],
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS'],
    status: 'en-desarrollo',
    featured: true,
    links: {
      repo: 'https://github.com/Andejecruher/andejecruher-web',
    },
    image: '/images/projects/andejecruher-web.webp',
  },
  {
    name: 'HunadChat',
    slug: 'hunadchat',
    categoryKey: 'messaging-ai-conversational',
    tags: ['Node.js', 'Laravel', 'WhatsApp', 'AI Agents', 'Automation'],
    technologies: ['Node.js', 'Laravel', 'WhatsApp API', 'FastAPI', 'Python', 'MongoDB', 'Docker'],
    status: 'en-desarrollo',
    featured: true,
    links: {
      repo: 'https://github.com/Andejecruher/hunad-chat',
    },
  },
  {
    name: 'URL Shortener API',
    slug: 'url-shortener-api',
    categoryKey: 'backend-api',
    tags: ['api', 'rest', 'url-shortener', 'express', 'mongodb', 'backend'],
    technologies: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Jest', 'Supertest', 'Bun', 'Valibot'],
    status: 'caso-profesional',
    featured: true,
    links: {
      repo: 'https://github.com/Andejecruher/url-shortener-api',
    },
  },
];

const projectsByLang: Record<Lang, ProjectsDataFile> = {
  es: esProjectsData as ProjectsDataFile,
  en: enProjectsData as ProjectsDataFile,
};

function getProjectContent(lang: Lang, slug: string): ProjectLocaleContent {
  const localized = projectsByLang[lang]?.items[slug];
  if (localized) return localized;

  const fallback = projectsByLang[DEFAULT_LANG]?.items[slug];
  if (fallback) return fallback;

  return {
    description: '',
    problem: '',
    role: '',
  };
}

export function getProjects(lang: Lang): Project[] {
  return projectsBase.map((base) => ({
    ...base,
    ...getProjectContent(lang, base.slug),
  }));
}

export function getProjectBySlug(slug: string, lang: Lang = DEFAULT_LANG): Project | undefined {
  return getProjects(lang).find((project) => project.slug === slug);
}

export const projects = getProjects(DEFAULT_LANG);

export const statusColors: Record<ProjectStatus, string> = {
  'en-desarrollo': 'status-dev',
  demo: 'status-demo',
  produccion: 'status-prod',
  privado: 'status-private',
  'caso-profesional': 'status-professional',
};
