export type SpecializationKey =
  | 'backend-engineering'
  | 'saas-architecture'
  | 'ai-agents'
  | 'smart-integrations'
  | 'automation-workflows';

export type CapabilityKey =
  | 'backend-engineering'
  | 'frontend-engineering'
  | 'saas-architecture'
  | 'ai-integrations'
  | 'data-layer';

export type RoadmapStatus = 'completed' | 'in-progress' | 'planned';

export interface Specialization {
  key: SpecializationKey;
}

export interface Capability {
  key: CapabilityKey;
  technologies: readonly string[];
}

export interface RoadmapMilestone {
  key: string;
  status: RoadmapStatus;
}

export const stackSpecializations: readonly Specialization[] = [
  { key: 'backend-engineering' },
  { key: 'saas-architecture' },
  { key: 'ai-agents' },
  { key: 'smart-integrations' },
  { key: 'automation-workflows' },
] as const;

export const capabilityMap: readonly Capability[] = [
  {
    key: 'backend-engineering',
    technologies: ['Node.js', 'Express', 'Laravel', 'FastAPI', 'PHP', 'GraphQL'],
  },
  {
    key: 'frontend-engineering',
    technologies: ['React', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS'],
  },
  {
    key: 'saas-architecture',
    technologies: [
      'Multi Tenant',
      'REST APIs',
      'Microservices',
      'Event Driven Systems',
      'Backend Service Design',
    ],
  },
  {
    key: 'ai-integrations',
    technologies: [
      'AI Agents',
      'LLM Integration',
      'WhatsApp API',
      'Telegram API',
      'Facebook API',
      'Instagram API',
      'Process Automation',
    ],
  },
  {
    key: 'data-layer',
    technologies: ['MySQL', 'MongoDB', 'Firebase', 'Redis'],
  },
] as const;

export const devOpsRoadmap: readonly RoadmapMilestone[] = [
  { key: 'deployment-automation', status: 'completed' },
  { key: 'container-orchestration', status: 'in-progress' },
  { key: 'ci-cd-pipelines', status: 'in-progress' },
  { key: 'infrastructure-as-code', status: 'planned' },
  { key: 'observability', status: 'planned' },
] as const;
