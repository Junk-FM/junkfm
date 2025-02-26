import { createStyles } from '@mantine/core';
// import { MantineThemeOverride } from '@mantine/core';

const BREAKPOINT_MOBILE = 800;

export const mq = {
    customMax: (max: number) => `@media (max-width: ${max}px)`,
    customMin: (min: number) => `@media (min-width: ${min}px)`,
    mobile: `@media (max-width: ${BREAKPOINT_MOBILE}px)`, 
    desktop: `@media (min-width: ${BREAKPOINT_MOBILE + 1}px)`,
  };

export const useGlobalStyles = createStyles(() => ({
    //GLOB
}))