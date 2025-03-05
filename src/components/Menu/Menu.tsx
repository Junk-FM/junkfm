import { useState, useEffect } from 'react';
import { Box } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MenuDesktop, MenuMobile, useMenuStyles, menuItems } from '.';
import { JunkFmHeaderLogo, useIsMobile, colors } from '@junkfm';
import { useLocation } from 'react-router-dom';

export function Menu() {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [logoTapped, setLogoTapped] = useState(false);
  const activeRoute = useLocation().pathname;
  const { classes, cx } = useMenuStyles({ isMobile, activeRoute, logoTapped });

  useEffect(() => {
    const handleScroll = () => {
      // fade in desktop menu bottom border + slight darken after this Y offset
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log('logoTapped:', logoTapped);

  const handleTap = () => {
    console.log("handleTap called!");
    if (isMobile) {
      setLogoTapped(true);
      setTimeout(() => {
        setLogoTapped(false);
      }, 2000);
    }
  };

  return (
    <Box component="nav" className={cx(classes.menu, scrolled && 'scrolled')} id="menu">
      <Box className={cx(classes.menuInner)} id="menu-inner">
        <Link to="/" className={classes.logoLink} onClick={handleTap}>
          <JunkFmHeaderLogo height="75%" textColor={colors.white} />
        </Link>
        {isMobile ? (
          <MenuMobile activeRoute={activeRoute} menuItems={menuItems} /> // REVISIT
        ) : (
          <MenuDesktop activeRoute={activeRoute} menuItems={menuItems} />
        )}
      </Box>
    </Box>
  );
}
