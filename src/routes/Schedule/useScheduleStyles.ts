import { createStyles } from '@mantine/core';
import { sectionBackgrounds, colors } from '@junkfm';

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
    h3: {
      marginBlock: '0.2em',
      fontSize: 'clamp(1.25em, 2vw, 1.5em)',
    },
    h4: {
      marginBlock: '0.2em',
      fontSize: 'clamp(1em, 1.5vw, 1.25em)',
    },
    h5: {
      marginBlock: '0.2em',
      fontSize: 'clamp(0.85em, 1.25vw, 1em)',
    },
    p: {
      marginBlock: '0.2em',
      fontSize: 'clamp(0.75em, 1vw, 0.85em)',
    },

  },

  errorBox: {
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
  loadingErrorBox: {
    h4: {
      fontWeight: 600,
      fontSize: 'clamp(1.25em, 2vw, 1.5em)',
    },
  },
}));
