import { useState, useEffect } from 'react';
import { Box } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MenuDesktop, MenuMobile, useMenuStyles, menuItems } from '.';
import { JunkFmHeaderLogo, useIsMobile, colors } from '@junkfm';
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


  console.log('active route is:', activeRoute);

  const { classes, cx } = useMenuStyles({ isMobile, activeRoute });

  return (
    <Box component="nav" className={cx(classes.menu, scrolled && 'scrolled')} id="menu">
      <Box className={cx(classes.menuInner)} id="menu-inner">
        <Link to="/" className={classes.logoLink}>
          <JunkFmHeaderLogo height="75%" textColor={colors.white} />
        </Link>
        {isMobile ? (
          <MenuMobile activeRoute={activeRoute} menuItems={menuItems}  /> // REVISIT
        ) : (
          <MenuDesktop activeRoute={activeRoute} menuItems={menuItems} />
        )}
      </Box>
    </Box>
  );
}
