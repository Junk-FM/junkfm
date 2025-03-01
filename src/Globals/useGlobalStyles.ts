import { createStyles, MantineThemeOverride } from '@mantine/core';

const BREAKPOINT_TOUCH = 800;

export const mq = {
  customMax: (max: number) => `@media (max-width: ${max}px)`,
  customMin: (min: number) => `@media (min-width: ${min}px)`,
  mobile: `@media (max-width: ${BREAKPOINT_TOUCH}px)`,
  desktop: `@media (min-width: ${BREAKPOINT_TOUCH + 1}px)`,
};

export const colors = {
  trueBlack: '#000000', // True black
  black: '#12130F', // Night
  darkBlue: '#054A91', // Polynesian blue
  lightBlue: '#81A4CD', // Vista Blue
  gray: '#DBE4EE', // Alice Blue
  white: '#FFFFFF', // White
  yellow: '#FFFD98', // Mindaro
  mustard: '#ECD444', // Citrine
  red: '#C42021', // Fire engine red
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
        backgroundColor: colors.lightBlue,
        color: colors.white,
        fontFamily: '"Poppins", sans-serif',
        height: '100dvh', // revisit
        width: '100dvw', // revisit
        overflow: 'hidden',
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
  // ------------------------------------------------ //
  // ------------------------------------------------ //
  // --------- MAIN BODY WRAPPER + DEFAULTS --------- //
  // ------------------------------------------------ //
  // ------------------------------------------------ //

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
    h1: {
      fontFamily: '"Oswald", sans-serif',
      fontSize: 'clamp(4rem, 8vw, 5rem)',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Oswald", sans-serif',
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      fontWeight: 400,
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
      fontWeight: 400,
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: 'clamp(0.85rem, 1.1125vw, 1rem)',
      fontWeight: 400,
    },
    p: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
      fontWeight: 400,
    },
  },

  // ---------------------------------------- //
  // ---------------------------------------- //
  // --------- TEXT-RELATED THINGS  --------- //
  // ---------------------------------------- //
  // ---------------------------------------- //

  oswald: {
    fontFamily: '"Oswald", sans-serif',
  },
  poppins: {
    fontFamily: '"Poppins", sans-serif',
  },
  tiltNeon: {
    fontFamily: '"Tilt Neon", sans-serif',
  },
  balance: {
    textWrap: 'balance',
  },
  pretty: {
    textWrap: 'pretty',
  },

  // --------------------------------------------- //
  // --------------------------------------------- //
  // ----------- SECTIONS / CONTAINERS ----------- //
  // --------------------------------------------- //
  // --------------------------------------------- //

  evenRow: {
    paddingInline: 'max(5vw, (100vw - 1280px)/2)',
  },

  container: {
    containerType: 'inline-size',
  },

  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContrastShadowSubtle: {
    textShadow: `1px 1px 5px ${colors.black}16, -1px -1px 5px ${colors.black}16, 1px -1px 5px ${colors.black}16, -1px 1px 5px ${colors.black}16`,
  },

  textContrastShadow: {
    textShadow: `1px 1px 6px ${colors.black}22, -1px -1px 6px ${colors.black}22, 1px -1px 6px ${colors.black}22, -1px 1px 6px ${colors.black}22`,
  },

  textContrastShadowHeavy: {
    textShadow: `1px 1px 5px ${colors.black}30, -1px -1px 5px ${colors.black}30, 1px -1px 5px ${colors.black}30, -1px 1px 5px ${colors.black}30`,
  },

  // ----------------------------------------- //
  // ----------------------------------------- //
  // --------------- Z-INDEXES --------------- //
  // ----------------------------------------- //
  // ----------------------------------------- //

  z0: {
    zIndex: 0,
  },
  z1: {
    zIndex: 1,
  },
  z2: {
    zIndex: 2,
  },
  z3: {
    zIndex: 3,
  },
  z4: {
    zIndex: 4,
  },
  z5: {
    zIndex: 5,
  },
  z6: {
    zIndex: 6,
  },
  z7: {
    zIndex: 7,
  },
  z8: {
    zIndex: 8,
  },
  z9: {
    zIndex: 9,
  },
  z10: {
    zIndex: 10,
  },
  z15: {
    zIndex: 15,
  },
  z20: {
    zIndex: 20,
  },
}));
