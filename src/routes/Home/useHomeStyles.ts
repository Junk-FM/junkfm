import { createStyles } from '@mantine/core';
import { colors } from '@junkfm';

export const heroSectionBackgroundColor = colors.black;

export const useHomeStyles = createStyles(() => ({
  homeWrapper: {
    paddingInline: 'max(2vw, (100vw - 1280px)/2)',
    position: 'relative',
  },

  homeContentWrapper: {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    h5: {
      color: colors.white,
      fontWeight: 600,
      marginBlock: '0 0.75em',
    },
    // p: {
    //   marginBlock: '0.5em 1.25em',
    //   color: colors.yellow,
    //   fontWeight: 300,
    // },
  },
}));
