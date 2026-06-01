export interface NavItem {
  /** i18n key segment — resolves to nav:item-{key} */
  key: string;
  href: string;
}

export const navItems: NavItem[] = [
  { key: 'home',        href: '/' },
  { key: 'experience',  href: '/experiencia' },
  { key: 'projects',    href: '/proyectos' },
  { key: 'stack',       href: '/stack' },
  { key: 'about',       href: '/sobre-mi' },
  { key: 'blog',        href: '/blog' },
  { key: 'contact',     href: '/contacto' },
];
