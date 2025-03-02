import { Box, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { colors, CommonButton, useMenuDesktopStyles } from '@junkfm';
import { Link } from 'react-router-dom';

export function MenuDesktop() {
  const { classes } = useMenuDesktopStyles();

  const buttonSizeBreak = useMediaQuery('(max-width: 1100px)');

  return (
    <Box className={classes.menuDesktop}>
      <Link to="/home">
        <Text component="span">Home</Text>
      </Link>
      <Link to="/about">
        <Text component="span">About</Text>
      </Link>
      <Link to="/songs">
        <Text component="span">Songs</Text>
      </Link>
      <Link to="/shows">
        <Text component="span">Shows</Text>
      </Link>
      <Link to="/booking">
        <Text component="span">Booking</Text> 
      </Link>
      <Link to="/media">
        <Text component="span">Media</Text>
      </Link>
      <CommonButton
        buttonColor={colors.red}
        buttonTextColor={colors.white}
        buttonTextHoverColor={colors.white}
        buttonText="BOOK US"
        buttonSize={buttonSizeBreak ? 'sm' : 'md'}
        buttonVariant="filled"
      />
    </Box>
  );
}
