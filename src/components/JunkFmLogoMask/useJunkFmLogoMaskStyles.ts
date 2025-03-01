import { createStyles } from '@mantine/core';
import { heroSectionBackgroundColor } from '@junkfm';

export const useJunkFmLogoMaskStyles = createStyles(() => ({
  // important - mask fill color, must match background of section
  crucialMaskFill: {
    fill: heroSectionBackgroundColor,
  },

  logoMaskColorFillFade: {
    width: '99.85%', // spill on right - couldn't avoid
    opacity: 1,
    transition: 'opacity 2000ms ease-in-out',
    '&.fadeColorFill': {
      opacity: 0,
    },
  },

  junkFmLogoMaskWrapper: {
    position: 'relative',
    overflow: 'hidden',
    height: 'auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: '16 / 8.3',
    flexDirection: 'column',
  },

  video: {
    width: '99.85%', // spill on right - couldn't avoid
  },
  junkFmLogoMaskSvg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
  },
}));
