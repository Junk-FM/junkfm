import { createStyles } from '@mantine/core';
import { colors } from '@junkfm';

export const useMenuDesktopStyles = createStyles(() => ({
  menuDesktop: {
    width: 'clamp(620px, 95%, 770px)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    a: {
      textDecoration: 'none',
      color: colors.trueBlack,
      textTransform: 'uppercase',
      letterSpacing: '0.13em',
      fontWeight: 600,
      fontSize: 'clamp(13px, 1.25vw, 15px)',
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
  },

  menuDesktopInner: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
}));
