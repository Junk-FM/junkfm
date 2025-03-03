import { Box, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { colors, CommonButton, useMenuDesktopStyles, MenuProps } from '@junkfm';
import { Link } from 'react-router-dom';

export function MenuDesktop(props: MenuProps) {
  const { activeRoute, menuItems } = props;
  const { classes, cx } = useMenuDesktopStyles();
  const buttonSizeBreak = useMediaQuery('(max-width: 1100px)');

  return (
    <Box className={classes.menuDesktop}>
      {menuItems.map((item) => (
        <Link key={item.link} to={item.link} className={cx(classes.menuItem, { active: activeRoute === item.link })}>
          <Text component="span">{item.title}</Text>
        </Link>
      ))}
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
