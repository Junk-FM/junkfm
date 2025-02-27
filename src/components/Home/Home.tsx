import { Stack } from '@mantine/core';
import { useHomeStyles } from '.';

export function Home() {
  const { classes } = useHomeStyles();

  return (
    <Stack className={classes.homeStack}>
      <h1>Header Text</h1>
      <h2>This is it. The site is done.</h2>
      <h3>JK. Coming soon.</h3>
      <p>This is a paragraph. It's not very interesting.</p>
    </Stack>
  );
}
