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
    position: 'relative',
    textDecoration: 'none',
    zIndex: 1,
    padding: '0.2em 0.2em 0.135em 0.5em',
    '& span': {
      display: 'inline-block',
      transition: 'transform 200ms ease-in-out, color 200ms ease-in-out',
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.13em',
      fontSize: 'clamp(14px, 1.3vw, 16px)',
      color: colors.trueBlack,
    },
    '&:after': {
      position: 'absolute',
      borderRadius: '0.15em',
      zIndex: -1,
      bottom: 0,
      left: 0,
      right: 0,
      width: '102%',
      content: '""',
      display: 'block',
      height: '0',
      backgroundColor: colors.darkBlue,
      transition: 'height 200ms ease-in-out',
    },
    '&:hover': {
      '& span': {
        transform: 'translateY(0.17em)',
        color: colors.white,
      },
      '&:after': {
        height: '1.5em',
      },
    },
  },
}));
