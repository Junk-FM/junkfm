import { colors } from '@junkfm';

export type MenuItem = {
  title: string;
  link: string;
  neonColor: string;
};

export const menuItems: MenuItem[] = [
  { title: 'Home', link: '/', neonColor: colors.neonLightBlue },
  { title: 'About', link: '/about', neonColor: colors.neonYellow },
  { title: 'Playlist', link: '/playlist', neonColor: colors.neonOrange },
  { title: 'Shows', link: '/shows', neonColor: colors.neonGreen },
  { title: 'Contact', link: '/contact', neonColor: colors.neonBlue },
  { title: 'Media', link: '/media', neonColor: colors.neonPink },
];


        

export interface MenuProps {
  activeRoute: string;
  menuItems: MenuItem[];
}
