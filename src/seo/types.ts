import type { Lang } from '../i18n/config';

export type SeoContentType = 'website' | 'article' | 'profile';

export interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  canonical?: string;
  type?: SeoContentType;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  lang?: Lang;
  /** When true, title is used as-is without site suffix */
  titleTemplate?: 'default' | 'full' | 'none';
}

export interface ResolvedSeo {
  title: string;
  fullTitle: string;
  description: string;
  canonical: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  type: SeoContentType;
  publishedTime?: string;
  modifiedTime?: string;
  author: string;
  section?: string;
  tags: string[];
  robots: string;
  lang: Lang;
  ogLocale: string;
  ogLocaleAlternate?: string;
  siteName: string;
  twitterSite: string;
  twitterCreator: string;
}

export type PageSeoKey =
  | 'home'
  | 'about'
  | 'experience'
  | 'stack'
  | 'contact'
  | 'blog'
  | 'projects';
