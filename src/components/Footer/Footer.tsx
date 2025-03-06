import { Box, Image, Text, Anchor } from '@mantine/core';
import { useFooterStyles, useIsMobile, JunkFmLogo, colors } from '@junkfm';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import timeGif from '../../assets/gifs/time-animated.gif';

export function Footer() {
  const isMobile = useIsMobile();
  const { classes, cx } = useFooterStyles({ isMobile });

  return (
    <Box className={cx(classes.footerOutermostWrapper)}>
      <Box className={classes.footerInnerWrapper}>
        <Box className={classes.footerLeft}>
          <Box className={classes.footerLeftInner}>
            <Link to="/" className={classes.footerLogoLink}>
              <JunkFmLogo width="100%" barColor={colors.red} textColor={colors.gray} />
            </Link>
            <Box className={classes.socialMediaRow}>
              <Anchor href="https://www.facebook.com/junkfm/" target="_blank" rel="noreferrer">
                <IconBrandFacebook />
              </Anchor>
              <Anchor href="https://www.instagram.com/junkfm/" target="_blank" rel="noreferrer">
                <IconBrandInstagram />
              </Anchor>
              <Anchor href="https://x.com/RockJunkFM" target="_blank" rel="noreferrer">
                <IconBrandTwitter />
              </Anchor>
              <Anchor href="https://www.youtube.com/@junk-fm" target="_blank" rel="noreferrer">
                <IconBrandYoutube />
              </Anchor>
            </Box>
          </Box>
        </Box>
        <Box className={classes.footerMiddle}></Box>
        <Box className={classes.footerRight}>
          <Anchor href="https://timemusicagency.com" target="_blank" rel="noreferrer">
            <Image src={timeGif} alt="Time Music Agency animated GIF" width="100%" />
          </Anchor>
        </Box>
      </Box>
      <Text component="h6">
        <Text component="span">Copyright &copy; 2021 Junk FM</Text>
        <Text component="span"> - </Text>
        <Text component="span">All Rights Reserved</Text>
      </Text>
    </Box>
  );
}
