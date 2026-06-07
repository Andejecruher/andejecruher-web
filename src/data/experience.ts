import type { Lang } from '../i18n/config';
import { DEFAULT_LANG } from '../i18n/config';
import enExperienceData from '../i18n/en/experience-data.json';
import esExperienceData from '../i18n/es/experience-data.json';
import { localizePath } from '../i18n/routing';
import type { ProjectCategoryKey } from './projects';
import { getProjects } from './projects';

type ExperienceId =
  | 'clupp'
  | 'diferente-web'
  | 'hoteles-buenaventura'
  | 'the-rocket-code'
  | 'creativa-softline';

interface ExperienceLocaleContent {
  role: string;
  period: string;
  location: string;
  modality: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  relatedProjects: string[];
}

interface ExperienceLocaleRawContent {
  role: string;
  period: string;
  location: string;
  modality: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  relatedProjects?: string[];
  'related-projects'?: string[];
}

interface ExperienceBase {
  id: ExperienceId;
  company: string;
  technologies: string[];
  confidential?: boolean;
}

export interface ExperienceRelatedProject {
  slug: string;
  name: string;
  href: string;
  categoryKey: ProjectCategoryKey;
}

export interface Experience extends ExperienceLocaleContent {
  id: ExperienceId;
  company: string;
  technologies: string[];
  confidential?: boolean;
  relatedPortfolioProjects: ExperienceRelatedProject[];
}

interface ExperienceDataFile {
  items: Record<ExperienceId, ExperienceLocaleRawContent>;
}

const experiencesBase: ExperienceBase[] = [
  {
    id: 'clupp',
    company: 'Clupp',
    technologies: ['Next.js', 'React', 'Node.js', 'Firebase'],
    confidential: false,
  },
  {
    id: 'diferente-web',
    company: 'Diferente Web',
    technologies: ['MySQL', 'MongoDB', 'BigCommerce', 'JavaScript', 'PHP'],
    confidential: false,
  },
  {
    id: 'hoteles-buenaventura',
    company: 'Hoteles Buenaventura',
    technologies: ['Laravel', 'MySQL', 'React'],
    confidential: false,
  },
  {
    id: 'the-rocket-code',
    company: 'The Rocket Code',
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
    confidential: false,
  },
  {
    id: 'creativa-softline',
    company: 'Creativa Softline',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    confidential: false,
  },
];

const experienceByLang: Record<Lang, ExperienceDataFile> = {
  es: esExperienceData as ExperienceDataFile,
  en: enExperienceData as ExperienceDataFile,
};

function normalizeRelatedProjects(localized: ExperienceLocaleRawContent): string[] {
  return localized.relatedProjects ?? localized['related-projects'] ?? [];
}

function getExperienceContent(lang: Lang, id: ExperienceId): ExperienceLocaleContent {
  const localized = experienceByLang[lang]?.items[id];
  if (localized) {
    return {
      role: localized.role,
      period: localized.period,
      location: localized.location,
      modality: localized.modality,
      description: localized.description,
      responsibilities: localized.responsibilities,
      achievements: localized.achievements,
      relatedProjects: normalizeRelatedProjects(localized),
    };
  }

  const fallback = experienceByLang[DEFAULT_LANG]?.items[id];
  if (fallback) {
    return {
      role: fallback.role,
      period: fallback.period,
      location: fallback.location,
      modality: fallback.modality,
      description: fallback.description,
      responsibilities: fallback.responsibilities,
      achievements: fallback.achievements,
      relatedProjects: normalizeRelatedProjects(fallback),
    };
  }

  return {
    role: '',
    period: '',
    location: '',
    modality: '',
    description: '',
    responsibilities: [],
    achievements: [],
    relatedProjects: [],
  };
}

function getProjectHref(lang: Lang, slug: string): string {
  return localizePath(`/proyectos/${slug}`, lang);
}

export function getExperiences(lang: Lang): Experience[] {
  const projectsBySlug = new Map(getProjects(lang).map((project) => [project.slug, project]));

  return experiencesBase.map((base) => {
    const localized = getExperienceContent(lang, base.id);
    const relatedPortfolioProjects = localized.relatedProjects
      .map((slug) => projectsBySlug.get(slug))
      .filter((project): project is NonNullable<typeof project> => Boolean(project))
      .map((project) => ({
        slug: project.slug,
        name: project.name,
        href: getProjectHref(lang, project.slug),
        categoryKey: project.categoryKey,
      }));

    return {
      ...base,
      ...localized,
      relatedPortfolioProjects,
    };
  });
}

export const experiences = getExperiences(DEFAULT_LANG);
