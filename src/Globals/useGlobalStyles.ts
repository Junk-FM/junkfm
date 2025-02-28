import { createStyles, MantineThemeOverride } from '@mantine/core';
// import chroma from 'chroma-js';

const BREAKPOINT_TOUCH = 800;

export const mq = {
  customMax: (max: number) => `@media (max-width: ${max}px)`,
  customMin: (min: number) => `@media (min-width: ${min}px)`,
  mobile: `@media (max-width: ${BREAKPOINT_TOUCH}px)`,
  desktop: `@media (min-width: ${BREAKPOINT_TOUCH + 1}px)`,
};

export const colors = {
  black: '#191716', // Eerie black
  white: '#F9F9F9', // Seasalt
  red: '#89043D', // Claret
  orange: '#FF571F', // Coquelicot
  gold: '#F7B538', // Xanthous
  yellow: '#FFFD77', // Icterine
  green: '#20FC8F', // Spring green
  emerald: '#1FAD9D', // Keppel
  lightBlue: '#51E5FF', // Electric blue
  darkBlue: '#235789', // Lapis lazuli
  purple: '#9F6AA0', // Pomp and Power
  pink: '#F2B5D4', // Lavender pink
  lightGray: '#DBDFE6', // Platinum
  gray: '#95B2B8', // Cadet gray
  darkGray: '#4F5D75', // Payne's grey
  trueBlack: '#000000', // True black
  trueWhite: '#FFFFFF', // True white
};

export const globalTheme: MantineThemeOverride = {
  globalStyles() {
    return {
      ':root': {
        '--oswald': '"Oswald", sans-serif',
        '--poppins': '"Poppins", sans-serif',
        '--tilt-neon': '"Tilt Neon", sans-serif',
        colorScheme: 'light dark',
      },

      body: {
        margin: 0,
        padding: 0,
        backgroundColor: colors.black,
        color: colors.white,
        fontFamily: '"Poppins", sans-serif',
        height: '100dvh', // revisit
        width: '100dvw', // revisit
        overflow: 'hidden',
        '& #root': {
          height: '100%',
          width: '100%',
          backgroundColor: 'transparent', // revisit
          '& h1, & h2': {
            fontFamily: '"Oswald", sans-serif',
            fontWeight: 700,
          },
        },
      },
    };
  },

  // body text
  fontFamily: '"Poppins", sans-serif',

  breakpoints: {
    xs: '575',
    sm: '768',
    md: '991',
    lg: '1200',
    xl: '1400',
  },

  spacing: {
    xs: '0.125em',
    sm: '0.25em',
    md: '0.5em',
    lg: '1em',
    xl: '1.5em',
    xxl: '2em',
  },

  fontSizes: {
    xxs: 'clamp(0.7rem, 1vw, 0.85rem)',
    xs: 'clamp(0.85rem, 1.1125vw, 1rem)',
    sm: 'clamp(1rem, 1.3vw, 1.15rem)',
    md: 'clamp(1.125rem, 1.6vw, 1.25rem)',
    lg: 'clamp(1.25rem, 1.8vw, 1.5rem)',
    xl: 'clamp(1.75rem, 3vw, 2rem)',
    xxl: 'clamp(2.25rem, 4vw, 3rem)',
    xxxl: 'clamp(3rem, 5vw, 4rem)',
  },

  shadows: {
    xs: '0px 1px 2px #00000015',
    sm: '0px 2px 4px #00000015',
    md: '0px 4px 8px #00000018',
    lg: '0px 8px 16px #00000020',
    xl: '0px 16px 32px #00000020',
  },
};

export const useGlobalStyles = createStyles(() => ({
  // App.tsx body wrapper
  bodyWrapper: {
    background: colors.black,
    minHeight: '100dvh',
    width: '100dvw',
    fontFamily: '"Poppins", sans-serif',
    overflow: 'hidden',
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '& h1, & h2': {
      fontFamily: '"Oswald", sans-serif',
      fontWeight: 700,
    },
  },
}));
