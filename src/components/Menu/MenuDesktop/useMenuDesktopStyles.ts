import { createStyles } from '@mantine/core';
import { colors } from '@junkfm';

export const useMenuDesktopStyles = createStyles(() => ({
  menuDesktop: {
    width: '100dvw',
    backgroundColor: colors.trueBlack,
    // boxShadow: '0 4px 4px #00000090',
    height: 'clamp(50px, calc(2.5dvw + 3dvh), 80px)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    a: {
      color: colors.white,
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      fontWeight: 500,
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
