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
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    transition: 'box-shadow 400ms, background-color 400ms, backdrop-filter 400ms',
    '&.scrolled': {
      backgroundColor: chroma(sectionBackgrounds.hero).alpha(0.8).hex(),
      backdropFilter: 'blur(5px) brightness(0.8)',
      boxShadow: `0 5px 5px ${chroma(sectionBackgrounds.hero).alpha(0.4).darken(3).hex()}`,
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

    // on hover the letters id will slide up and out of the clip, and the home id will slide up into its place, which will be hilarious
    '&:hover': {
      cursor: activeRoute === '/' ? 'default' : 'pointer',
      '& svg': {
        '& #letters': {
          transform: 'translateY(-170%)',
          transition: `transform 170ms ${lightEase} 40ms`,
        },
        '& #home': {
          transform: 'translateY(-120%)',
          transition: `transform 200ms ${lightEase} 55ms`,
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
      outline: `4px solid ${colors.black}`,
      '& #home': {
        transformOrigin: 'center',
        transformBox: 'fill-box',
        transition: `transform 400ms ${lightEase}`,
        transform: 'translateY(20%)',
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
        transition: `transform 400ms ${lightEase}`,
        '& > g path': {
          transition: `fill 300ms ${lightEase}, stroke-width 300ms ${lightEase}`,
          fill:
            activeRoute === '/'
              ? colors.white
              : chroma(colors.yellow).darken(0).desaturate(0.8).hex(),
          strokeWidth: activeRoute === '/' ? 5 : 0, // revisit //deletelater
          stroke:
            activeRoute === '/'
              ? colors.white
              : chroma(colors.yellow).darken(0).desaturate(0.8).hex(),
        },
      },
      rect: {
        transformOrigin: '50% 50%',
        transition: `fill ${activeRoute === '/' ? 250 : 600}ms ease-in-out`,
        fill: activeRoute === '/' ? colors.red : chroma(colors.red).alpha(1).desaturate(2).hex(),
        transformBox: 'fill-box',
        filter: `drop-shadow(0 20px 25px ${colors.black}) drop-shadow(0 -20px 25px ${colors.black})`,

        '&#bottom-line': {
          transition: `all 250ms ${lightEase}`,
        },
        '&#top-line': {
          transition: `all 250ms ${lightEase}`,
        },
      },
    },
  },
}));
