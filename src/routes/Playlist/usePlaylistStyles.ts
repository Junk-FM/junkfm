import { createStyles } from '@mantine/core';
import { colors, sectionBackgrounds, mq } from '@junkfm';

export const usePlaylistStyles = createStyles(() => ({
  playlistOutermost: {
    backgroundColor: sectionBackgrounds.playlist,
    h1: {
      color: colors.trueBlack,
      textAlign: 'center',
      fontWeight: 700,
      marginBlock: '0.25 0',
      fontSize: 'clamp(3rem, 7vw, 5rem)',
    },
    h5: {
      color: colors.darkRed,
      fontFamily: '"Poppins", sans-serif',
      textAlign: 'center',
      marginBlock: '0.5em 2em',
      fontWeight: 500,
      fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
    },
  },

  playlistGridWrapper: {
    paddingLeft: 'min(12rem, 10vw)',
    marginInline: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 'min(3.5rem, 5vw)',
    alignItems: 'flex-start',
    h4: {
      fontFamily: '"Oswald", sans-serif',
      fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
      fontWeight: 600,
      marginBLock: '0',
      paddingBottom: '0.25em',
    },
    p: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
      fontWeight: 400,
      marginBlock: '0.5em',
      lineHeight: '1.3em',
    },
    [mq.customMax(1200)]: {
      columnGap: '0',
      justifyContent: 'space-between',
    },
    [mq.customMax(992)]: {
      paddingLeft: '8vw',
    },
    [mq.customMax(575)]: {
      paddingLeft: '5vw',
      textAlign: 'center',
      h4: {
        fontSize: 'clamp(2rem, 8vw, 3.5rem)',
      },
      p: {
        fontSize: 'clamp(1.125rem, 4vw, 1.5rem)',
      },
    },
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
