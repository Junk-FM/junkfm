import { Stack, Title, Text } from '@mantine/core';
import { useHomeStyles, JunkFmLogo, CommonButton } from '@junkfm';

export function Home() {
  const { classes } = useHomeStyles();

  return (
    <Stack className={classes.homeStack}>
      <JunkFmLogo />
      <Title order={5}>Destroying your favorite songs since 2010</Title>
      <Text component="p">This is a paragraph. It's not very interesting.</Text>
      <CommonButton />
    </Stack>
  );
}
