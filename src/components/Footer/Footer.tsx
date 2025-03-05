import { Box, Text } from '@mantine/core';
import { useFooterStyles, useIsMobile } from '@junkfm';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';

export function Footer() {
  const isMobile = useIsMobile();
  const { classes, cx } = useFooterStyles({ isMobile });

  return (
    <Box className={cx(classes.footerOutermostWrapper)}>
      <Box className={classes.footerInnerWrapper}>
        <Box className={classes.socialMediaRow}>
          <IconBrandFacebook />
          <IconBrandInstagram />
          <IconBrandTwitter />
          <IconBrandYoutube />
        </Box>
        <Text className={classes.copyright} component="h6">
          <Text component="span">Copyright &copy; 2021 Junk FM</Text>
          <Text component="span"> - </Text>
          <Text component="span">All Rights Reserved</Text>
        </Text>
      </Box>
    </Box>
  );
}
