import { DEFAULT_LANG, type Lang } from '../i18n/config';
import { localizePath } from '../i18n/routing';
import { SITE_SEO } from './config';
import type { ResolvedSeo, SeoProps } from './types';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

export interface ResolveSeoContext {
  pathname: string;
  origin?: string;
  lang?: Lang;
}

function stripTrailingSlash(url: string): string {
  return url.endsWith('/') && url.length > 1 ? url.slice(0, -1) : url;
}

export function toAbsoluteUrl(pathOrUrl: string, origin: string = SITE_SEO.siteUrl): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const base = stripTrailingSlash(origin);
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

export function resolveCanonical(
  canonical: string | undefined,
  pathname: string,
  origin: string = SITE_SEO.siteUrl,
): string {
  if (canonical) {
    return toAbsoluteUrl(canonical, origin);
  }

  const url = new URL(pathname, origin);
  url.search = '';
  url.hash = '';
  return stripTrailingSlash(url.toString());
}

function buildFullTitle(title: string, template: SeoProps['titleTemplate'] = 'default'): string {
  if (template === 'none') return title;
  if (template === 'full') return title;
  if (title === SITE_SEO.defaultTitle || title.endsWith(` · ${SITE_SEO.siteName}`)) {
    return title;
  }
  return `${title} · ${SITE_SEO.siteName}`;
}

export function resolveSeo(
  props: SeoProps,
  context: ResolveSeoContext,
): ResolvedSeo {
  const lang = props.lang ?? context.lang ?? DEFAULT_LANG;
  const origin = context.origin ?? SITE_SEO.siteUrl;

  const title = props.title ?? SITE_SEO.defaultTitle;
  const fullTitle = buildFullTitle(title, props.titleTemplate);
  const description = props.description ?? SITE_SEO.defaultDescription;
  const canonical = resolveCanonical(props.canonical, context.pathname, origin);
  const rawImage = props.image ?? SITE_SEO.defaultSocialImage;
  const image = toAbsoluteUrl(resolveSocialImage(rawImage), origin);
  const imageAlt = props.imageAlt ?? props.title ?? SITE_SEO.defaultSocialImageAlt;

  const alternateLang: Lang = lang === 'es' ? 'en' : 'es';

  return {
    title,
    fullTitle,
    description,
    canonical,
    image,
    imageAlt,
    imageWidth: SITE_SEO.ogImageWidth,
    imageHeight: SITE_SEO.ogImageHeight,
    type: props.type ?? 'website',
    publishedTime: props.publishedTime,
    modifiedTime: props.modifiedTime,
    author: props.author ?? SITE_SEO.author,
    section: props.section,
    tags: props.tags ?? [],
    robots: props.noindex ? 'noindex, nofollow' : 'index, follow',
    lang,
    ogLocale: SITE_SEO.locales[lang],
    ogLocaleAlternate: SITE_SEO.locales[alternateLang],
    siteName: SITE_SEO.siteName,
    twitterSite: SITE_SEO.twitterSite,
    twitterCreator: SITE_SEO.twitterCreator,
  };
}

function resolveSocialImage(imagePath: string): string {
  if (/^https?:\/\//i.test(imagePath)) {
    return imagePath;
  }

  const normalized = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  const publicPath = join(process.cwd(), 'public', normalized.replace(/^\//, ''));

  if (!existsSync(publicPath)) {
    return SITE_SEO.defaultSocialImage;
  }

  return normalized;
}

export function seoFromBlogPost(data: {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  author: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
  category?: string;
  canonical?: string;
  lang?: Lang;
}): SeoProps {
  return {
    title: data.title,
    description: data.description,
    image: data.image,
    imageAlt: data.imageAlt ?? data.title,
    canonical: data.canonical,
    type: 'article',
    publishedTime: data.pubDate.toISOString(),
    modifiedTime: (data.updatedDate ?? data.pubDate).toISOString(),
    author: data.author,
    section: data.category,
    tags: data.tags,
    lang: data.lang,
  };
}

export function seoFromProject(data: {
  name: string;
  description: string;
  slug: string;
  tags: string[];
  section: string;
  image?: string;
  lang?: Lang;
}): SeoProps {
  return {
    title: data.name,
    description: data.description,
    image: data.image,
    imageAlt: `${data.name} — ${data.section}`,
    canonical: localizePath(`/proyectos/${data.slug}`, data.lang ?? DEFAULT_LANG),
    type: 'article',
    section: data.section,
    tags: data.tags,
    lang: data.lang,
  };
}
