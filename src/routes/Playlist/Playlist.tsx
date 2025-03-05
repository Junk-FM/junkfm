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
        <Grid className={classes.playlistGridWrapper} id="playlist-wrapper">
          {playlistData.map((section, index) => (
            <Grid.Col
              className={cx(classes.playlistGridCol, `col${index}`)}
              span={11}
              xs={4}
              sm={4}
              md={4}
              lg={3.75}
              key={section.decade}
              
            >
              <Title className={`sidewaysText${index}`} order={2}>{section.sidewaysText}</Title>

              {section.artists.map((artist) => (
                <Text component="p" key={artist}
                  className={globalClasses.textContrastShadowHeavy}
                >
                  {artist}
                </Text>
              ))}
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
