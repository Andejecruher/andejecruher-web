import type { Lang } from '../i18n/config';
import { DEFAULT_LANG } from '../i18n/config';
import esExperienceData from '../i18n/es/experience-data.json';
import enExperienceData from '../i18n/en/experience-data.json';

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
  relatedProjects?: string[];
}

interface ExperienceLocaleRawContent {
  role: string;
  period: string;
  location: string;
  modality: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  'related-projects'?: string[];
}

interface ExperienceBase {
  id: ExperienceId;
  company: string;
  technologies: string[];
  confidential?: boolean;
}

export interface Experience extends ExperienceLocaleContent {
  company: string;
  technologies: string[];
  confidential?: boolean;
}

interface ExperienceDataFile {
  items: Record<ExperienceId, ExperienceLocaleRawContent>;
}

const experiencesBase: ExperienceBase[] = [
  {
    id: 'clupp',
    company: 'Clupp',
    technologies: ['Next.js', 'React.js', 'Node.js', 'Firebase'],
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
    technologies: ['Laravel', 'MySQL', 'React.js'],
    confidential: false,
  },
  {
    id: 'the-rocket-code',
    company: 'The Rocket Code',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
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
      relatedProjects: localized['related-projects'],
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
      relatedProjects: fallback['related-projects'],
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
  };
}

export function getExperiences(lang: Lang): Experience[] {
  return experiencesBase.map((base) => ({
    ...base,
    ...getExperienceContent(lang, base.id),
  }));
}

export const experiences = getExperiences(DEFAULT_LANG);
