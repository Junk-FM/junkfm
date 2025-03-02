

import { createStyles } from '@mantine/core';
import { MenuProps, sectionBackgrounds } from '@junkfm';
import chroma from 'chroma-js';

export const useMenuStyles = createStyles((_, { isMobile }: MenuProps) => ({
  menu: {
    width: '100dvw',
    height: isMobile ? '60px' : '75px',
    display: 'flex',
    backgroundColor: sectionBackgrounds.hero,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    transition: 'box-shadow 300ms, background-color 300ms, backdrop-filter 300ms',
    '&.scrolled': {
      backgroundColor: chroma(sectionBackgrounds.hero).alpha(0.87).css(),
      backdropFilter: 'blur(4px)',
      boxShadow: '0px 4px 6px #00000070'
    },
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
