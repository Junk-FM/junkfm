import { Box } from '@mantine/core';
import { useCommonButtonStyles, colors } from '@junkfm';

export interface CommonButtonProps {
  buttonColor?: keyof typeof colors | string; // Color name from `colors` OR any string
  buttonHoverColor?: keyof typeof colors | string;
  buttonTextColor?: keyof typeof colors | string;
  buttonTextHoverColor?: keyof typeof colors | string;
  buttonText?: string;
  buttonSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  buttonVariant?: 'filled' | 'outline';
}

export function CommonButton(props: CommonButtonProps) {
  const {
    buttonColor,
    buttonHoverColor,
    buttonTextColor,
    buttonTextHoverColor,
    buttonText = 'Button Text',
    buttonSize = 'md',
    buttonVariant = 'filled',
  } = props;
  const { classes } = useCommonButtonStyles({
    buttonColor,
    buttonHoverColor,
    buttonTextColor,
    buttonTextHoverColor,
    buttonSize,
    buttonVariant,
  });
  return (
    <Box role="button" className={classes.commonButton}>
      {buttonText}
    </Box>
  );
}
