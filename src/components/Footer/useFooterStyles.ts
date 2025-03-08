import { createStyles } from '@mantine/core';
import { colors, mq } from '@junkfm';
import chroma from 'chroma-js';

export const useFooterStyles = createStyles(() => ({
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 100,
    boxShadow: `0 -15px 30px ${chroma(colors.lightBlue).alpha(0.8).hex()}`,
  },

  // flex row - full width of footer
  // copy similar header menu treatment
  footerInnerWrapper: {
    margin: 0,
    paddingBlock: 'min(1.25rem, calc(2vw + 2vh))',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '100%',
    width: '100%',
    [mq.customMax(1200)]: {
      paddingInline: 'max(2vw, (100vw - 1600px)/2)',
    },
    [mq.customMax(768)]: {
      display: 'grid', // idea
      gridTemplateColumns: '1fr 2fr',
      gridTemplateRows: '2fr 1fr 1fr',
      alignItems: 'start',
      
      marginInline: 'auto',
      paddingBottom: 'min(1em, calc(0.5vw + 0.5vh))',
      paddingInline: '6vw',
    },
    [mq.customMax(575)]: {
      gridTemplateColumns: '1fr 3fr',
      paddingInline: '3vw',
    },
  },

  // item 2 - jnk logo
  footerLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    [mq.customMax(768)]: {
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      gridRow: '1',
      gridColumn: '2',
      paddingRight: '1vw',
    },
  },

  // footer sec 2 mid wrapper
  footerMiddle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [mq.customMax(768)]: {
      gridRow: '3',
      gridColumn: 'span 2',
    },
  },

  footerMiddleLower: {
    
    h6: {
      color: colors.lightBlue,
      paddingBlock: 0,
      marginBlock: 0,
      letterSpacing: '0.065em',
      fontWeight: 200,
      fontSize: 'clamp(14px, 1.15vw, 15px)',
      fontFamily: '"Poppins", sans-serif',
    },
  },

  //footer sec 3 right wrapper
  footerRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    a: {
      maxWidth: '400px',
      width: '90%',
    },
    [mq.customMax(768)]: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 'min(1em, 2vw)',
      gridRow: '2',
      gridColumn: '2',
      paddingRight: '1vw',
    },
  },

  // simplified hover for logo in footer
  footerLogoLink: {
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
    [mq.customMax(768)]: {
      width: '85%',
      maxWidth: '320px',
      paddingBlock: 'min(0.75em, 1.5vw)',
    },
  },

  // item 1
  footerLinksWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: '2%',
    alignItems: 'center',
    [mq.customMax(768)]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gridRow: 'span 2',
      gridColumns: '1 / 2',
      
    },
  },

  footerMenuItem: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: '1.25rem',
    fontWeight: 500,
    color: colors.lightBlue,
    textDecoration: 'none',
    padding: 'min(1em, 1vw)',
    '&:hover': {
      color: colors.white,
    },

    [mq.customMax(768)]: {
      fontSize: 'clamp(1.125rem, 3.5vw, 1.3rem)',
      padding: '0.3em',
    },
  },

  socialMediaRow: {
    
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBlock: 0,
    width: '90%',
    marginInline: 'auto',
    paddingBottom: '6px',
    a: {
      width: '20%',
      svg: {
        display: 'block',
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
    [mq.customMax(768)]: {
      width: '100%',

      paddingTop: 'min(1em, calc(1vw + 1vh))',
      
    },
  },
}));
