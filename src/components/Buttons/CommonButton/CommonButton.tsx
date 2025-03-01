import { Box } from '@mantine/core';
import { useCommonButtonStyles} from '@junkfm';

export interface CommonButtonProps {
  buttonColor?: string;
  buttonHoverColor?: string;
  buttonTextColor?: string;
  buttonTextHoverColor?: string;
  buttonText?: string;
  buttonSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function CommonButton(props: CommonButtonProps) {
  const {
    buttonColor,
    buttonHoverColor,
    buttonTextColor,
    buttonTextHoverColor,
    buttonText = 'Button Text',
    buttonSize = 'md',
  } = props;
  const { classes } = useCommonButtonStyles({
    buttonColor,
    buttonHoverColor,
    buttonTextColor,
    buttonTextHoverColor,
    buttonSize,
  });
  return (
    <Box role="button" className={classes.commonButton}>
      {buttonText}
    </Box>
  );
}
