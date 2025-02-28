import { createStyles } from '@mantine/core';
import { colors } from '@junkfm';
import chroma from 'chroma-js';

const buttonColor = colors.lightBlue;

export const useCommonButtonStyles = createStyles(() => ({
  commonButton: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    backgroundColor: buttonColor,
    fontWeight: 600,
    color: colors.trueBlack,
    cursor: 'pointer',
    transition: 'background-color 150ms, color 150ms',
    '&:hover': {
      backgroundColor: chroma(buttonColor).darken(1.7).hex(),
      color: colors.white,
    },
  },
}));
