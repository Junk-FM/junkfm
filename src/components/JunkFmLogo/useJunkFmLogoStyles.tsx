import { createStyles } from '@mantine/core';
import { JunkFmLogoProps } from '.';

export const useJunkFmLogoStyles = createStyles((_, { width, height }: JunkFmLogoProps) => ({
  junkFmLogo: {
    width: width || 'auto', // ✅ Use width if provided, otherwise auto
    height: height || 'auto', // ✅ Use height if provided, otherwise auto
  },
}));
