import { Box, Grid, Image, Text, Anchor } from '@mantine/core';
import { useFooterStyles, JunkFmLogo, colors, useGlobalStyles, menuItems } from '@junkfm';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandTiktok,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import timeGif from '../../assets/gifs/time-animated.gif';

type FooterProps = {
  activeRoute: string;
};

export function Footer(props: FooterProps) {
  const { activeRoute } = props;
  const { classes, cx } = useFooterStyles();
  const { classes: globalClasses } = useGlobalStyles();

  return (
    <Box component="footer" id="footer" className={cx(classes.footerOutermostWrapper)}>
      <Grid grow className={cx(globalClasses.responsiveRow, classes.footerInnerWrapper)}>
        <Grid.Col span={12} order={1} xs={4} sm={12} className={classes.footerLinksWrapper}>
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className={cx(classes.footerMenuItem, activeRoute === item.link && 'activePage')}
            >
              <Text component="span">{item.title}</Text>
            </Link>
          ))}
        </Grid.Col>
        <Grid.Col span={12} order={2} xs={6} sm={2.5} md={3} className={classes.footerLeft}>
          <Link to="/" className={cx(classes.footerLogoLink, activeRoute === '/' && 'activePage')}>
            <JunkFmLogo width="100%" barColor={colors.red} textColor={colors.gray} />
          </Link>
        </Grid.Col>
        <Grid.Col
          span={12}
          xs={12}
          order={3}
          orderSm={2}
          sm={6}
          md={6}
          className={classes.footerMiddle}
        >
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
        </Grid.Col>
        <Grid.Col
          span={12}
          order={2}
          orderSm={3}
          xs={6}
          sm={2.5}
          md={3}
          className={classes.footerRight}
        >
          <Anchor href="https://timemusicagency.com" target="_blank" rel="noreferrer">
            <Image src={timeGif} alt="Time Music Agency animated GIF" width="100%" />
          </Anchor>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
