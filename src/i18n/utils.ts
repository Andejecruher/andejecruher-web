import type { Lang } from './config';
import { DEFAULT_LANG, SUPPORTED_LANGS } from './config';

// --- Static translation map (build-time safe for Astro SSG) ---
import esCommon from './es/common.json';
import enCommon from './en/common.json';
import esNav from './es/nav.json';
import enNav from './en/nav.json';
import esHero from './es/hero.json';
import enHero from './en/hero.json';
import esFooter from './es/footer.json';
import enFooter from './en/footer.json';
import esCta from './es/cta.json';
import enCta from './en/cta.json';
import esContact from './es/contact.json';
import enContact from './en/contact.json';
import esExperience from './es/experience.json';
import enExperience from './en/experience.json';
import esAbout from './es/about.json';
import enAbout from './en/about.json';
import esProjects from './es/projects.json';
import enProjects from './en/projects.json';
import esStack from './es/stack.json';
import enStack from './en/stack.json';
import esHome from './es/home.json';
import enHome from './en/home.json';
import esBlog from './es/blog.json';
import enBlog from './en/blog.json';
import esProfileData from './es/profile-data.json';
import enProfileData from './en/profile-data.json';
import esExperienceData from './es/experience-data.json';
import enExperienceData from './en/experience-data.json';
import esProjectsData from './es/projects-data.json';
import enProjectsData from './en/projects-data.json';

type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];
interface JsonObject {
  [key: string]: JsonValue;
}

const translations: Record<Lang, Record<string, JsonObject>> = {
  es: {
    common: esCommon as JsonObject,
    nav: esNav as JsonObject,
    hero: esHero as JsonObject,
    footer: esFooter as JsonObject,
    cta: esCta as JsonObject,
    contact: esContact as JsonObject,
    experience: esExperience as JsonObject,
    about: esAbout as JsonObject,
    projects: esProjects as JsonObject,
    stack: esStack as JsonObject,
    home: esHome as JsonObject,
    blog: esBlog as JsonObject,
    'profile-data': esProfileData as JsonObject,
    'experience-data': esExperienceData as JsonObject,
    'projects-data': esProjectsData as JsonObject,
  },
  en: {
    common: enCommon as JsonObject,
    nav: enNav as JsonObject,
    hero: enHero as JsonObject,
    footer: enFooter as JsonObject,
    cta: enCta as JsonObject,
    contact: enContact as JsonObject,
    experience: enExperience as JsonObject,
    about: enAbout as JsonObject,
    projects: enProjects as JsonObject,
    stack: enStack as JsonObject,
    home: enHome as JsonObject,
    blog: enBlog as JsonObject,
    'profile-data': enProfileData as JsonObject,
    'experience-data': enExperienceData as JsonObject,
    'projects-data': enProjectsData as JsonObject,
  },
};

// --- Language resolution ---

/**
 * Resolves the active language from a URL pathname.
 * Convention: `/en/...` => 'en'; everything else => DEFAULT_LANG.
 */
export function getLang(pathname: string): Lang {
  const segment = pathname.split('/').find(Boolean);
  if (segment && SUPPORTED_LANGS.includes(segment as Lang)) {
    return segment as Lang;
  }
  return DEFAULT_LANG;
}

// --- Translation helper ---

/**
 * Resolves a dot-notated path inside an object.
 * e.g. get({ a: { b: 'hello' } }, 'a.b') => 'hello'
 */
function resolvePath(obj: JsonObject, path: string): string | undefined {
  const parts = path.split('.');
  let current: JsonValue = obj;
  for (const part of parts) {
    if (current === null || typeof current !== 'object' || Array.isArray(current)) {
      return undefined;
    }
    current = (current as JsonObject)[part];
  }
  return typeof current === 'string' ? current : undefined;
}

/**
 * Interpolates `{{var}}` placeholders in a string.
 */
function interpolate(str: string, vars: Record<string, string>): string {
  return str.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? `{{${key}}}`);
}

/**
 * Returns a translation function bound to the given language.
 *
 * Key format:  `namespace:key` (flat) or `namespace:nested.key` (dot notation)
 * Namespaces:  common | nav | hero | footer | cta
 *
 * Examples:
 *   t('nav:aria-label')
 *   t('hero:available-badge')
 *   t('footer:built-with')
 *   t('common:a11y.skip-to-content')
 *
 * Fallback chain: requested lang → DEFAULT_LANG → readable key string (no crash).
 */
export function useTranslations(lang: Lang) {
  return function t(key: string, vars?: Record<string, string>): string {
    const [namespace, ...rest] = key.split(':');
    const dotPath = rest.join(':'); // support colons in path (unlikely but safe)

    const tryResolve = (l: Lang): string | undefined => {
      const ns = translations[l]?.[namespace];
      if (!ns) return undefined;
      return resolvePath(ns, dotPath);
    };

    const raw = tryResolve(lang) ?? tryResolve(DEFAULT_LANG) ?? dotPath.replace(/\./g, ' ');
    return vars ? interpolate(raw, vars) : raw;
  };
}
