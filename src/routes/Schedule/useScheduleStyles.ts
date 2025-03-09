import { createStyles } from '@mantine/core';
import { sectionBackgrounds, colors } from '@junkfm';
import chroma from 'chroma-js';

export const useScheduleStyles = createStyles(() => ({
  scheduleOutermostWrapper: {
    minHeight: 'calc(100vh - 200px)',
    backgroundColor: sectionBackgrounds.schedule,
    h1: {
      WebkitTextStroke: `0.026em ${colors.yellow}`,
      marginBottom: 0,
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: 'clamp(1.25rem, 4vw, 2rem)',
      fontWeight: 500,
      color: colors.trueBlack,
      paddingBottom: '1rem',
      marginBlock: 0,
    },
  },

  scheduleBoxWrapper: {
    minHeight: 'calc(60dvh - 200px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  showsListBox: {
    width: '100%',
    display: 'flex',  
    flexDirection: 'column',
    justifyContent: 'center',
    h2: {
      fontFamily: '"Poppins", sans-serif !important',
      fontSize: '4.5rem',
      // letterSpacing: '0.03em',
      // transform: 'scaleX(1.1)',
      fontWeight: 800,
      lineHeight: 0.7,
      textAlign: 'center',
      textTransform: 'uppercase',
      marginBlock: 0,
      writingMode: 'sideways-lr',
      textOrientation: 'upright',
      paddingBottom: 0,
    },
    h3: {
      fontFamily: '"Oswald", sans-serif !important',
      fontSize: '3.25rem',
      letterSpacing: '-0.035em',
      transform: 'scaleX(1.1)',
      fontWeight: 800,
      lineHeight: 0.8,
      textAlign: 'center',
      marginBlock: 0,
      writingMode: 'sideways-lr',
      textOrientation: 'upright',
    },
    h4: {
      lineHeight: '1em',
      fontSize: '2.25rem',
      fontWeight: 600,
      marginBlock: 0,
    },
    h5: {
      lineHeight: '1em',
      fontSize: '1.5rem',
      fontWeight: 500,
      marginBlock: 0,
    },
    h6: {
      marginBlock: 0,
      fontWeight: 500,
      lineHeight: '1em',
      fontSize: '1.35rem',
    },
    p: {
      marginBlock: 0,
      lineHeight: '1',
      fontSize: '1.15rem',
    },
  },

  singleShowRowWrapper: {
    
    border: `0.5em outset ${colors.yellow}40`,
    borderRadius: '0.4em',
    background: chroma(colors.pink).alpha(0.9).brighten(0.2).css(),
    marginBlock: '1em',
  },

  showContainer: {
    containerType: 'inline-size',
    height: '100%',
    width: '100%',
    padding: '0.75em 1.25em',
  },

  showInnerDetailsWrapper: {
    paddingLeft: '1em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  loadingErrorBox: {
    textWrap: 'balance',
    h3: {
      fontWeight: 600,
      color: colors.white,
      fontSize: 'clamp(1.5rem, 2.25vw, 2rem)',
      marginBlock: 0,
    },
    h4: {
      fontWeight: 400,
      fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
      marginBlock: 0,
    },
    p: {
      fontWeight: 400,
      color: colors.almostWhite,
      marginBlock: '0.4em',
      fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
    },
  },
}));
