import { Box, Title, Text } from '@mantine/core';
import { useHomeStyles, JunkFmLogoMask, CommonButton} from '@junkfm';

export function Home() {
  const { classes, cx } = useHomeStyles();
  // const { classes: globalClasses } = useGlobalStyles();

  return (
    <Box className={cx(classes.homeWrapper)}>
      <JunkFmLogoMask />
      <Title order={5}>Destroying your favorite songs since 2010</Title>
      <Text component="p">This is a paragraph. It's not very interesting.</Text>
      <CommonButton />
    </Box>
  );
}
