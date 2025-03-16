import { Box, Grid, Title, Text } from '@mantine/core';
import { useGlobalStyles, useMediaStyles } from '@junkfm';

export function Media() {
  const { classes, cx } = useMediaStyles();
  const { classes: globalClasses } = useGlobalStyles();

  return (
    <Box
      className={cx(
        globalClasses.responsiveRow,
        globalClasses.pageBottomPadding,
        globalClasses.routeTopMenuPadding,
        classes.mediaOutermostWrapper
      )}
      it="media"
    >
      <Box className={classes.mediaHeaderWrapper}>
        <Title order={1}>Media</Title>
        <Text component="h4">This is the tip of the iceberg.</Text>
        <Text component="p">
          We'd recommend digging yourself into a Junk FM video content rabbit hole. There is some
          STUFF out there. Have you seen our 2015 "promo idea" that didn't quite get off the ground?
          How about our pre-show routine? Grant's first White Castle experience?
        </Text>
      </Box>
      <Grid className={classes.mediaGridWrapper}>
        <Grid.Col span={11} xs={10} sm={9} className={classes.mediaRow}>
          <iframe
            className={cx(globalClasses.mediaFrame, classes.oneVideoRow)}
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/45W0Tauwccs?si=zRyJkcvx76xaPAmX"
            title="Junk FM 2024 Promo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </Grid.Col>
        <Grid.Col span={11} xs={5.85} sm={5.5} md={5} className={classes.mediaRow}>
          <iframe
            className={globalClasses.mediaFrame}
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/_9Y28PBsmF0?si=fRjOprYDGYnwaQke"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </Grid.Col>
        <Grid.Col span={11} xs={5.85} sm={5.5} md={5} className={classes.mediaRow}>
          <iframe
            className={globalClasses.mediaFrame}
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/j0OLRPCSTPQ?si=SmAH5FCNivxtuclE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
