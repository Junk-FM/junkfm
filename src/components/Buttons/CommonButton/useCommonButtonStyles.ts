import { createStyles } from '@mantine/core';
import { colors } from '@junkfm';
import { CommonButtonProps } from '.';
import chroma from 'chroma-js';

// set up CommonButtonStylesProps as import of CommonButtonProps but omit buttonText
export interface CommonButtonStylesProps extends Omit<CommonButtonProps, 'buttonText'> {}

export const useCommonButtonStyles = createStyles(
  (
    _,
    {
      buttonColor = colors.lightBlue,
      buttonHoverColor = chroma(buttonColor).darken(1.7).hex(),
      buttonTextColor = colors.trueBlack,
      buttonTextHoverColor,
      buttonSize = 'xl',
      outline = false,
    }: CommonButtonStylesProps
  ) => ({
    commonButton: {
      display: 'inline-block',
      padding: '0.5em 1em',
      borderRadius: '0.5rem',
      backgroundColor: outline ? 'transparent' : buttonColor,
      fontWeight: 600,
      fontSize: buttonSize === 'xs' ? '0.75rem' : buttonSize === 'sm' ? '0.875rem' : buttonSize === 'md' ? '1rem' : buttonSize === 'lg' ? '1.125rem' : buttonSize === 'xl' ? '1.25rem' : '1rem',
      color: outline ? buttonColor : buttonTextColor,
      cursor: 'pointer',
      transition: 'background-color 150ms, color 150ms',
      border: outline ? `2px solid ${buttonColor}` : 'none',
      '&:hover': {
        backgroundColor: outline ? buttonColor : buttonHoverColor,
        color: outline ? buttonTextColor : buttonTextHoverColor || buttonTextColor,
      },
    },
  })
);
