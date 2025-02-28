import { createStyles } from '@mantine/core';
import { colors } from '../..';

export const useHomeStyles = createStyles(() => ({
  homeStack: {
    background: 'transparent',
    width: 'fit-content',
    height: 'fit-content',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      marginBlock: 0,
    },
    h4: {
      color: colors.lightBlue,
    },
    p: {
      color: colors.yellow,
    },
  },


}));
