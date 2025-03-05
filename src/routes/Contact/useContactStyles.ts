import { createStyles } from '@mantine/core';
import { sectionBackgrounds, colors } from '@junkfm';
import chroma from 'chroma-js';

export const useContactStyles = createStyles(() => ({
  contactOutermostWrapper: {
    position: 'relative',
    background: sectionBackgrounds.contact,
    minHeight: '100vh',
    h1: {
      textAlign: 'center',
      paddingBlock: '0.15em 0.4em',
    },
  },
  formWrapper: {
    width: 'min(80%, 650px)',
    height: 'min(400px, calc(35vw + 35vh))',
    marginInline: 'auto',
    backgroundColor: chroma(colors.black).alpha(0.5).hex(),
    border: `3px solid ${colors.mustard}`,
    borderRadius: '8px',
  },
}));
