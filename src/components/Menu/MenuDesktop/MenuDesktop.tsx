import { Box, Text } from '@mantine/core';
import { useMenuDesktopStyles, useGlobalStyles } from '@junkfm';

export function MenuDesktop() {
  const { classes, cx } = useMenuDesktopStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box className={classes.menuDesktop}>
      <Box className={cx(globalClasses.responsiveRow ,classes.menuDesktopInner)}>
        <Text component="a">Home</Text>
        <Text component="a">About</Text>
        <Text component="a">Songs</Text>
        <Text component="a">Shows</Text>
        <Text component="a">Booking</Text>
        <Text component="a">Media</Text>
      </Box>
    </Box>
  );
}
