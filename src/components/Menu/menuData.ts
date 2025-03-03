import { colors } from '@junkfm';

export type MenuItem = {
  title: string;
  link: string;
  neonColor: string;
};

export const menuItems: MenuItem[] = [
  { title: 'About', link: '/about', neonColor: colors.neonLightBlue },
  { title: 'Playlist', link: '/playlist', neonColor: colors.neonPink },
  { title: 'Shows', link: '/shows', neonColor: colors.neonOrange },
  { title: 'Contact', link: '/contact', neonColor: colors.neonBlue }, // revisit neonGreen instead??
  { title: 'Media', link: '/media', neonColor: colors.neonYellow },
];


        

export interface MenuProps {
  activeRoute: string;
  menuItems: MenuItem[];
}
