import { createStyles } from '@mantine/core';
import { colors, mq } from '@junkfm';
import chroma from 'chroma-js';

export const useMenuMobileStyles = createStyles(() => ({
  menuMobile: {
    // just the hamburger for now
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  hamburger: {
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    '&:hover': {
      svg: {
        '& *': {
          fill: colors.red,
        },
      },
    },

    //REVISIT //TODO FOCUS STUFF
  },

  mobileDrawer: {
    '& .mantine-Paper-root': {
      background: colors.almostWhite,
    },
  },

  mobileMenuContainerOuter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginInline: 'auto',
    height: '94dvh',
    width: '100%',
  },

  mobileMenuRoutesContainer: {
    width: '100%',
  },

  mobileMenuTextRoutesContainer: {
    marginTop: '1em',
  },

  mobileMenuItem: {
    marginBlock: '0.25em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '0.25em',
    textDecoration: 'none',
    borderRadius: '8px',
    span: {
      padding: '0.15em',
      color: colors.black,
      fontSize: 'clamp(1.25rem, 10vw, 1.75rem)',
      fontWeight: 600,
      fontFamily: '"Tilt Neon", sans-serif',
    },
    '&.activePage': {
      backgroundColor: chroma(colors.lightBlue).alpha(0.4).hex(),
      pointerEvents: 'none',
      cursor: 'default',
    },

    '&:hover': {
      backgroundColor: colors.lightBlue,
    },
  },

  // simplified hover for logo in footer
  mobileMenuLogoLink: {
    width: '60%',
    maxWidth: '170px',
    overflow: 'hidden',

    svg: {
      transition: 'all 180ms ease',
      borderRadius: '0px',
      display: 'block', // remove weird bottom space
      '& #letters': {
        transformBox: 'fill-box',
        transformOrigin: 'center center',
        transition: 'all 180ms ease',
      },
      rect: {
        transformBox: 'fill-box',
        fill: chroma(colors.red).alpha(1).hex(),
        stroke: colors.red,
        '&#bottom-line': {
          fill: chroma(colors.red).alpha(1).hex(),
          transform: 'scaleY(1)',
          transformOrigin: 'center bottom',
          transition: 'transform 260ms ease',
        },
        '&#top-line': {
          fill: chroma(colors.red).alpha(1).hex(),
          transformOrigin: 'center bottom',
          transformBox: 'fill-box',
          transform: 'scaleY(1)',
          transition: 'all 200ms ease',
        },
      },
    },
    // -------- HOVER FOOTER LOGO -------- /
    '&:hover': {
      svg: {
        borderRadius: '8px',
        '& #letters': {
          transform: 'scale(0.9)',
          '& > g[id*="letter"]': {
            path: {
            
              '&:last-of-type': {
                stroke: colors.white,
                strokeWidth: '1%',
              },
            },
          },
        },
        rect: {
          fill: chroma(colors.red).alpha(1).hex(),
          '&#bottom-line': {
            fill: chroma(colors.red).alpha(1).hex(),
            transform: 'scaleY(11)',
          },
          '&#top-line': {
            fill: chroma(colors.red).alpha(0).hex(),
            transform: 'scaleY(0)',
          },
        },
      },
    },
    [mq.customMax(768)]: {
      width: '85%',
      maxWidth: '320px',
      paddingBlock: 'min(0.75em, 1.5vw)',
    },
  },
}));
