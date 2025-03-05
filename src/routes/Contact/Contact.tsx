import { Box, Title, Image } from '@mantine/core';
import { useContactStyles, useGlobalStyles } from '@junkfm';

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
    >
      <Title order={1}>HIT US UP</Title>
      <Box className={classes.formWrapper}>
        <Title order={5}>form goes in here???</Title>
      </Box>
      <Image
        src="https://timemusicagency.com/wp-content/uploads/2021/07/tma-animated.gif"
        // REVISIT NO WHITE BG - FIX...recreate w/ css?
        alt="contact us"
        height="auto"
        width="400px"
        mx="auto"
        pt="3em"
      />
    </Box>
  );
}
