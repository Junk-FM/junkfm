import { Box, Title } from '@mantine/core';
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
      <Box className={classes.formWrapper}></Box>
    </Box>
  );
}
