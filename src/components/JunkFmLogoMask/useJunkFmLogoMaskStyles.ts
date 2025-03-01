import { createStyles } from '@mantine/core';
// import { colors } from '@junkfm';

export const useJunkFmLogoMaskStyles = createStyles(() => ({
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
    width: '100%',
    
    
  },
  junkFmLogoMaskSvg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
  },

}));
