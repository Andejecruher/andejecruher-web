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
  OpenAI: { icon: 'simple-icons:openai', color: '#412991' },
  "Google Cloud": { icon: 'simple-icons:googlecloud', color: '#4285F4' },
  Azure: { icon: 'simple-icons:microsoftazure', color: '#0078D4' },
  AWS: { icon: 'simple-icons:amazonaws', color: '#FF9900' },
  RedisJSON: { icon: 'simple-icons:redis', color: '#FF4438' },
  RadixUI: { icon: 'simple-icons:radixui', color: '#000000' },
  FramerMotion: { icon: 'simple-icons:framer', color: '#0055FF' },
  'Lucide Icons': { icon: 'simple-icons:lucide', color: '#E2E8F0' },
  Deepgram: { icon: 'simple-icons:deepgram', color: '#000000' },
  'React PDF': { icon: 'simple-icons:react', color: '#61DAFB' },
  SWR: { icon: 'simple-icons:swr', color: '#000000' },
  Jest: { icon: 'simple-icons:jest', color: '#C21325' },
  'Socket.io': { icon: 'simple-icons:socketdotio', color: '#010101' },
  Twilio: { icon: 'simple-icons:twilio', color: '#E22355' },
  'TanStack React Table': { icon: 'simple-icons:tanstack', color: '#61DAFB' },
  'Radix UI': { icon: 'simple-icons:radixui', color: '#000000' },
  'Framer Motion': { icon: 'simple-icons:framer', color: '#0055FF' },
  'Supertest': { icon: 'simple-icons:testin', color: '#000000' },
  'Bun': { icon: 'simple-icons:bun', color: '#000000' },
  Valibot: { icon: 'simple-icons:boots', color: '#000000' },
  Mongoose: { icon: 'simple-icons:mongoose', color: '#880000' },
  'Next.js 15': { icon: 'simple-icons:nextdotjs', color: '#E2E8F0' },
  'Next.js 16': { icon: 'simple-icons:nextdotjs', color: '#E2E8F0' },
  'React 18': { icon: 'simple-icons:react', color: '#61DAFB' },
  'AI Agents': { icon: 'mdi:robot-outline', color: '#9C27B0' },
  'LLM Integration': { icon: 'mdi:brain', color: '#4CAF50' },
  'WhatsApp API': { icon: 'simple-icons:whatsapp', color: '#25D366' },
  'Telegram API': { icon: 'simple-icons:telegram', color: '#0088CC' },
  'Facebook API': { icon: 'simple-icons:facebook', color: '#1877F2' },
  'Instagram API': { icon: 'simple-icons:instagram', color: '#E4405F' },
  'Process Automation': { icon: 'mdi:auto-mode', color: '#2196F3' },
  'Multi Tenant': { icon: 'mdi:account-multiple', color: '#FF5722' },
  'REST APIs': { icon: 'mdi:api', color: '#607D8B' },
  'Microservices': { icon: 'mdi:server', color: '#009688' },
  'Event Driven Systems': { icon: 'mdi:server-network', color: '#FF9800' },
  'Backend Service Design': { icon: 'mdi:server', color: '#009688' },
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
