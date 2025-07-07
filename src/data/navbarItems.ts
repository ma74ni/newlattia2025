export interface NavbarItem {
  label: string;
  href: string;
  visible?: boolean;
}

export const navbarItems: NavbarItem[] = [
  { label: 'Inicio', href: '/', visible: true },
  { label: 'Menú', href: '/menu', visible: true },
  { label: 'Nosotros', href: '/nosotros', visible: false },
  { label: 'Blog', href: '/blog', visible: false },
  { label: 'Contacto', href: '/contacto', visible: true },
];
