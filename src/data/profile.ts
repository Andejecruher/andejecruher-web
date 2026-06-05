import type { Lang } from '../i18n/config';
import { DEFAULT_LANG } from '../i18n/config';
import enProfileData from '../i18n/en/profile-data.json';
import esProfileData from '../i18n/es/profile-data.json';

interface ProfileLocaleContent {
  role: string;
  tagline: string;
  headline: string;
  description: string;
  aboutParagraphs: string[];
  additionalInfo: string[];
  location: string;
}

interface ProfileBase {
  name: string;
  fullName: string;
  email: string;
  phone: string;
  website: string;
  cvUrl?: string;
  availableForProjects: boolean;
}

export type Profile = ProfileBase & ProfileLocaleContent;

const profileBase: ProfileBase = {
  name: 'Andejecruher',
  fullName: 'Antonio de Jesus Cruz Hernandez',
  email: 'andejecruher@gmail.com',
  phone: '+52 322 318 8252',
  website: 'https://andejecruher-web.vercel.app',
  availableForProjects: true,
};

const profileByLang: Record<Lang, ProfileLocaleContent> = {
  es: {
    role: esProfileData.role,
    tagline: esProfileData.tagline,
    headline: esProfileData.headline,
    description: esProfileData.description,
    aboutParagraphs: esProfileData['about-paragraphs'],
    additionalInfo: esProfileData['additional-info'],
    location: esProfileData.location,
  },
  en: {
    role: enProfileData.role,
    tagline: enProfileData.tagline,
    headline: enProfileData.headline,
    description: enProfileData.description,
    aboutParagraphs: enProfileData['about-paragraphs'],
    additionalInfo: enProfileData['additional-info'],
    location: enProfileData.location,
  },
};

export function getProfile(lang: Lang): Profile {
  const localized = profileByLang[lang] ?? profileByLang[DEFAULT_LANG];
  return {
    ...profileBase,
    ...localized,
  };
}

export const profile = getProfile(DEFAULT_LANG);
