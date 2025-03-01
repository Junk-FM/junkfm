import { createStyles } from '@mantine/core';
import { colors } from '@junkfm';

export const useJunkFmLogoMaskStyles = createStyles(() => ({
  junkFmLogoMaskWrapper: {
    position: 'relative',
    overflow: 'hidden',
  },
  
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  junkFmLogoMaskSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
  },
}));
