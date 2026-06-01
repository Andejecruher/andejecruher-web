export type TechLevel = 'Principal' | 'Frecuente' | 'En aprendizaje' | 'Explorando';

export interface Tech {
  name: string;
  level: TechLevel;
  icon?: string;
}

export interface StackCategory {
  name: string;
  description: string;
  techs: Tech[];
}

export const stackCategories: StackCategory[] = [
  {
    name: 'Frontend',
    description: 'Interfaces modernas y experiencias de usuario',
    techs: [
      { name: 'React', level: 'Principal' },
      { name: 'Astro', level: 'Principal' },
      { name: 'JavaScript', level: 'Principal' },
      { name: 'TypeScript', level: 'Frecuente' },
      { name: 'HTML', level: 'Principal' },
      { name: 'CSS', level: 'Principal' },
      { name: 'Tailwind CSS', level: 'Principal' },
    ],
  },
  {
    name: 'Backend',
    description: 'APIs, servicios y lógica de negocio',
    techs: [
      { name: 'Laravel', level: 'Principal' },
      { name: 'Node.js', level: 'Principal' },
      { name: 'Express', level: 'Principal' },
      { name: 'FastAPI', level: 'Frecuente' },
      { name: 'PHP', level: 'Frecuente' },
      { name: 'Python', level: 'Frecuente' },
    ],
  },
  {
    name: 'Bases de datos',
    description: 'Almacenamiento y gestión de datos',
    techs: [
      { name: 'MySQL', level: 'Principal' },
      { name: 'MongoDB', level: 'Frecuente' },
      { name: 'Firebase', level: 'Frecuente' },
      { name: 'Redis', level: 'En aprendizaje' },
    ],
  },
  {
    name: 'IA & Automatización',
    description: 'Agentes inteligentes e integraciones conversacionales',
    techs: [
      { name: 'Agentes IA', level: 'Frecuente' },
      { name: 'Integración de APIs', level: 'Principal' },
      { name: 'Flujos conversacionales', level: 'Frecuente' },
      { name: 'Automatización de procesos', level: 'Frecuente' },
      { name: 'WhatsApp Business API', level: 'Principal' },
      { name: 'LLM Integration', level: 'En aprendizaje' },
    ],
  },
  {
    name: 'Herramientas',
    description: 'Flujo de trabajo y entorno de desarrollo',
    techs: [
      { name: 'Git', level: 'Principal' },
      { name: 'GitHub', level: 'Principal' },
      { name: 'Vercel', level: 'Principal' },
      { name: 'Docker', level: 'En aprendizaje' },
      { name: 'Postman', level: 'Frecuente' },
      { name: 'VS Code', level: 'Principal' },
    ],
  },
  {
    name: 'DevOps Learning Path',
    description: 'Área de crecimiento hacia infraestructura y operaciones',
    techs: [
      { name: 'Docker', level: 'En aprendizaje' },
      { name: 'CI/CD', level: 'En aprendizaje' },
      { name: 'Cloud Infrastructure', level: 'Explorando' },
      { name: 'Automatización de despliegues', level: 'En aprendizaje' },
      { name: 'Monitoreo', level: 'Explorando' },
      { name: 'Infraestructura como código', level: 'Explorando' },
    ],
  },
];

export const levelColors: Record<TechLevel, string> = {
  Principal: 'border-cyan-500/50 text-cyan-400 bg-cyan-500/10',
  Frecuente: 'border-blue-500/40 text-blue-300 bg-blue-500/10',
  'En aprendizaje': 'border-yellow-500/40 text-yellow-400 bg-yellow-500/10',
  Explorando: 'border-gray-500/40 text-gray-400 bg-gray-500/10',
};
