import { createStyles } from '@mantine/core';
import { colors } from '@junkfm';
import chroma from 'chroma-js';

export interface FooterStylesProps {
  isMobile: boolean;
}

export const useFooterStyles = createStyles((_, { isMobile }: FooterStylesProps) => ({ 

  footerOutermostWrapper: {
    backgroundColor: chroma(colors.black).darken(0.1).alpha(1).hex(),
    backdropFilter: 'blur(5px) brightness(0.8)',
    color: 'white',
    paddingBlock: '0.5em',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: isMobile ? '150px' : '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    boxShadow: `0 -15px 30px ${chroma(colors.lightBlue).alpha(0.8).hex()}`,
  },

  footerInnerWrapper: {
    textAlign: 'center',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  copyright: {
    color: colors.gray,
    paddingBlock: 0,
    marginBlock: 0,
    fontSize: 'clamp(0.75rem, 1.125vw, 1rem)',
    paddingTop: '0.5rem',
},

socialMediaRow: {
    display: 'flex',
    paddingBottom: '0.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'min(2vw, 1.5em)',
    marginBlock: 0,
    svg: {
        height: 'clamp(2em, 4vw, 2.5em)',
        width: 'auto',
    },
  },
}));
