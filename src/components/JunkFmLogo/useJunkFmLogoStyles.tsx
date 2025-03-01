import { createStyles } from '@mantine/core';
import { colors } from '@junkfm';

export const useJunkFmLogoStyles = createStyles(() => ({
    junkFmLogo: {
        fontSize: 'clamp(10rem, 29vw, 10rem)',
        h1: {
          lineHeight: '1em',
          fontSize: 'inherit',
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