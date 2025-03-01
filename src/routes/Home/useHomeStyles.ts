import { createStyles } from '@mantine/core';
import { colors } from '../..';

export const useHomeStyles = createStyles(() => ({
  homeWrapper: {
    paddingInline: 'max(2vw, (100vw - 1280px)/2)',
    h5: {
      color: colors.lightBlue,
      fontWeight: 500,
    },
    p: {
      color: colors.yellow,
    },
  },
}));
