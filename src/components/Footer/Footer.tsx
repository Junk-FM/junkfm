import { Box, Image, Text, Anchor } from '@mantine/core';
import {
  useFooterStyles,
  useIsMobile,
  JunkFmLogo,
  colors,
  useGlobalStyles,
  menuItems,
} from '@junkfm';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandTiktok,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import timeGif from '../../assets/gifs/time-animated.gif';

export function Footer() {
  const isMobile = useIsMobile();
  const { classes, cx } = useFooterStyles({ isMobile });
  const { classes: globalClasses } = useGlobalStyles();

  return (
    <Box component="footer" id="footer" className={cx(classes.footerOutermostWrapper)}>
      <Box className={cx(globalClasses.responsiveRow, classes.footerInnerWrapper)}>
        <Box className={classes.footerLeft}>
          <Link to="/" className={classes.footerLogoLink}>
            <JunkFmLogo width="100%" barColor={colors.red} textColor={colors.gray} />
          </Link>
        </Box>
        <Box className={classes.footerMiddle}>
          <Box className={classes.footerLinksWrapper}>

            {menuItems.map((item) => (
              <Link key={item.title} to={item.link} className={classes.footerMenuItem}>
                <Text component="span">{item.title}</Text>
              </Link>
            ))}
            </Box>
          <Box className={classes.footerMiddleLower}>
            <Box className={classes.socialMediaRow}>
              <Anchor href="https://www.facebook.com/junkfm/" target="_blank" rel="noreferrer">
                <IconBrandFacebook />
              </Anchor>
              <Anchor href="https://www.instagram.com/junkfm/" target="_blank" rel="noreferrer">
                <IconBrandInstagram />
              </Anchor>
              <Anchor href="https://www.tiktok.com/@junkfm" target="_blank" rel="noreferrer">
                <IconBrandTiktok />
              </Anchor>
              <Anchor href="https://x.com/RockJunkFM" target="_blank" rel="noreferrer">
                <IconBrandTwitter />
              </Anchor>
              <Anchor href="https://www.youtube.com/@junk-fm" target="_blank" rel="noreferrer">
                <IconBrandYoutube />
              </Anchor>
            </Box>
            <Text component="h6">
              <Text component="span">Copyright &copy; 2021 Junk FM</Text>
              <Text component="span"> - </Text>
              <Text component="span">All Rights Reserved</Text>
            </Text>
          </Box>
        </Box>
        <Box className={classes.footerRight}>
          <Anchor href="https://timemusicagency.com" target="_blank" rel="noreferrer">
            <Image src={timeGif} alt="Time Music Agency animated GIF" width="100%" />
          </Anchor>
        </Box>
      </Box>
    </Box>
  );
}
