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
      buttonHoverColor = chroma(buttonColor).darken(0.7).hex(),
      buttonTextColor = colors.trueBlack,
      buttonTextHoverColor,
      buttonSize = 'xl',
      buttonVariant = 'filled',
    }: CommonButtonStylesProps
  ) => ({

    
    commonButton: {
      display: 'inline-block',
      padding: '0.45em 1.7em',
      borderRadius: '0.5rem',
      backgroundColor: buttonVariant === "outline" ? 'transparent' : buttonColor,
      fontWeight: 600,
      fontSize: buttonSize === 'xs' ? '0.75rem' : buttonSize === 'sm' ? '0.875rem' : buttonSize === 'md' ? '1rem' : buttonSize === 'lg' ? '1.125rem' : buttonSize === 'xl' ? '1.25rem' : '1rem',
      color: buttonVariant === "outline" ? buttonColor : buttonTextColor,
      cursor: 'pointer',
      transition: 'background-color 100ms, color 100ms',
      border: buttonVariant === "outline" ? `2px solid ${buttonColor}` : 'none',
      '&:hover': {
        backgroundColor: buttonVariant === "outline" ? buttonColor : buttonHoverColor,
        color: buttonVariant === "outline" ? buttonTextColor : buttonTextHoverColor || buttonTextColor,
      },
    },
  })
);
