import { colors } from '@junkfm';

export type MenuItem = {
  title: string;
  link: string;
  neonColor: string;
};

export const menuItems: MenuItem[] = [
  { title: 'About', link: '/about', neonColor: colors.neonLightBlue },
  { title: 'Playlist', link: '/playlist', neonColor: colors.neonYellow },
  { title: 'Schedule', link: '/schedule', neonColor: colors.neonPink },
  { title: 'Contact', link: '/contact', neonColor: colors.neonBlue }, // revisit neonGreen instead??
  { title: 'Media', link: '/media', neonColor: colors.neonOrange },
];


        

export interface MenuProps {
  activeRoute: string;
  menuItems: MenuItem[];
}
