export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  external: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Andejecruher',
    icon: 'github',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andejecruher/',
    icon: 'linkedin',
    external: true,
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/Andejecruher',
    icon: 'twitter',
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:andejecruher@gmail.com',
    icon: 'email',
    external: false,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/523223188252',
    icon: 'whatsapp',
    external: true,
  },
];
