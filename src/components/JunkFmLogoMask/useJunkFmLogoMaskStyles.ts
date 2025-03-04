import { createStyles } from '@mantine/core';
import { colors } from '@junkfm';
import chroma from 'chroma-js';

interface JunkFmLogoMaskStyles {
  loadAnimationDuration: number;
  fadeInVideoDuration: number;
}

export const useJunkFmLogoMaskStyles = createStyles(
  (_, { loadAnimationDuration, fadeInVideoDuration }: JunkFmLogoMaskStyles) => ({
    // ---------------------------------------------------- //
    // ---------------------------------------------------- //
    // ----------------- CRUCIAL FOR MASK ----------------- //
    // ---------------------------------------------------- //
    // ---------------------------------------------------- //

    crucialMaskFill: {
      // was hero bg - now in SVG
    },

    junkLogoMaskBacking: {
      //deletelater need????
    },

    lettersMaskBacking: {
      transform: 'translate(0, 80%)',
      transition: `transform ${loadAnimationDuration * 1.2}ms ease-out 400ms, opacity ${fadeInVideoDuration}ms ease-out`,
      '&.slideIn': {
        transform: 'translate(0, 0)',
        '&.fadeOut': {
          opacity: 0,
        },
      },
    },

    bottomLineMaskBacking: {
      transform: 'translateX(-110%)',
      transition: `transform ${loadAnimationDuration}ms ease-out, opacity ${fadeInVideoDuration}ms ease-out`,
      '&.slideIn': {
        transform: 'translateX(0)',
        '&.fadeOut': {
          opacity: 0,
        },
      },
    },

    topLineMaskBacking: {
      transform: 'translateX(110%)',
      transition: `transform ${loadAnimationDuration}ms ease-out, opacity ${fadeInVideoDuration}ms ease-out`,
      '&.slideIn': {
        transform: 'translateX(0)',
        '&.fadeOut': {
          opacity: 0,
        },
      },
    },

    // ---------------------------------------------------- //
    // --------------- END CRUCIAL FOR MASK --------------- //
    // ---------------------------------------------------- //

    junkFmLogoMaskWrapper: {
      position: 'relative',
      overflow: 'hidden',
      height: 'auto',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      aspectRatio: '16 / 7.6',
      flexDirection: 'column',
    },

    video: {
      width: '99.85%', // spill on right - couldn't avoid
      transition: `opacity ${fadeInVideoDuration}ms ease-in-out`,
      opacity: 0,
      '&.fadeInVideo': {
        opacity: 1,
      },
    },

    // for edge definition
    videoOverlay: {
      width: '100%',
      height: '180%',
      backgroundColor: 'white',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '0',
      zIndex: 0,
      background: `radial-gradient(ellipse at center, 
      ${colors.black}10 30%,
      ${colors.gray}15 40%,
      ${chroma(colors.lightBlue).brighten(1).saturate(0.3).hex()}20 80%,
      ${chroma(colors.lightBlue).brighten(1).saturate(0.3).hex()}20 100%)`,
      opacity: 0,
      transition: `opacity ${fadeInVideoDuration}ms ease-in-out 300ms`,
      '&.fadeInOverlay': {
        opacity: 1,
      },
      // mixBlendMode: 'difference', // IDEA CYCLE THROUGH THESE ON A TIMER??
    },

    junkFmLogoMaskSvg: {
      position: 'absolute',
      top: '0',
      width: '100%',
      height: 'auto',
      overflow: 'hidden',
    },

    // "spotlight" for logo visibility
    ovalCenterStop: {
      transition: `stop-color ${fadeInVideoDuration * 1.4}ms ease-in-out 200ms`,
      '&.fadeInVideo': {
        stopColor: chroma(colors.gray).darken(4).alpha(0.85).hex(),
      },
    },
  })
);
