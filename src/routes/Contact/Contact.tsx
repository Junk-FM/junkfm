import { Box, Title, Image } from '@mantine/core';
import { useContactStyles, useGlobalStyles } from '@junkfm';
import timeGif from '../../assets/gifs/time-animated.gif';

export function Contact() {
  const { classes, cx } = useContactStyles();
  const { classes: globalClasses } = useGlobalStyles();

  return (
    <Box
      className={cx(
        globalClasses.responsiveRow,
        globalClasses.routeTopMenuPadding,
        classes.contactOutermostWrapper
      )}
      id="contact"
      pb="min(5rem, calc(3vh + 3vw))"
    >
      <Title order={1}>HIT US UP</Title>
      <Box className={classes.formWrapper}>
        <Title order={5}>form goes in here???</Title>
      </Box>
      <Image
        src={timeGif}
        alt="animated gif of Time Music Agency logo"
        height="auto"
        width="400px"
        mx="auto"
        pt="3em"
      />
    </Box>
  );
}
