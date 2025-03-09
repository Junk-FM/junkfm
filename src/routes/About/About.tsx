import { Box, Flex, Title } from '@mantine/core';
import { CommonButton, useGlobalStyles, colors } from '@junkfm';
import { useAboutStyles } from '.';

export function About() {
  const { classes, cx } = useAboutStyles();
  const { classes: globalClasses } = useGlobalStyles();

  return (
    <Box
      className={cx(
        globalClasses.responsiveRow,
        globalClasses.routeTopMenuPadding,
        classes.aboutOutermostWrapper
      )}
      id="about"
    >
      <Title order={1}>About Us</Title>
      <Title order={5}>Just how much do you want to know?</Title>
      <Flex gap="min(3vw, 1rem)" align="center" justify="center">
        <CommonButton
          buttonColor={colors.darkBlue}
          buttonTextColor={colors.almostWhite}
          buttonSize="lg"
          buttonText="Meat N' Taters"
          onClick = {() => console.log('Launches only the basics - effects? Slide down?')}
          />
        <CommonButton
          buttonColor={colors.mustard}
          buttonTextColor={colors.trueBlack}
          buttonSize="lg"
          buttonText="The Whole Story"
          onClick = {() => console.log('Launches full version - slide down? Effects')}
        />
      </Flex>
    </Box>
  );
}
