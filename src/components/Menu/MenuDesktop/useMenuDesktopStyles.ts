import { createStyles } from '@mantine/core';
import { colors } from '@junkfm';

export const useMenuDesktopStyles = createStyles(() => ({
  menuDesktop: {
    width: 'clamp(580px, 78%, 840px)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    a: {
      color: colors.trueBlack,
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      fontWeight: 600,
        fontSize: 'clamp(13px, 1.25vw, 15px)',
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
