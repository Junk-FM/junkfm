import { useState, useEffect } from 'react';
import { Box } from '@mantine/core';
import { MenuDesktop, MenuMobile, useMenuStyles, menuItems } from '.';
import { JunkFmLogo, useIsMobile, colors } from '@junkfm';
import { useLocation } from 'react-router-dom';

export function Menu() {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // ✅ Get active route
  const activeRoute = location.pathname; // ✅ Store active route

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
        <JunkFmLogo height="75%" textColor={colors.white} />
        {isMobile ? (
          <MenuMobile /> // REVISIT 
        ) : (
          <MenuDesktop activeRoute={activeRoute} menuItems={menuItems} />
        )}
      </Box>
    </Box>
  );
}
