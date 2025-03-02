import { Box } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';
import { useMenuMobileStyles } from '.';
import { colors } from '@junkfm';

export function MenuMobile() {
  const { classes } = useMenuMobileStyles();

  return (
    <Box className={classes.menuMobile}>
      <IconMenu2 size={36} strokeWidth={2} color={colors.white} />
    </Box>
  );
}
