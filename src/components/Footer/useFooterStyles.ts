import { createStyles } from '@mantine/core';
import { colors } from '@junkfm';
import chroma from 'chroma-js';

export interface FooterStylesProps {
  isMobile: boolean;
}

export const useFooterStyles = createStyles((_, { isMobile }: FooterStylesProps) => ({
  footerOutermostWrapper: {
    backgroundColor: chroma(colors.black).darken(0.1).alpha(1).hex(),
    backdropFilter: 'blur(5px) brightness(0.8)',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: isMobile ? '160px' : '200px',
    maxHeight: isMobile ? '160px' : '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 100,
    boxShadow: `0 -15px 30px ${chroma(colors.lightBlue).alpha(0.8).hex()}`,

    // copyright text bottom center
    h6: {
      color: colors.lightBlue,
      paddingBlock: 0,
      marginBlock: 0,
      fontWeight: 100,
      fontSize: 'clamp(14px, 1.5vw, 15px)',
      fontFamily: '"Poppins", sans-serif',
    },
  },

  // flex row - full width of footer
  footerInnerWrapper: {
    paddingBottom: 'min(1.25rem, calc(1vw + 1vh))',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '100%',
    width: '100%',
    gap: '5%',
  },

  // footer sec 1 left wrapper
  footerLeft: {
    flexBasis: '25%',
    maxWidth: '25%',
    display: 'flex',
    justifyContent: 'flex-start',
  },

  // footer sec 2 mid wrapper
  footerMiddle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0em',
  },

  footerMiddleLower: {
    // wrapper of socials and copyright
  },

  //footer sec 3 right wrapper
  footerRight: {
    flexBasis: '25%',
    maxWidth: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    a: {
      maxWidth: '400px',
    },
  },

  // simplified hover for logo in footer
  footerLogoLink: {
    width: '70%',
    maxWidth: '200px',
    overflow: 'hidden',

    svg: {
      transition: 'all 180ms ease',
      borderRadius: '0px',
      display: 'block', // remove weird bottom space
      '& #letters': {
        transformBox: 'fill-box',
        transformOrigin: 'center center',
        transition: 'all 180ms ease',
        '& > g[id*="letter"]': {
          path: {
            fill: chroma(colors.white).alpha(1).hex(),
            '&:last-of-type': {
              stroke: colors.white,
            },
          },
        },
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
              fill: chroma(colors.white).alpha(1).hex(),
              '&:last-of-type': {
                stroke: colors.red,
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
  },

  socialMediaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBlock: 0,
    width: '100%',
    marginInline: 'auto',
    a: {
      flexBasis: '20%',
      maxWidth: '20%',
      svg: {
        width: '100%',
        height: 'auto',
        maxHeight: '34px',
        stroke: colors.white,
      },

      '&:hover': {
        svg: {
          stroke: colors.red,
        },
      },
    },
  },
}));
