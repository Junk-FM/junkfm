import { Box } from '@mantine/core';
import { useCommonButtonStyles } from '@junkfm';

export function CommonButton() {
  const { classes } = useCommonButtonStyles();
  return (
    <Box role="button" className={classes.commonButton}>
      BOOK MANS
    </Box>
  );
}
