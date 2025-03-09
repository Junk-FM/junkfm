import { createStyles } from '@mantine/core';
import { colors, sectionBackgrounds } from '@junkfm';

export const useAboutStyles = createStyles(() => ({
  aboutOutermostWrapper: {
    backgroundColor: sectionBackgrounds.about,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    h1: {
      color: colors.almostWhite,
    },
    h5: {
      fontWeight: 600,
      paddingBlock: '1rem',
    },
  },
}));
