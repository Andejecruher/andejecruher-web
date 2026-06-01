import type { Lang } from './config';
import { DEFAULT_LANG, SUPPORTED_LANGS } from './config';

const ES_TO_EN_SEGMENT: Record<string, string> = {
  'sobre-mi': 'about',
  experiencia: 'experience',
  proyectos: 'projects',
  contacto: 'contact',
  stack: 'stack',
  blog: 'blog',
};

const EN_TO_ES_SEGMENT: Record<string, string> = Object.fromEntries(
  Object.entries(ES_TO_EN_SEGMENT).map(([es, en]) => [en, es])
);

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '') return '/';

  const withSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (withSlash === '/') return '/';

  return withSlash.endsWith('/') ? withSlash.slice(0, -1) : withSlash;
}

function stripLangPrefix(pathname: string): { lang: Lang; path: string } {
  const normalized = normalizePathname(pathname);
  const segments = normalized.split('/').filter(Boolean);
  const first = segments[0] as Lang | undefined;

  if (first && SUPPORTED_LANGS.includes(first)) {
    const rest = segments.slice(1).join('/');
    return {
      lang: first,
      path: rest ? `/${rest}` : '/',
    };
  }

  return {
    lang: DEFAULT_LANG,
    path: normalized,
  };
}

function mapFirstSegment(pathname: string, dictionary: Record<string, string>): string {
  const normalized = normalizePathname(pathname);
  if (normalized === '/') return '/';

  const [first, ...rest] = normalized.slice(1).split('/');
  const mappedFirst = dictionary[first] ?? first;
  const mapped = [mappedFirst, ...rest].filter(Boolean).join('/');

  return `/${mapped}`;
}

function addLangPrefix(pathname: string, lang: Lang): string {
  const normalized = normalizePathname(pathname);

  if (lang === DEFAULT_LANG) {
    return normalized;
  }

  if (normalized === '/') {
    return `/${lang}`;
  }

  return `/${lang}${normalized}`;
}

export function localizePath(pathname: string, lang: Lang): string {
  const { path } = stripLangPrefix(pathname);
  const spanishPath = mapFirstSegment(path, EN_TO_ES_SEGMENT);
  const targetPath = lang === 'en' ? mapFirstSegment(spanishPath, ES_TO_EN_SEGMENT) : spanishPath;

  return addLangPrefix(targetPath, lang);
}

export function getLangFromPath(pathname: string): Lang {
  return stripLangPrefix(pathname).lang;
}

function toAbsoluteUrl(site: string | URL, pathname: string): string {
  return new URL(localizePath(pathname, getLangFromPath(pathname)), site).href;
}

export function getSeoAlternates(pathname: string, site: string | URL): {
  canonical: string;
  alternates: Array<{ hreflang: string; href: string }>;
} {
  const lang = getLangFromPath(pathname);
  const canonicalPath = localizePath(pathname, lang);

  return {
    canonical: toAbsoluteUrl(site, canonicalPath),
    alternates: [
      { hreflang: 'es', href: new URL(localizePath(pathname, 'es'), site).href },
      { hreflang: 'en', href: new URL(localizePath(pathname, 'en'), site).href },
      { hreflang: 'x-default', href: new URL(localizePath(pathname, 'es'), site).href },
    ],
  };
}
