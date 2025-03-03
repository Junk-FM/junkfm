export type MenuItem = {
  title: string;
  link: string;
};

export const menuItems: MenuItem[] = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Playlist', link: '/playlist' },
  { title: 'Shows', link: '/shows' },
  { title: 'Contact', link: '/contact' },
  { title: 'Media', link: '/media' },
];

export interface MenuProps {
  activeRoute: string;
  menuItems: MenuItem[];
}
