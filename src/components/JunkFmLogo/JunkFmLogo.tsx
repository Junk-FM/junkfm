import { Stack, Title } from '@mantine/core';
import { useJunkFmLogoStyles } from '@junkfm';

export function JunkFmLogo() {

     const { classes } = useJunkFmLogoStyles();

  return (
    <Stack className={classes.junkFmLogo}>
      <Title order={1}>JUNK FM</Title>
    </Stack>
  );
}
