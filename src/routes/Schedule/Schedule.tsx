import { Box, Title } from '@mantine/core';
import { useGlobalStyles, useScheduleStyles } from '@junkfm';

export function Schedule() {
  const { classes, cx } = useScheduleStyles();
  const { classes: globalClasses } = useGlobalStyles();

  return (
    <Box
      className={cx(
        globalClasses.responsiveRow,
        globalClasses.routeTopMenuPadding,
        classes.scheduleOutermostWrapper
      )}
      id="schedule"
    >
      <Title order={1} pb="0.5em">Schedule Page</Title>
    </Box>
  );
}
