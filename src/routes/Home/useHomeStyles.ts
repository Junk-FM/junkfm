import { createStyles } from '@mantine/core';
import { colors } from '../..';

export const useHomeStyles = createStyles(() => ({
  homeStack: {
    background: 'transparent',
    width: 'fit-content',
    height: 'fit-content',
    textAlign: 'center',
    justifyContent: 'center',
    lineHeight: '1.3em',
    h5: {
      color: colors.lightBlue,
      fontWeight: 500,
    },
    p: {
      color: colors.yellow,
    },
  },
}));
