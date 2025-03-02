import { Box } from '@mantine/core';
import { MenuDesktop, MenuMobile, useMenuStyles } from '.';
import { JunkFmLogo, useIsMobile } from '@junkfm';

export function Menu() {
  const isMobile = useIsMobile();

  const { classes, cx } = useMenuStyles({ isMobile });

  return (
    <Box className={classes.menu} id="menu">
      <Box className={cx(classes.menuInner)} id="menu-inner">
        <JunkFmLogo height="clamp(35px, 85%, 50px)" />
        <Box className={classes.menuSwitchBox}>{isMobile ? <MenuMobile /> : <MenuDesktop />}</Box>
      </Box>
    </Box>
  );
}
