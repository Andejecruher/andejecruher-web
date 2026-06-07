export interface TechIconEntry {
  icon: string;
  /** Brand color tuned for dark backgrounds */
  color: string;
}

/**
 * Centralized map of technology names to Iconify icons and brand colors.
 * Uses simple-icons for brand logos; mdi for generic concepts (e.g. SaaS).
 */
export const techIconMap: Record<string, TechIconEntry> = {
  SaaS: { icon: 'mdi:cloud-outline', color: '#38bdf8' },
  Laravel: { icon: 'simple-icons:laravel', color: '#FF2D20' },
  Python: { icon: 'simple-icons:python', color: '#FFD43B' },
  'Node.js': { icon: 'simple-icons:nodedotjs', color: '#339933' },
  React: { icon: 'simple-icons:react', color: '#61DAFB' },
  JavaScript: { icon: 'simple-icons:javascript', color: '#F7DF1E' },
  TypeScript: { icon: 'simple-icons:typescript', color: '#3178C6' },
  'Next.js': { icon: 'simple-icons:nextdotjs', color: '#E2E8F0' },
  Astro: { icon: 'simple-icons:astro', color: '#FF5D01' },
  PHP: { icon: 'simple-icons:php', color: '#777BB4' },
  Express: { icon: 'simple-icons:express', color: '#CBD5E1' },
  MySQL: { icon: 'simple-icons:mysql', color: '#4479A1' },
  MongoDB: { icon: 'simple-icons:mongodb', color: '#47A248' },
  Docker: { icon: 'simple-icons:docker', color: '#2496ED' },
  Git: { icon: 'simple-icons:git', color: '#F05032' },
  GitHub: { icon: 'simple-icons:github', color: '#E2E8F0' },
  Tailwind: { icon: 'simple-icons:tailwindcss', color: '#06B6D4' },
  'Tailwind CSS': { icon: 'simple-icons:tailwindcss', color: '#06B6D4' },
  Firebase: { icon: 'simple-icons:firebase', color: '#FFCA28' },
  Redis: { icon: 'simple-icons:redis', color: '#FF4438' },
  GraphQL: { icon: 'simple-icons:graphql', color: '#E10098' },
  Vue: { icon: 'simple-icons:vuedotjs', color: '#4FC08D' },
  'Vue.js': { icon: 'simple-icons:vuedotjs', color: '#4FC08D' },
  FastAPI: { icon: 'simple-icons:fastapi', color: '#009688' },
  Vercel: { icon: 'simple-icons:vercel', color: '#E2E8F0' },
  WhatsApp: { icon: 'simple-icons:whatsapp', color: '#25D366' },
  HTML: { icon: 'simple-icons:html5', color: '#E34F26' },
  CSS: { icon: 'simple-icons:css3', color: '#1572B6' },
  Bootstrap: { icon: 'simple-icons:bootstrap', color: '#7952B3' },
  BigCommerce: { icon: 'simple-icons:bigcommerce', color: '#333333' },
};

export function getTechIconEntry(name: string): TechIconEntry | undefined {
  return techIconMap[name];
}

export function getTechIcon(name: string): string | undefined {
  return techIconMap[name]?.icon;
}

export function getTechIconColor(name: string): string | undefined {
  return techIconMap[name]?.color;
}
