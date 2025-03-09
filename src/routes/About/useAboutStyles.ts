import { createStyles } from '@mantine/core';
import { colors, sectionBackgrounds } from '@junkfm';

export const useAboutStyles = createStyles(() => ({
  aboutOutermostWrapper: {
    backgroundColor: sectionBackgrounds.about,
    textAlign: 'center',
    textWrap: 'pretty',
    minHeight: '100vh',
    h1: {
      color: colors.black,
      WebkitTextStroke: `0.026em ${colors.almostWhite}`,
      paddingBlock: '1rem',
    },
    h5: {
      color: colors.black,
      fontWeight: 600,
      paddingBlock: '1rem',
    },
  },
}));
