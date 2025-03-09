import { Box, Flex, Text, Title } from '@mantine/core';
import { useGlobalStyles, useScheduleStyles, useUpcomingShows } from '@junkfm';
import { IconFaceIdError } from '@tabler/icons-react';

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

  const formatDateTimeShort = (datetime: string) => {
    const date = new Date(datetime);
    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits

    return (
      <>
        {month}
        <Text component="span">
          .
        </Text>
        {day}
        <Text component="span">
          .
        </Text>
        {year}
      </>
    );
  };

  console.log('SHOW LIST!', upcomingShows);

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
      <Text component="p">We'll see you soon. Right? RIGHT??</Text>

      <Box className={classes.scheduleBoxWrapper}>
        {/* IF DATA IS LOADING ⌛ */}
        {loading && (
          <Box className={classes.loadingErrorBox}>
            <Text component="h3" ta="center" color="white" mx="auto">
              Loading upcoming shows...
            </Text>
          </Box>
        )}

        {/* IF THERE IS AN ERROR ❌ */}
        {error && (
          <Box ta="center" className={classes.loadingErrorBox}>
            <Flex direction="row" justify="center" align="center">
              <Text ml="auto" mr="0.5em" component="h3" color="white">
                Sorry - something went wrong
              </Text>
              <IconFaceIdError stroke={2} size={50} color="white" />
            </Flex>
            <Text component="h4" color="white" mx="auto">
              Try reloading the page.
            </Text>
            <Text component="p" color="white" mx="auto">
              If that doesn't work, take a sip of Jager and scream at your computer.
            </Text>
          </Box>
          // IDEA - funny junk image of something broken??
        )}

        {/* IF / WHEN SUCCESS 🎉 */}
        <Box className={classes.showsListBox}>
          {!loading &&
            !error &&
            upcomingShows?.map((show) => (
              <Box key={show.id} pb="0.5em" className={classes.singleShowRowWrapper}>
                <Flex className={classes.showContainer}>
                  <Title order={2} color="white">
                    {formatDatetime(show.datetime).split(',')[0].slice(0, 3)}
                  </Title>
                  <Title order={3} color="white">
                    {formatDateTimeShort(show.datetime)}
                  </Title>

                  <Box className={classes.showInnerDetailsWrapper}>
                    <Title order={4}>{show.venue.name}</Title>
                    <Box>
                      <Text component="h5">
                        {show.venue.city}, {show.venue.region}
                      </Text>
                      <Text component="h6">{show.venue.street_address}</Text>
                    </Box>
                    <Text component="p">{formatDatetime(show.datetime)}</Text>
                  </Box>
                </Flex>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}
