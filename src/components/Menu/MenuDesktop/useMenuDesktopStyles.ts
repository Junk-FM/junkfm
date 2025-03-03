import { createStyles } from '@mantine/core';
import { colors } from '@junkfm';

export const useMenuDesktopStyles = createStyles(() => ({
  menuDesktop: {
    width: 'clamp(595px, 65%, 820px)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  menuDesktopInner: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  menuItem: {
    textDecoration: 'none',
    span: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.13em',
      fontSize: 'clamp(14px, 1.3vw, 16px)',
      color: colors.trueBlack,
    },
    '&:after': {
      content: '""',
      display: 'block',
      width: '0',
      height: '0.2em',
      backgroundColor: colors.red,
      transition: 'width 200ms ease-in-out',
    },
    '&:hover': {
      '&:after': {
        width: '100%',
      },
    },
  },
}));
