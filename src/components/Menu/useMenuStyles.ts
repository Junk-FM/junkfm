import { createStyles } from '@mantine/core';
import { MenuProps } from '@junkfm';

export const useMenuStyles = createStyles((_, { isMobile }: MenuProps) => ({
  menu: {
    width: '100dvw',
    height: isMobile ? '60px' : '75px',
    display: 'flex',
    // backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
  },

  menuInner: {
    paddingInline: 'max(3vw, (100vw - 1600px)/2)', // variant of row padding
    width: '100%',
    height: '85%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  menuSwitchBox: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center ',
  },
}));
