import type { Lang } from '../i18n/config';
import enHero from '../i18n/en/hero.json';
import esHero from '../i18n/es/hero.json';

export interface HeroHeadline {
  line1Phrases: string[];
  line2: string;
  line2Accent: string;
}

const heroByLang: Record<Lang, HeroHeadline> = {
  es: {
    line1Phrases: esHero['headline-line1-phrases'],
    line2: esHero['headline-line2'],
    line2Accent: esHero['headline-line2-accent'],
  },
  en: {
    line1Phrases: enHero['headline-line1-phrases'],
    line2: enHero['headline-line2'],
    line2Accent: enHero['headline-line2-accent'],
  },
};

export function getHeroHeadline(lang: Lang): HeroHeadline {
  return heroByLang[lang];
}
