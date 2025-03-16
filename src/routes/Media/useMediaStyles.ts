import { createStyles } from '@mantine/core';
import { colors, sectionBackgrounds } from '@junkfm';

export const useMediaStyles = createStyles(() => ({
  mediaOutermostWrapper: {
    position: 'relative',
    backgroundColor: sectionBackgrounds.media,
  },

  mediaHeaderWrapper: {
    maxWidth: '700px',
    marginInline: 'auto',
    textWrap: 'balance',
    textAlign: 'center',
    h1: {
      color: colors.black,
      fontWeight: 700,
      WebkitTextStroke: `0.026em ${colors.almostWhite}`,
      lineHeight: '1.25em',
      marginBottom: '0.125em',
    },
    h4: {
      lineHeight: '1.25em',
      color: colors.black,
      marginBlock: '0.5em',
      fontWeight: 500,
      fontSize: 'clamp(1.5rem, 2.25vw, 1.75rem)',
    },
    p: {
      marginBlock: '0.25em',
      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
      lineHeight: '1.3em',
      fontWeight: 400,
      color: colors.black,
      textWrap: 'pretty',
      textAlign: 'left',
    },
  },

  mediaRow: {
    
  },

  oneVideoRow: {
    display: 'block',
    maxWidth: '700px',
    marginInline: 'auto',
  },

  mediaGridWrapper: {
    marginBlock: 'clamp(0.5rem, 1.5vw, 1rem)',
    marginInline: 'auto',
    justifyContent: 'center',

  },
}));
