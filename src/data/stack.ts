export type TechLevel = 'expert' | 'regular' | 'learning' | 'exploring';

export interface Tech {
  name: string;
  level: TechLevel;
  icon?: string;
}

export interface StackCategory {
  /** i18n key segment — resolves to stack:category-{key}-name / stack:category-{key}-desc */
  key: string;
  techs: Tech[];
}

export const stackCategories: StackCategory[] = [
  {
    key: 'frontend',
    techs: [
      { name: 'React', level: 'expert' },
      { name: 'Next.js', level: 'expert' },
      { name: 'Astro', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'TypeScript', level: 'regular' },
      { name: 'HTML5', level: 'expert' },
      { name: 'CSS3', level: 'expert' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'Bootstrap', level: 'regular' },
      { name: 'Vue.js', level: 'regular' },
    ],
  },
  {
    key: 'backend',
    techs: [
      { name: 'Laravel', level: 'expert' },
      { name: 'Node.js', level: 'expert' },
      { name: 'Express', level: 'expert' },
      { name: 'FastAPI', level: 'regular' },
      { name: 'PHP', level: 'regular' },
      { name: 'Python', level: 'regular' },
      { name: 'GraphQL', level: 'regular' },
    ],
  },
  {
    key: 'databases',
    techs: [
      { name: 'MySQL', level: 'expert' },
      { name: 'MongoDB', level: 'regular' },
      { name: 'Firebase', level: 'regular' },
      { name: 'Redis', level: 'learning' },
    ],
  },
  {
    key: 'architecture',
    techs: [
      { name: 'SaaS Multi-tenant', level: 'regular' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'Microservices', level: 'regular' },
      { name: 'Backend service design', level: 'regular' },
    ],
  },
  {
    key: 'ai',
    techs: [
      { name: 'AI Agents', level: 'regular' },
      { name: 'LLM Integration', level: 'learning' },
      { name: 'Conversational flows', level: 'regular' },
      { name: 'Process automation', level: 'regular' },
    ],
  },
  {
    key: 'integrations',
    techs: [
      { name: 'WhatsApp Business API', level: 'expert' },
      { name: 'Instagram API', level: 'regular' },
      { name: 'Facebook API', level: 'regular' },
      { name: 'Telegram API', level: 'regular' },
      { name: 'BigCommerce', level: 'regular' },
    ],
  },
  {
    key: 'tools',
    techs: [
      { name: 'Git', level: 'expert' },
      { name: 'GitHub', level: 'expert' },
      { name: 'Docker', level: 'learning' },
      { name: 'Vercel', level: 'expert' },
      { name: 'Postman', level: 'regular' },
      { name: 'VS Code', level: 'expert' },
    ],
  },
  {
    key: 'devops',
    techs: [
      { name: 'CI/CD', level: 'learning' },
      { name: 'Cloud Infrastructure', level: 'exploring' },
      { name: 'Deployment automation', level: 'learning' },
      { name: 'Infrastructure as code', level: 'exploring' },
      { name: 'Monitoring', level: 'exploring' },
    ],
  },
];

export const levelColors: Record<TechLevel, string> = {
  expert: 'level-principal',
  regular: 'level-frequent',
  learning: 'level-learning',
  exploring: 'level-exploring',
};
