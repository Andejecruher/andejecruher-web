import type { Lang } from '../i18n/config';
import { useTranslations } from '../i18n/utils';
import { SITE_SEO } from './config';
import type { PageSeoKey, SeoProps } from './types';

const PAGE_I18N_KEYS: Record<
  PageSeoKey,
  { title: string; description: string; type?: SeoProps['type'] }
> = {
  home: {
    title: 'hero:seo-title',
    description: 'hero:seo-description',
    type: 'website',
  },
  about: {
    title: 'about:page-title',
    description: 'about:page-description',
    type: 'profile',
  },
  experience: {
    title: 'experience:page-title',
    description: 'experience:page-description',
  },
  stack: {
    title: 'stack:page-title',
    description: 'stack:page-description',
  },
  contact: {
    title: 'contact:page-title',
    description: 'contact:page-description',
  },
  blog: {
    title: 'blog:index-meta-title',
    description: 'blog:index-meta-description',
  },
  projects: {
    title: 'projects:page-title',
    description: 'projects:page-description',
  },
};

/**
 * Returns SEO props for a known page key, resolved via i18n.
 * Pass overrides for page-specific fields (canonical, image, etc.).
 */
export function getPageSeo(
  pageKey: PageSeoKey,
  lang: Lang,
  overrides: Partial<SeoProps> = {},
): SeoProps {
  const t = useTranslations(lang);
  const keys = PAGE_I18N_KEYS[pageKey];

  const title =
    pageKey === 'home'
      ? t(keys.title) || SITE_SEO.defaultTitle
      : t(keys.title);

  return {
    title,
    description: t(keys.description),
    type: keys.type ?? 'website',
    lang,
    titleTemplate: pageKey === 'home' ? 'full' : 'default',
    ...overrides,
  };
}
