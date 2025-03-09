import { useMediaQuery } from '@mantine/hooks';

/**
 * useIsMobile hook
 *
 * @description Returns true if the screen width is
 * less than 820px via Mantine's useMediaQuery hook
 *
 * @author Chris "Mo" Mochinski <mo@wreckshopmedia.com>
 * @version 1.0.0
 *
 * @returns {boolean} useIsMobile
 *
 * @example
 * ```tsx
 * const isMobile = useIsMobile();
 * console.log(isMobile); // true or false
 * ```
 */
export const useIsMobile = () => useMediaQuery('(max-width: 900px)');


/**
 * useIsPhone hook
 * 
 * @description Returns true if the screen width is
 * under 576px (associated with the below XS breakpoint)
 * via Mantine's useMediaQuery hook
 * 
 * @author Chris "Mo" Mochinski <mo@wreckshopmedia.com>
 * 
 * @returns {boolean} useIsPhone
 * 
 * @example
 * ```tsx
 * const isPhone = useIsPhone();
 * console.log(isPhone); // true or false
 * ```
 */
export const useIsPhone = () => useMediaQuery('(max-width: 576px)');