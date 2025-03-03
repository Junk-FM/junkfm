import { useState } from 'react';
import { Box, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { colors, CommonButton, useMenuDesktopStyles, MenuProps } from '@junkfm';
import { Link } from 'react-router-dom';


export function MenuDesktop({ activeRoute, menuItems }: MenuProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { classes, cx } = useMenuDesktopStyles({ menuItems, hoveredItem, activeRoute });

  const buttonSizeBreak = useMediaQuery('(max-width: 1100px)');

  return (
    <Box className={classes.menuDesktop}>
      {menuItems.map((item) => (
        <Link
          key={item.link}
          to={item.link}
          className={cx(classes.menuItem, classes[item.link])}
          onMouseEnter={() => setHoveredItem(item.link)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Text title={item.title} component="span">{item.title}</Text>
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
