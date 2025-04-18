import { createStyles } from '@mantine/core';
import { colors, sectionBackgrounds, mq } from '@junkfm';
import chroma from 'chroma-js';

export const usePlaylistStyles = createStyles(() => ({
  playlistOutermost: {
    backgroundColor: sectionBackgrounds.playlist,
    h1: {
      color: chroma(colors.mustard).alpha(0.8).hex(),
      textAlign: 'left',
      fontWeight: 700,
      WebkitTextStroke: `0.026em ${colors.white}`,
      
    },
  },

  playlistInnerWrapper: {
    marginInline: 'auto',
    maxWidth: '1100px',
  },


  playlistPrefaceWrapper: {
    marginBlock: '0 min(4em, calc(2.5vw + 2.5vh))',
    h5: {
      textWrap: 'balance',
      color: colors.white,
      lineHeight: '1.25em',
      fontWeight: 600,
      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
      marginBlock: '0.75em',
    },
    p: {
      textWrap: 'pretty',
      color: colors.lightBlue,
      fontFamily: '"Poppins", sans-serif',
      marginBlock: '0.5em',
      marginInline: 'auto',
    },
  },

  playlistGridWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '100%',
    marginRight: 'min(-7vw, -5rem)',
    marginLeft: 'min(1vw, 0.4rem)',

    // SIDEWAYS TEXT
    h2: {
      opacity: 1,
      position: 'absolute',
      left: 0,
      zIndex: 0,
      top: 0,
      fontFamily: '"Tilt Neon", sans-serif',
      fontSize: 'clamp(4.75rem, 9.75vw, 5.4rem)',
      color: chroma(colors.white).alpha(1).hex(),
      textStroke: `0.02em ${colors.white}`,
      margin: '0.25rem 0 0',
      textAlign: 'left',
      lineHeight: '0.7em',
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
      '&.sidewaysText0': {
        textShadow: `
                  2px 2px 8px ${chroma(colors.neonPink).alpha(0.4).hex()},  
                  -2px -2px 8px ${chroma(colors.neonPink).alpha(0.4).hex()},
                  2px -2px 8px ${chroma(colors.neonPink).alpha(0.3).hex()},
                  -2px 2px 8px ${chroma(colors.neonPink).alpha(0.6).hex()},
                  0 0 5px ${chroma(colors.neonPink).brighten(1).alpha(1).hex()},  
                  0 0 10px ${chroma(colors.neonPink).brighten(2).alpha(1).hex()},
                  0 0 20px ${chroma(colors.neonPink).brighten(9).alpha(1).hex()},
                  0 0 40px ${chroma(colors.neonPink).brighten(9).hex()},
                  0 0 70px ${chroma(colors.neonPink).brighten(9).hex()}
                `,
        color: chroma(colors.neonPink).brighten(7).hex(),
      },
      '&.sidewaysText1': {
        textShadow: `
        2px 2px 4px ${chroma(colors.neonYellow).alpha(0.5).hex()},  
        -2px -2px 4px ${chroma(colors.neonYellow).alpha(0.8).hex()},
        2px -2px 4px ${chroma(colors.neonYellow).alpha(0.8).hex()},
        -2px 2px 4px ${chroma(colors.neonYellow).alpha(0.9).hex()},
        0 0 5px ${chroma(colors.neonYellow).brighten(1).alpha(1).hex()},  
        0 0 10px ${chroma(colors.neonYellow).brighten(2).alpha(1).hex()},
        0 0 20px ${chroma(colors.neonYellow).brighten(9).alpha(1).hex()},
        0 0 40px ${chroma(colors.neonYellow).brighten(9).hex()},
        0 0 70px ${chroma(colors.neonYellow).brighten(9).hex()}
      `,
      },
      '&.sidewaysText2': {
        textShadow: `
        2px 2px 4px ${chroma(colors.neonGreen).alpha(0.5).hex()},  
        -2px -2px 4px ${chroma(colors.neonGreen).alpha(0.8).hex()},
        2px -2px 4px ${chroma(colors.neonGreen).alpha(0.8).hex()},
        -2px 2px 4px ${chroma(colors.neonGreen).alpha(0.9).hex()},
        0 0 5px ${chroma(colors.neonGreen).brighten(1).alpha(1).hex()},  
        0 0 10px ${chroma(colors.neonGreen).brighten(2).alpha(1).hex()},
        0 0 20px ${chroma(colors.neonGreen).brighten(9).alpha(1).hex()},
        0 0 40px ${chroma(colors.neonGreen).brighten(9).hex()},
        0 0 70px ${chroma(colors.neonGreen).brighten(9).hex()}
      `,
      },
    },

    h4: {
      color: chroma(colors.mustard).alpha(0.6).hex(),
      fontFamily: '"Oswald", sans-serif',
      fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
      fontWeight: 600,
      marginBlock: '0',
      paddingBottom: '0.25em',
      lineHeight: '1em',
    },

    [mq.customMax(767)]: {
      marginRight: 0,
      rowGap: 'min(4em, 8vw)',
      h2: {
        fontSize: 'clamp(6rem, 20vw, 7.5rem)',
      },
    },

    [mq.customMax(575)]: {
      h2: {
        left: 'min(3vw, 50px)',
      },
      h4: {
        fontSize: 'clamp(2rem, 8vw, 3.5rem)',
      },
      p: {
        fontSize: '1.25rem',
      },
    },
  },

  playlistGridCol: {
    position: 'relative',
    textAlign: 'center', // center list trick
    ul: {
      display: 'inline-block', // center list trick
      textAlign: 'left', // center list trick
      // ------- BAND/ARTIST NAMES ------- //
      li: {
        // marginLeft: 'min(2.75rem, calc(2.25vw + 1rem))',
        position: 'relative',
        mixBlendMode: 'luminosity',
        color: colors.white,
        fontFamily: '"Poppins", sans-serif',
        fontSize: '1.25em',
        fontWeight: 500,
        marginBlock: 0,
        lineHeight: '1.15em',
      },
    },
    [mq.customMax(991)]: {
      marginInline: 'auto',
      ul: {
        li: {
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        },
      },
    },
    [mq.customMax(768)]: {
      marginInline: 'auto',
      ul: {
        textWrap: 'balance',
        li: {
          fontSize: 'clamp(1.25em, 4vw, 1.5em)',
        },
      },
    },
    [mq.customMax(575)]: {
      ul: {
        width: '240px',
        marginLeft: '78px',
      },
    },
  },

  playlistBackingEffects: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    inset: 0,
    margin: 0,
    zIndex: 1,
  },

  /* 
    IDEAS

    - probably do <=80s, ==90s, >=00s
    - neon sign like header
    - light bulb with pull string
    - interactive spotlight effect
    - mock common playlist app like spotify
    - scrolling horizontal artists various directions
    - WORD FIND PUZZLE?! ⭐
    - CROSSWORD PUZZLE?! ⭐
    */
}));
