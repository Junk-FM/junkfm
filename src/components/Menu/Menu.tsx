import { useState, useEffect } from 'react';
import { Box } from '@mantine/core';
import { MenuDesktop, MenuMobile, useMenuStyles } from '.';
import { JunkFmLogo, useIsMobile, colors } from '@junkfm';

export function Menu() {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // fade in menu border after this Y offset
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { classes, cx } = useMenuStyles({ isMobile });

  return (
    <Box component="nav" className={cx(classes.menu, scrolled && 'scrolled')} id="menu">
      <Box className={cx(classes.menuInner)} id="menu-inner">
        <JunkFmLogo height="80%" textColor={colors.trueBlack} />
        <Box className={classes.menuSwitchBox}>{isMobile ? <MenuMobile /> : <MenuDesktop />}</Box>
      </Box>
    </Box>
  );
}
