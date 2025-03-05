import { createStyles } from '@mantine/core';
import { sectionBackgrounds, mq, colors } from '@junkfm';
import chroma from 'chroma-js';

export interface MenuStylesProps {
  isMobile: boolean;
  activeRoute: string;
}

export const lightEase = 'cubic-bezier(0.41, 0.09, 0.44, 0.89)';

export const useMenuStyles = createStyles((_, { isMobile, activeRoute }: MenuStylesProps) => ({
  menu: {
    width: '100dvw',
    height: isMobile ? '65px' : '80px',
    display: 'flex',
    backgroundColor: sectionBackgrounds.menu,
    backdropFilter: 'blur(0)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    transition: 'box-shadow 370ms, background-color 370ms, backdrop-filter 370ms',
    boxShadow: `0 6px 14px ${chroma(sectionBackgrounds.hero).alpha(0.8).hex()}`,
    '&.scrolled': {
      transition: 'box-shadow 500ms, background-color 500ms, backdrop-filter 500ms',
      backgroundColor: chroma(sectionBackgrounds.hero).darken(0.1).alpha(0.81).hex(),
      backdropFilter: 'blur(5px) brightness(0.9)',
      boxShadow: `0 4px 7px ${chroma(sectionBackgrounds.hero).alpha(0.6).hex()}`,
    },
  },

  menuInner: {
    paddingInline: 'max(3vw, (100vw - 1560px)/2)', // variant of row padding
    width: '100%',
    height: '92%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [mq.customMax(1200)]: {
      paddingInline: 'max(2vw, (100vw - 1600px)/2)',
    },
  },

  menuSwitchBox: {
    width: '67%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center ',
  },

  logoLink: {
    cursor: activeRoute === '/' ? 'default' : 'pointer',
    pointerEvents: activeRoute === '/' ? 'none' : 'auto',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transformOrigin: 'center',
    transition: `transform 300ms ${lightEase}`,
    transform: activeRoute === '/' ? 'scale(1)' : 'scale(0.8)',

    // -------------- RIDICULOUS HOVER STUFF -------------- //
    // -------------- RIDICULOUS HOVER STUFF -------------- //
    // -------------- RIDICULOUS HOVER STUFF -------------- //

    // on hover, the JUNK FM letters/paths will slide up and out of the container, and the "HOME" letters will slide up into the center.
    // on MOBILE, the hover state of the HOME letter should be visible at all times when the route is NOT "/" since hovering isn't a thing,
    // then the UNhover state going back to JUNK FM should happen on route change to "/"
    '&:hover': {
      cursor: activeRoute === '/' ? 'default' : 'pointer',
      '& svg': {
        '& #letters': {
          transform: !isMobile ? 'translateY(-170%)' : 'translateY(0%)',
        },
        '& #home': {
          transform: !isMobile ? 'translateY(-115%)' : 'translateY(23%)',
        },
        rect: {
          fill:
            activeRoute === '/' ? colors.red : chroma(colors.red).alpha(1).desaturate(1.2).hex(),
        },
      },
    },

    // ---------- END HOVER STUFF ---------- //
    // ---------- END HOVER STUFF ---------- //

    '& svg': {
      // outline: `4px solid ${colors.black}`,
      '& #home': {
        transformOrigin: 'center',
        transformBox: 'fill-box',
        transition: `transform 300ms ${lightEase}`,
        transform: isMobile && activeRoute !== '/' ? 'translateY(-115%)' : 'translateY(23%)',
        '& > g path, & > path': {
          transition: 'fill 300ms ease-in-out, stroke-width 300ms ease-in-out',
          fill: colors.white,
          stroke:
            activeRoute === '/'
              ? colors.white
              : chroma(colors.yellow).darken(0).desaturate(1.6).hex(),
          '&#home-shape': {
            fill: colors.lightBlue,
          },
        },
      },
      '& #letters': {
        transformOrigin: 'center',
        transformBox: 'fill-box',
        transform: isMobile && activeRoute !== '/' ? 'translateY(-170%)' : 'translateY(0)',
        transition: `transform 260ms ${lightEase}`,
        '& > g path': {
          transition: `fill 260ms ${lightEase}, stroke-width 260ms ${lightEase}`,
          fill:
            activeRoute === '/'
              ? colors.white
              : chroma(colors.yellow).darken(0).desaturate(0.8).hex(),
          strokeWidth: activeRoute === '/' ? 5 : 0,
          stroke:
            activeRoute === '/'
              ? colors.white
              : chroma(colors.yellow).darken(0).desaturate(0.8).hex(),
        },
      },
      rect: {
        transformOrigin: '50% 50%',
        transition: `fill 350ms ${lightEase}`,
        fill:
          activeRoute === '/' && isMobile
            ? colors.red
            : chroma(colors.red).alpha(1).desaturate(2).hex(),
        transformBox: 'fill-box',
      },
    },
  },
}));
