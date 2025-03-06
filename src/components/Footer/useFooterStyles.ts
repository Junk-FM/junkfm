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
    padding: '1em 2em',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: isMobile ? '160px' : '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    boxShadow: `0 -15px 30px ${chroma(colors.lightBlue).alpha(0.8).hex()}`,

    // copyright text bottom center
    h6: {
      color: colors.lightBlue,
      paddingBlock: 0,
      marginBlock: 0,
      fontWeight: 100,
      fontSize: 'clamp(14px, 1.5vw, 15px)',
      paddingTop: '0.5rem',
      fontFamily: '"Poppins", sans-serif',
    },
  },

  // flex row - full width of footer
  footerInnerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    gap: '5%',
  },

  // footer sec 1 left wrapper
  footerLeft: {
    flexBasis: '30%',
    display: 'flex',
    justifyContent: 'flex-start',
  },

  footerLeftInner: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
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

  //footer sec 3 right wrapper
  footerRight: {
    flexBasis: '30%',
    display: 'flex',
    justifyContent: 'flex-end',
  },

  // simplified hover for logo in footer
  footerLogoLink: {
    width: '100%',
    '& #letters': {
      '& > g[id*="letter"]': {
        path: {
          fill: chroma(colors.white).alpha(1).hex(),
          '&:last-of-type': {
            strokeWidth: '1%',
            stroke: colors.white,
          },
        },
      },
    },
    rect: {
      transformBox: 'fill-box',
      fill: chroma(colors.red).alpha(1).hex(),
      stroke: colors.red,
      strokeWidth: '1.4%',
    },
    // -------- HOVER FOOTER LOGO -------- /
    '&:hover': {
      '& #letters': {
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
        
        strokeWidth: '0%',
      },
    },
  },

  socialMediaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBlock: 0,
    width: '100%',
    a: {
      flexBasis: '18%',
      svg: {
        width: '100%',
        height: 'auto',

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
