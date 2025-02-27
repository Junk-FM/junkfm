import { Stack, Title, Text } from '@mantine/core';
import { useHomeStyles } from '.';

export function Home() {
  const { classes } = useHomeStyles();

  return (
    <Stack className={classes.homeStack}>
      <Title order={1}>Header Text</Title>
      <Title order={3}>This is it. The site is done.</Title>
      <Text component="p">This is a paragraph. It's not very interesting.</Text>
    </Stack>
  );
}
