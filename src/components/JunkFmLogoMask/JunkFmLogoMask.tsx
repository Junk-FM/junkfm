import { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import { useJunkFmLogoMaskStyles, colors } from '@junkfm';
import sampleVideo from './clips/junk-sample-clip-fishin.mp4';

const loadAnimationDelay = 400;
const loadAnimationDuration = 800; // passed to stylesheet
const fadeInVideoDelay = 1500;
const fadeInVideoDuration = 800; // passed to stylesheet

export function JunkFmLogoMask() {
  const [maskColorMove, setMaskColorMove] = useState(false);
  const [fadeInVideo, setFadeInVideo] = useState(false);
  const { classes, cx } = useJunkFmLogoMaskStyles({ loadAnimationDuration, fadeInVideoDuration });

  useEffect(() => {
    // First Timeout: fire slide in animation
    const firstTimeout = setTimeout(() => {
      setMaskColorMove(true);

      // Second Timeout: fire video fade animation and remove colors
      const secondTimeout = setTimeout(() => {
        setFadeInVideo(true);
      }, fadeInVideoDelay);

      return () => clearTimeout(secondTimeout);
    }, loadAnimationDelay);

    return () => clearTimeout(firstTimeout);
  }, []);

  return (
    <Box className={classes.junkFmLogoMaskWrapper}>
      <video
        className={cx(classes.video, fadeInVideo && 'fadeInVideo')}
        autoPlay
        loop
        muted
        playsInline
        src={sampleVideo}
      />

      <svg
        className={classes.junkFmLogoMaskSvg}
        id="junk-fm-logo-mask"
        width="100%"
        height="100%"
        viewBox="0 0 2743 1434"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className={cx(
            classes.junkLogoMaskBacking,
            classes.lettersMaskBacking,
            maskColorMove && 'slideIn',
            fadeInVideo && 'fadeOut'
          )}
          id="junk-white"
          y="321"
          width="101%"
          height="54%"
          fill={colors.red}
        />
        <rect
          className={cx(
            classes.junkLogoMaskBacking,
            classes.bottomLineMaskBacking,
            maskColorMove && 'slideIn',
            fadeInVideo && 'fadeOut'
          )}
          id="bottom-line-white"
          y="1123"
          width="101%"
          height="10%"
          fill={colors.mustard}
        />
        <rect
          className={cx(
            classes.junkLogoMaskBacking,
            classes.topLineMaskBacking,
            maskColorMove && 'slideIn',
            fadeInVideo && 'fadeOut'
          )}
          id="top-line-white"
          y="142"
          width="101%"
          height="10%"
          fill={colors.mustard}
        />
        <defs>
          <mask id="junkfm-mask">
            <rect width="100%" height="100%" fill={colors.white} />
            <g id="junk-mask-group" clipPath="url(#clip0_888_196)">
              <rect id="bottom-line" y="1144" width="2743" height="115" fill={colors.black} />
              <path
                id="m-letter"
                d="M2210.56 1078.95L2223.21 344.322H2396.62L2477.01 771.493L2563.71 344.322H2730.8L2743.45 1078.95H2628.74L2615.19 590.104L2530.29 1078.95H2428.23L2337.91 586.477L2327.08 1078.95H2210.56Z"
                fill={colors.black}
              />
              <path
                id="f-letter"
                d="M1866.82 1078.95V344.322H2182.93V454.063H2028.49V639.079H2163.06V752.448H2028.49V1078.95H1866.82Z"
                fill={colors.black}
              />
              <path
                id="k-letter"
                d="M1257.54 1078.95V344.322H1419.21V644.521L1542.05 344.322H1700.11L1564.63 676.264L1706.43 1078.95H1542.05L1436.37 754.261L1419.21 783.284V1078.95H1257.54Z"
                fill={colors.black}
              />
              <path
                id="n-letter"
                d="M796.426 1078.95V344.322H910.228L1060.16 698.031V344.322H1193.83V1078.95H1084.54L934.614 698.031V1078.95H796.426Z"
                fill={colors.black}
              />
              <path
                id="u-letter"
                d="M521.952 1089.83C465.954 1089.83 421.998 1080.76 390.086 1062.62C358.775 1043.88 336.797 1016.97 324.153 981.906C311.508 946.233 305.186 902.699 305.186 851.306V344.322H465.051V875.793C465.051 890.909 466.255 906.025 468.663 921.141C471.072 936.257 476.19 948.651 484.018 958.326C492.447 968 505.092 972.837 521.952 972.837C539.413 972.837 552.058 968 559.886 958.326C567.713 948.651 572.531 936.257 574.337 921.141C576.745 906.025 577.95 890.909 577.95 875.793V344.322H738.718V851.306C738.718 902.699 732.094 946.233 718.848 981.906C706.203 1016.97 684.225 1043.88 652.915 1062.62C621.604 1080.76 577.95 1089.83 521.952 1089.83Z"
                fill={colors.black}
              />
              <path
                id="j-letter"
                d="M-0.210938 1089.74V977.616C15.8728 977.616 29.5738 976.719 40.892 974.925C52.2103 973.131 61.1457 969.842 67.6983 965.058C74.251 959.676 79.0165 952.202 81.995 942.634C84.9735 932.468 86.4627 919.612 86.4627 904.064V344.355H246.407V911.24C246.407 950.707 241.343 983.894 231.217 1010.8C221.686 1037.11 204.708 1056.85 180.285 1070C155.861 1083.16 121.609 1089.74 77.5273 1089.74H-0.210938Z"
                fill={colors.black}
              />
              <rect id="top-line" y="162" width="2743" height="116" fill={colors.black} />
            </g>
          </mask>
        </defs>
        <rect
          className={classes.crucialMaskFill}
          width="100%"
          height="100%"
          mask="url(#junkfm-mask)"
        />
        <defs>
          <clipPath id="clip0_888_196">
            <rect width="2743" height="1434" fill={colors.white} />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
}

// <svg
//   width="2743"
//   height="1292"
//   viewBox="0 0 2743 1292"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <g id="Frame 1" clipPath="url(#clip0_888_196)">
//     <rect id="bottom-line-white" y="981" width="2743" height="157" fill="white" />
//     <rect id="top-line-white" width="2743" height="156" fill="white" />
//     <rect id="junk-white" y="179" width="2743" height="781" fill="white" />
//     <rect id="bottom-line" y="1002" width="2743" height="115" fill="black" />
//     <path
//       id="m-letter"
//       d="M2210.56 936.948L2223.21 202.322H2396.62L2477.01 629.493L2563.71 202.322H2730.8L2743.45 936.948H2628.74L2615.19 448.104L2530.29 936.948H2428.23L2337.91 444.477L2327.08 936.948H2210.56Z"
//       fill="black"
//     />
//     <path
//       id="f-letter"
//       d="M1866.82 936.948V202.322H2182.93V312.063H2028.49V497.079H2163.06V610.448H2028.49V936.948H1866.82Z"
//       fill="black"
//     />
//     <path
//       id="k-letter"
//       d="M1257.54 936.948V202.322H1419.21V502.521L1542.05 202.322H1700.11L1564.63 534.264L1706.43 936.948H1542.05L1436.37 612.261L1419.21 641.284V936.948H1257.54Z"
//       fill="black"
//     />
//     <path
//       id="n-letter"
//       d="M796.426 936.948V202.322H910.228L1060.16 556.031V202.322H1193.83V936.948H1084.54L934.614 556.031V936.948H796.426Z"
//       fill="black"
//     />
//     <path
//       id="u-letter"
//       d="M521.952 947.833C465.954 947.833 421.998 938.763 390.086 920.624C358.775 901.881 336.797 874.975 324.153 839.906C311.508 804.233 305.186 760.699 305.186 709.306V202.322H465.051V733.793C465.051 748.909 466.255 764.025 468.663 779.141C471.072 794.257 476.19 806.651 484.018 816.326C492.447 826 505.092 830.837 521.952 830.837C539.413 830.837 552.058 826 559.886 816.326C567.713 806.651 572.531 794.257 574.337 779.141C576.745 764.025 577.95 748.909 577.95 733.793V202.322H738.718V709.306C738.718 760.699 732.094 804.233 718.848 839.906C706.203 874.975 684.225 901.881 652.915 920.624C621.604 938.763 577.95 947.833 521.952 947.833Z"
//       fill="black"
//     />
//     <path
//       id="j-letter"
//       d="M-0.210938 947.737V835.616C15.8728 835.616 29.5738 834.719 40.892 832.925C52.2103 831.131 61.1457 827.842 67.6983 823.058C74.251 817.676 79.0165 810.202 81.995 800.634C84.9735 790.468 86.4627 777.612 86.4627 762.064V202.355H246.407V769.24C246.407 808.707 241.343 841.894 231.217 868.804C221.686 895.115 204.708 914.848 180.285 928.003C155.861 941.159 121.609 947.737 77.5273 947.737H-0.210938Z"
//       fill="black"
//     />
//     <rect id="top-line" y="20" width="2743" height="116" fill="black" />
//   </g>
//   <defs>
//     <clipPath id="clip0_888_196">
//       <rect width="2743" height="1292" fill="white" />
//     </clipPath>
//   </defs>
// </svg>;
