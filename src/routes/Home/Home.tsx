import { Box, Title } from '@mantine/core';
import { useHomeStyles, JunkFmLogoMask, CommonButton, colors } from '@junkfm';

export function Home() {
  const { classes, cx } = useHomeStyles();
  // const { classes: globalClasses } = useGlobalStyles();

  return (
    <Box className={cx(classes.homeWrapper)} id="home">
      <JunkFmLogoMask />
      <Box className={classes.homeContentWrapper}>
        <Title order={5}>Destroying your favorite songs since 2010</Title>
        {/* <Text component="p">This is a paragraph. It's not very interesting.</Text> */}
        <CommonButton
          buttonText="BOOK US"
          buttonSize="lg"
          buttonColor={colors.yellow}
          buttonHoverColor={colors.mustard}
          buttonTextColor={colors.black}
          buttonTextHoverColor={colors.trueBlack} 
        />
      </Box>
    </Box>
  );
}


