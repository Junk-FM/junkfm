import { createStyles } from '@mantine/core';
import { sectionBackgrounds, colors } from '@junkfm';
import chroma from 'chroma-js';

export const useContactStyles = createStyles(() => ({
  contactOutermostWrapper: {
    position: 'relative',
    height: 'calc(100dvh - 200px)',
    background: sectionBackgrounds.contact,
    h1: {
      textAlign: 'center',
      
      WebkitTextStroke: `0.026em ${colors.white}`,
    },
  },
  formWrapper: {
    width: 'min(80%, 650px)',
    height: 'min(400px, calc(35vw + 35vh))',
    marginInline: 'auto',
    backgroundColor: chroma(colors.black).alpha(0.5).hex(),
    border: `3px solid ${colors.mustard}`,
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
