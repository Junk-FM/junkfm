import { createStyles } from '@mantine/core';
import { colors } from '../..';

export const useHomeStyles = createStyles(() => ({
  homeStack: {
    background: "transparent",
    width: 'fit-content',
    height: 'fit-content',
    '& > *': {
      marginBlock: 0,
    },
    h1: {
      color: colors.white,
    },
    h4: {
      color: colors.lightBlue,
    },
    p: {
      color: colors.yellow,
    },
  },
}));
