import { createStyles } from '@mantine/core';
import { colors, mq, sectionBackgrounds } from '@junkfm';



export const useHeroStyles = createStyles(() => ({
  heroWrapper: {
    paddingInline: 'max(2vw, (100vw - 1700px)/2)', // variant of row padding
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
      color: colors.red,
      fontWeight: 500,
      marginBlock: '0.2em 0.75em',
      textWrap: 'balance',
      lineHeight: '1.3em',
    },
    
    // placeholder p
    p: {
      marginTop: '1em',
      maxWidth: '1200px',
      textAlign: 'left',
      fontWeight: 500,
      marginInline: 'auto',
      color: colors.trueBlack,
      fontSize: 'clamp(1rem, 2vw, 1.15rem)',
    },
  },


}));
