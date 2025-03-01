import { Box } from '@mantine/core';
import { useCommonButtonStyles} from '@junkfm';

export interface CommonButtonProps {
  buttonColor?: string;
  buttonHoverColor?: string;
  buttonTextColor?: string;
  buttonTextHoverColor?: string;
  buttonText?: string;
  buttonSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  outline?: boolean;
}

export function CommonButton(props: CommonButtonProps) {
  const {
    buttonColor,
    buttonHoverColor,
    buttonTextColor,
    buttonTextHoverColor,
    buttonText = 'Button Text',
    buttonSize = 'md',
    outline = false,
  } = props;
  const { classes } = useCommonButtonStyles({
    buttonColor,
    buttonHoverColor,
    buttonTextColor,
    buttonTextHoverColor,
    buttonSize,
    outline,
  });
  return (
    <Box role="button" className={classes.commonButton}>
      {buttonText}
    </Box>
  );
}
