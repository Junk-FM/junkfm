import { Box, Stack, Title, Text } from '@mantine/core';
import { useHomeStyles } from '.';

export function Home() {
  const { classes } = useHomeStyles();

  return (
    <Stack className={classes.homeStack}>
      <Box className={classes.junkFmLogo}>
        <Box className={classes.logoLine} />
        <Title order={1}>JUNK FM</Title>
        <Box className={classes.logoLine} />
      </Box>
      <Title order={4}>This is it. The site is done.</Title>
      <Text component="p">This is a paragraph. It's not very interesting.</Text>
    </Stack>
  );
}
