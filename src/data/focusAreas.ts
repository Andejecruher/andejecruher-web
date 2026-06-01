export interface FocusArea {
  title: string;
  description: string;
  icon: string;
}

export const focusAreas: FocusArea[] = [
  {
    title: 'Backend & APIs',
    description:
      'Diseño y construcción de APIs REST robustas, microservicios y lógica de negocio con Laravel, Node.js y FastAPI.',
    icon: 'server',
  },
  {
    title: 'SaaS Architecture',
    description:
      'Arquitectura multi-tenant, autenticación, autorización, billing y escalabilidad para plataformas SaaS modernas.',
    icon: 'cloud',
  },
  {
    title: 'AI Agents & Automation',
    description:
      'Integración de LLMs, construcción de agentes conversacionales y automatización de flujos de trabajo con IA.',
    icon: 'cpu',
  },
  {
    title: 'Messaging Integrations',
    description:
      'Conexión con WhatsApp Business API, Telegram, Instagram y Facebook para soluciones multicanal.',
    icon: 'message',
  },
  {
    title: 'DevOps Learning Path',
    description:
      'Crecimiento activo en Docker, CI/CD, infraestructura como código, monitoreo y despliegues automatizados.',
    icon: 'settings',
  },
];
