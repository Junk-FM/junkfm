import { createStyles } from '@mantine/core';
import { colors } from '../../global/useGlobalStyles';

export const useHomeStyles = createStyles(() => ({
  homeStack: {
    background: colors.purple,
    '& > *': {
      marginBlock: 0,
    },
    h1: {
      color: colors.black,
    },
    h2: {
      color: colors.darkGray,
    },
    h3: {
      color: colors.lightBlue,
    },
    p: {
      color: colors.orange,
    },
  },
}));
