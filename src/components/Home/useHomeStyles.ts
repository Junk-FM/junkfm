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
    h4: {
      color: colors.lightBlue,
    },
    p: {
      color: colors.yellow,
    },
  },
  
  junkFmLogo: {
    display: 'inline-block',
    width: 'fit-content',
    h1: {
      lineHeight: '0.95em',
      color: colors.white,
      display: 'inline-block',
    },
  },
  
  logoLine: {
    width: '100%',
    height: '0.4em',
    backgroundColor: colors.red,
  },
}));
