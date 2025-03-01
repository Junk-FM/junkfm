import { Box, Title } from '@mantine/core';
import { useHomeStyles, JunkFmLogoMask, CommonButton, colors } from '@junkfm';

export function Home() {
  const { classes, cx } = useHomeStyles();
  // const { classes: globalClasses } = useGlobalStyles();

  return (
    <Box className={cx(classes.homeWrapper)} id="home">
      <JunkFmLogoMask />
      <Box className={classes.homeContentWrapper}>
        <Title order={4}>Destroying your favorite songs since 2010</Title>
        <CommonButton
          buttonText="BOOK US"
          buttonSize="md"
          buttonColor={colors.lightBlue}
          buttonTextColor={colors.black}
          buttonTextHoverColor={colors.white} 
          
        />
      </Box>
    </Box>
  );
}


