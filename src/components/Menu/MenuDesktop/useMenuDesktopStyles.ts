import { createStyles } from '@mantine/core';
import { colors, MenuItem } from '@junkfm';
import chroma from 'chroma-js';

interface MenuDesktopStylesProps {
  menuItems: MenuItem[];
  hoveredItem?: string | null;
  activeRoute?: string;
}

export const useMenuDesktopStyles = createStyles(
  (_, { menuItems, activeRoute }: MenuDesktopStylesProps) => {
    const styles: Record<string, any> = {
      menuDesktop: {
        width: 'clamp(595px, 70%, 820px)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },

      menuItem: {
        position: 'relative',
        textDecoration: 'none',
        zIndex: 1,
        padding: '0.2em 0.4em',

        '& span': {
          display: 'inline-block',
          transition:
            'color 80ms ease-in-out, text-shadow 150ms ease-in-out, -webkit-text-stroke 120ms ease-in-out',
          fontFamily: '"Tilt Neon", sans-serif',
          WebkitTextStroke: '0.05em',
          WebkitTextStrokeColor: `${colors.gray}78`,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontSize: 'clamp(16px, 1.75vw, 19px)',
          color: chroma(colors.white).darken(0.5).hex(),
          '&:after': {
            content: 'attr(title)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'transparent',
            WebkitTextStroke: '0',
            zIndex: 5,
            textShadow: `0.05em 0.09em 0.09em ${chroma(colors.black).alpha(0.7).hex()}`,
            transition: 'text-shadow 110ms ease-in-out',
          },
        },
      },
    };

    // ---------- STYLES BY STATE ---------- //

    menuItems.forEach((item) => {
      const neonColor = item.neonColor;
      const isActive = activeRoute === item.link;

      styles[item.link] = {
        // ✅ HOVER STYLES FOR MENU ITEMS
        '&:hover span': {
          WebkitTextStroke: '0.09em',
          WebkitTextStrokeColor: chroma(neonColor).brighten(4.2).hex(),

          textShadow: `
              3px 3px 12px ${neonColor}DD, 
              -3px -3px 12px ${neonColor}DD, 
              3px -3px 12px ${neonColor}DD, 
              -3px 3px 12px ${neonColor}DD,
              0 0 3px ${chroma(neonColor).brighten(3).hex()},
              0 0 5px ${chroma(neonColor).brighten(3.5).hex()},
              0 0 7px ${chroma(neonColor).brighten(4).hex()},
              0 0 10px ${chroma(neonColor).brighten(4.5).hex()},
              0 0 15px ${chroma(neonColor).brighten(5).hex()},
              0 0 20px ${chroma(neonColor).brighten(5.5).hex()},
              0 0 25px ${chroma(neonColor).brighten(6).hex()},
              0 0 30px ${chroma(neonColor).brighten(6.5).hex()},
              0 -5px 42px white,
              0 -10px 82px white,
              0 -10px 92px white,
              0 -20px 102px white,
              0 -20px 151px white;
          `,
          color: colors.white,
          '&:after': {
            textShadow: `0 0 0 ${chroma(colors.black).alpha(0).hex()}`,
          },
        },

        // ✅ ACTIVE STYLES FOR MENU ITEMS (less intense glow)
        ...(isActive && {
          '& span': {
            // slower transition when set to active state
            transition: 'color 400ms ease-out, text-shadow 250ms ease-out, -webkit-text-stroke 300ms ease-out',
            WebkitTextStroke: '0.02em',
            WebkitTextStrokeColor: chroma(neonColor).brighten(3.5).hex(),
            textShadow: `
          2px 2px 4px ${chroma(neonColor).alpha(0.5).hex()},  
          -2px -2px 4px ${chroma(neonColor).alpha(0.8).hex()},
          2px -2px 4px ${chroma(neonColor).alpha(0.8).hex()},
          -2px 2px 4px ${chroma(neonColor).alpha(0.9).hex()},
          0 0 5px ${chroma(neonColor).brighten(1).alpha(1).hex()},  
          0 0 10px ${chroma(neonColor).brighten(2).alpha(1).hex()},
          0 0 20px ${chroma(neonColor).brighten(9).alpha(1).hex()},
          0 0 40px ${chroma(neonColor).brighten(9).hex()},
          0 0 70px ${chroma(neonColor).brighten(9).hex()}
        `,
            color: chroma(neonColor).brighten(7).hex(),
            '&:after': {
              textShadow: `0 0 0 ${chroma(colors.black).alpha(0).hex()}`,
            },
          },
          pointerEvents: 'none', // 🛑 Disable hover effects for active menu item
        }),
      };
    });

    return styles;
  }
);
