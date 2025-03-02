import { createStyles } from '@mantine/core';

export const useMenuMobileStyles = createStyles(() => ({
  menuMobile: {
    // just the hamburger for now
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
