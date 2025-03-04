import { usePlaylistStyles, useGlobalStyles, PageHelmet, playlistData } from '@junkfm';
import { Box, Grid, Text, Title } from '@mantine/core';

export function Playlist() {
  const { classes, cx } = usePlaylistStyles();
  const { classes: globalClasses } = useGlobalStyles();

  return (
    <Box
      className={cx(
        globalClasses.responsiveRow,
        globalClasses.routeTopMenuPadding,
        classes.playlistOutermost
      )}
      id="playlist"
    >
      <PageHelmet title="Playlist" />
      <Title order={1}>Our Playlist</Title>
      <Text component="h5">...which is frequently updated</Text>
      <Grid className={classes.playlistGridWrapper}>
        {playlistData.map((section) => (
          <Grid.Col span={12} xs={4} sm={4} md={3.5} lg={3.25} key={section.decade}>
            <Title order={4}>{section.decade}</Title>
            {section.artists.map((artist) => (
              <Text component="p" key={artist}>
                {artist}
              </Text>
            ))}
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
