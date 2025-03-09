import { Box, Text, Title } from '@mantine/core';
import { useGlobalStyles, useScheduleStyles, useUpcomingShows } from '@junkfm';

export function Schedule() {
  const { upcomingShows, loading, error } = useUpcomingShows();
  const { classes, cx } = useScheduleStyles();
  const { classes: globalClasses } = useGlobalStyles();

  const formatDatetime = (datetime: string) => {
    const date = new Date(datetime);
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  // console.log('SHOW LIST!', upcomingShows?.[0]?.venue?.region);

  return (
    <Box
      className={cx(
        globalClasses.responsiveRow,
        globalClasses.routeTopMenuPadding,
        classes.scheduleOutermostWrapper
      )}
      id="schedule"
      pb="min(6rem, calc(5vh + 4vw))"
    >
      <Title order={1}>Schedule</Title>
      <Title order={2}>We'll see you soon. Right? RIGHT??</Title>

      <Box className={classes.scheduleBoxWrapper}>

        {loading && (
          <Box className={classes.loadingErrorBox}>
            <Text component="h3" ta="center" color="white" mx="auto" pt="300px">
              Loading upcoming shows...
            </Text>
          </Box>
        )}

        {error && (
          <Box ta="center" className={classes.loadingErrorBox}>
            <Text component="h3" color="white" mx="auto">
              Sorry - something went wrong.
            </Text>
            <Text component="h4" color="white" mx="auto">
              Try reloading the page.
            </Text>
            <Text component='p' color="white" mx="auto">
              If that doesn't work, take a sip of Jager and scream at your computer.
            </Text>
          </Box>
        )}

        <Box className={classes.showsListBox}>

        {!loading &&
          !error &&
          upcomingShows?.map((show) => (
            <Box key={show.id} pb="0.5em">
              <Title order={3} color="white">
                {show.venue.name}
              </Title>
              <Text component="h4" color="lightblue">
                {show.venue.city}, {show.venue.region}
              </Text>
              <Text component="h5" color="darkblue">
                {show.venue.street_address}
              </Text>
              <Text component="p" color="darkred">
                {formatDatetime(show.datetime)}
              </Text>
            </Box>
          ))}
          </Box>
      </Box>
    </Box>
  );
}
