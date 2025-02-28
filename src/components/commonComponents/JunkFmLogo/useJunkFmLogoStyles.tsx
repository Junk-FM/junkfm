import { createStyles } from '@mantine/core';
import { colors } from '@junkfm';

export const useJunkFmLogoStyles = createStyles(() => ({
    junkFmLogo: {
        display: 'inline-block',
        width: 'fit-content',
        fontSize: 'clamp(4rem, 8vw, 5rem)',
        h1: {
          lineHeight: '1em',
          color: colors.white,
          display: 'inline-block',
          '&:before, &:after': {
            content: '""',
            display: 'block',
            width: '100%',
            height: '0.1em',
            backgroundColor: colors.red,
            
          },
          '&:after': {
            marginTop: '0.1em',
          },
        },
      },
}));