import { createStyles } from '@mantine/core';
import { colors } from '@junkfm';

export const heroSectionBackgroundColor = colors.black;

export const useHomeStyles = createStyles(() => ({
  homeWrapper: {
    paddingInline: 'max(2vw, (100vw - 1700px)/2)', // variant of row padding
    position: 'relative',
  },

  homeContentWrapper: {
    textAlign: 'center',
    h4: {
      color: colors.yellow,
      fontWeight: 500,
      marginBlock: '0 0.75em',
    },
  },
}));
