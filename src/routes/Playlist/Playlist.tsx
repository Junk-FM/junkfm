import { usePlaylistStyles, useGlobalStyles, PageHelmet, playlistData } from '@junkfm';
import { Box, Grid, List, Text, Title } from '@mantine/core';

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
      <Box className={classes.playlistInnerWrapper}>
        <Title order={1}>STUFF WE PLAY</Title>

        <Box className={classes.playlistPrefaceWrapper}>
          <Text component="h5">
            Everyone wants to know what they're gonna hear at a Junk FM show. We'd rather surprise
            you.
          </Text>
          <Text component="p">
            Then again, even if you "know" what's coming, you'll never guess how it's gonna hit you.
            You see, even though Junk FM touches on some of your favorite songs, we might take you
            for a little ride with them. So...here are just SOME of the artists we pay tribute
            to...whose songs you'll never wanna hear the same way again.
          </Text>
        </Box>
        <Grid
          className={classes.playlistGridWrapper}
          id="playlist-wrapper"
          pb="min(7rem, calc(5vh + 4vw))"
        >
          {playlistData.map((section, index) => (
            <Grid.Col
              className={cx(classes.playlistGridCol, `col${index}`)}
              span={12}
              xs={5}
              sm={4}
              lg={3.5}
              key={section.decade}
            >
              <Title className={`sidewaysText${index}`} order={2}>
                {section.sidewaysText}
              </Title>
              <List spacing="1em" listStyleType="none">
                {section.artists.map((artist) => (
                  <List.Item key={artist} className={globalClasses.textContrastShadowHeavy}>
                    {artist}
                  </List.Item>
                ))}
              </List>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
