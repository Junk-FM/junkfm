import { usePlaylistStyles, useGlobalStyles, PageHelmet } from '@junkfm';
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
        <Grid.Col span={3.5}>
          <Title order={3} underline>
            &lt;=80s
          </Title>
          <Text>SONGS</Text>
          <Text>SONGS</Text>
          <Text>SONGS</Text>
          <Text>SONGS</Text>
          <Text>SONGS</Text>
        </Grid.Col>
        <Grid.Col span={3.5}>
          <Title order={3} underline>
            ==90s
          </Title>
          <Text>SONGS</Text>
          <Text>SONGS</Text>
          <Text>SONGS</Text>
          <Text>SONGS</Text>
          <Text>SONGS</Text>
        </Grid.Col>
        <Grid.Col span={3.5}>
          <Title order={3} underline>
            00s=&gt;
          </Title>
          <Text>SONGS</Text>
          <Text>SONGS</Text>
          <Text>SONGS</Text>
          <Text>SONGS</Text>
          <Text>SONGS</Text>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
