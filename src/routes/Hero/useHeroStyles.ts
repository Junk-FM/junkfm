import { createStyles } from '@mantine/core';
import { colors, mq, sectionBackgrounds } from '@junkfm';

export const useHeroStyles = createStyles(() => ({
  heroWrapper: {
    paddingInline: 'max(2vw, (100vw - 1600px)/2)', // variant of row padding
    position: 'relative',
    background: sectionBackgrounds.hero,
    paddingTop: '20px',
    [mq.customMax(1200)]: {
      // padding top must INCREASE as viewport shrinks
      paddingTop: 'calc(60px + -4vw)',
    },
  },

  heroContentWrapper: {
    textAlign: 'center',
    h4: {
      color: colors.mustard,
      fontWeight: 400,
      marginBlock: '0.2em 0.75em',
      width: '100%',
      textWrap: 'balance',
      lineHeight: '1.3em',
      fontFamily: '"Poppins", sans-serif',
      // position: 'absolute',
      // top: '19%',
      // left: '50%',
      // transform: 'translate(-50%, -50%)',
      // mixBlendMode: 'color-dodge',
    },

    // placeholder p
    p: {
      marginTop: '1em',
      textAlign: 'left',
      fontWeight: 500,
      marginInline: 'auto',
      color: colors.white,
      fontSize: 'clamp(1rem, 2vw, 1.15rem)',
      '&:first-letter': {
        float: 'left',
        fontSize: '2.5em',
        lineHeight: '0.25em',
        marginRight: '0.1em',
        color: colors.mustard,
        fontWeight: 700,
      },
    },
  },
}));
