import { Box, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { colors, CommonButton, useMenuDesktopStyles } from '@junkfm';

export function MenuDesktop() {
  const { classes } = useMenuDesktopStyles();

  const buttonSizeBreak = useMediaQuery('(max-width: 1100px)');

  return (
    <Box className={classes.menuDesktop}>
      <Text component="a">Home</Text>
      <Text component="a">About</Text>
      <Text component="a">Songs</Text>
      <Text component="a">Shows</Text>
      <Text component="a">Booking</Text>
      <Text component="a">Media</Text>
      <CommonButton
        buttonColor={colors.red}
        buttonTextColor={colors.white}
        buttonTextHoverColor={colors.white}
        buttonText="Book Us"
        buttonSize={buttonSizeBreak ? 'sm' : 'md'}
        buttonVariant="filled"
      />
    </Box>
  );
}
