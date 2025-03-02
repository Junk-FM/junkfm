

import { createStyles } from '@mantine/core';
import { MenuProps, sectionBackgrounds, mq } from '@junkfm';
import chroma from 'chroma-js';

export const useMenuStyles = createStyles((_, { isMobile }: MenuProps) => ({
  menu: {
    width: '100dvw',
    height: isMobile ? '65px' : '75px',
    display: 'flex',
    backgroundColor: sectionBackgrounds.hero,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    transition: 'box-shadow 400ms, background-color 400ms, backdrop-filter 400ms',
    '&.scrolled': {
      backgroundColor: chroma(sectionBackgrounds.hero).alpha(0.80).css(),
      backdropFilter: 'blur(5px) brightness(0.8)',
      boxShadow: `0 5px 5px ${chroma(sectionBackgrounds.hero).alpha(0.4).darken(3).css()}`,
    },
  },

  menuInner: {
    paddingInline: 'max(3vw, (100vw - 1560px)/2)', // variant of row padding
    width: '100%',
    height: '85%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [mq.customMax(1200)]: {
      paddingInline: 'max(2vw, (100vw - 1600px)/2)',

    },
  },

  menuSwitchBox: {
    width: '67%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center ',
  },
}));
