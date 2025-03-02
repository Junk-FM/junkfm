import { createStyles } from '@mantine/core';
import { heroSectionBackgroundColor, mq } from '@junkfm';

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
      fill: heroSectionBackgroundColor,
    },

    junkLogoMaskBacking: {
      //deletelater need????
    },

    lettersMaskBacking: {
      transform: 'translate(0, 80%)',

      transition: `transform ${loadAnimationDuration * 1.2}ms ease-out 600ms, opacity ${fadeInVideoDuration}ms ease-out`,
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
      transition: `transform ${loadAnimationDuration}ms ease-out 300ms, opacity ${fadeInVideoDuration}ms ease-out`,
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
      [mq.customMax(1350)]: {
        
        marginTop: 'calc(99px + -7.9vw)',  
      },
      [mq.customMax(800)]: {
        marginTop: 'calc(76px + -7.7vw)',  
      },
      [mq.customMax(575)]: {
        marginTop: 'calc(53px + -4.9vw)',
      }
    },

    video: {
      width: '99.85%', // spill on right - couldn't avoid
      transition: `opacity ${fadeInVideoDuration}ms ease-in-out`,
      opacity: 0,
      '&.fadeInVideo': {
        opacity: 1,
      },
    },
    junkFmLogoMaskSvg: {
      position: 'absolute',
      top: '0',
      width: '100%',
      height: 'auto',
      overflow: 'hidden',

    },
  })
);
