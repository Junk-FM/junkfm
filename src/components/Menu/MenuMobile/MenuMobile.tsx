import { useDisclosure } from '@mantine/hooks';
import { Box, Drawer, Text } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useIsPhone, colors, JunkFmLogo, CommonButton, useMenuMobileStyles, MenuProps } from '@junkfm';

export function MenuMobile({ activeRoute, menuItems }: MenuProps) {
  const isPhone = useIsPhone();
  const [opened, { open, close }] = useDisclosure(false);
  const { classes, cx } = useMenuMobileStyles();

  const handleHamburgerClick = () => {
    open();
    // log state of opened
    console.log('opened:', opened);
  };

  return (
    <Box className={classes.menuMobile} id="menu-mobile-component">
      <Box
        onClick={handleHamburgerClick}
        component="button"
        className={classes.hamburger}
        id="hamburger"
      >
        <IconMenu2 size={36} strokeWidth={2} color={colors.white} />
      </Box>

      <Drawer
      className={classes.mobileDrawer}
        id="mobile-menu-drawer"
        opened={opened}
        onClose={close}
        overlayProps={{ opacity: 0.5, blur: 3 }}
        position="right"
        size= {isPhone ? 'clamp(200px, calc(60dvw + 30dvh), 280px)' : 'md'}
        withCloseButton={false}
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'ease-out' }}
      >
        <Box className={classes.mobileMenuContainerOuter}>
          <Box component="nav" className={classes.mobileMenuRoutesContainer}>
            <Link to="/" onClick={close} className={classes.mobileMenuLogoLink}>
              <JunkFmLogo width="87%" textColor={colors.black} barColor={colors.red} />
            </Link>

            <Box className={classes.mobileMenuTextRoutesContainer}>
              {menuItems.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  onClick={close}
                  className={cx(classes.mobileMenuItem, activeRoute === item.link && 'activePage')}
                  // revisit // todo ACTIVE ROUTE STUFF
                >
                  <Text title={item.title} component="span">
                    {item.title}
                  </Text>
                </Link>
              ))}
            </Box>
          </Box>
          <CommonButton
            buttonColor={colors.red}
            buttonTextColor={colors.white}
            buttonTextHoverColor={colors.white}
            buttonText="BOOK US"
            buttonSize="xl"
            buttonVariant="filled"
          />
        </Box>
      </Drawer>
    </Box>
  );
}
