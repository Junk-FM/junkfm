import { createStyles } from '@mantine/core';
import { colors } from '@junkfm';
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

  mobileMenuLogoLink: {
    svg: {
      transformOrigin: 'center',
      transformBox: 'fill-box',
      transform: 'scale(1)',
      transition: `transform 120ms ease-out`,
      rect: {
        transition: `fill 120ms ease-out`,
      },
      '& #letters': {
        '& path': {
          transition: `fill 120ms ease-out, stroke 120ms ease-out`,
        },
      },
    },
    '&:hover': {
      svg: {
        transition: `transform 180ms ease-out`,
        transform: 'scale(1.01)',
        rect: {
          fill: chroma(colors.red).darken(1).hex(),
        },
        '& #letters': {
          '& path': {
            fill: chroma(colors.black).brighten(0.85).hex(),
            stroke: chroma(colors.black).brighten(0.85).hex(),
          },
        },
      },
    },
  },
}));
