import { createStyles } from '@mantine/core';
import { sectionBackgrounds } from '@junkfm';

export const useScheduleStyles = createStyles(() => ({
  scheduleOutermostWrapper: {
    backgroundColor: sectionBackgrounds.schedule,
  },

  scheduleBoxWrapper: {
    h3: {
      marginBlock: '0.2em',
      fontSize: 'clamp(1.25em, 2vw, 1.5em)',
    },
    h4: {
      marginBlock: '0.2em',
      fontSize: 'clamp(1em, 1.5vw, 1.25em)',
    },
    h5: {
      marginBlock: '0.2em',
      fontSize: 'clamp(0.85em, 1.25vw, 1em)',
    },
    p: {
        marginBlock: '0.2em',
        fontSize: 'clamp(0.75em, 1vw, 0.85em)',
    }
  },
}));
