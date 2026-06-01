export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Experiencia', href: '/experiencia' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Stack', href: '/stack' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];
