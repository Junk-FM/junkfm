import { createStyles } from '@mantine/core';
import { colors, sectionBackgrounds } from '@junkfm';



export const useHeroStyles = createStyles(() => ({
  heroWrapper: {
    paddingInline: 'max(2vw, (100vw - 1700px)/2)', // variant of row padding
    position: 'relative',
    background: sectionBackgrounds.hero,
  },

  

  heroContentWrapper: {
    textAlign: 'center',
    h4: {
      color: colors.yellow,
      fontWeight: 500,
      marginBlock: '0 0.75em',
    },

    // placeholder p
    p: {
      marginTop: '2em',
      maxWidth: '1200px',
      textAlign: 'left',
      marginInline: 'auto',
      color: colors.white,
      fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
    },
  },


}));
