import { createStyles } from '@mantine/core';
import { colors, sectionBackgrounds } from '@junkfm';

export const usePlaylistStyles = createStyles(() => ({
  playlistOutermost: {
    backgroundColor: sectionBackgrounds.playlist,
    h1: {
      color: colors.trueBlack,
      textAlign: 'center',
      fontWeight: 700,
    },
  },

  playlistGridWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  /* 
    IDEAS

    - probably do <=80s, ==90s, >=00s
    - neon sign like header
    - light bulb with pull string
    - interactive spotlight effect
    - mock common playlist app like spotify
    - scrolling horizontal artists various directions
    - WORD FIND PUZZLE?! ⭐
    - CROSSWORD PUZZLE?! ⭐
    */
}));
