import { Stack, Title, Text } from '@mantine/core';
import { useHomeStyles, JunkFmLogo } from '@junkfm';

export function Home() {
  const { classes } = useHomeStyles();

  return (
    <Stack className={classes.homeStack}>
      <JunkFmLogo />
      <Title order={4}>This is it. The site is done.</Title>
      <Text component="p">This is a paragraph. It's not very interesting.</Text>
    </Stack>
  );
}
