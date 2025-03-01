import { Box } from '@mantine/core';
import { useJunkFmLogoMaskStyles, colors } from '@junkfm';
import sampleVideo from './clips/junk-sample-clip-fishin.mp4';

export function JunkFmLogoMask() {
  const { classes } = useJunkFmLogoMaskStyles();

  return (
    <Box className={classes.junkFmLogoMaskWrapper}>
      <video className={classes.video} autoPlay loop muted playsInline src={sampleVideo} />
      <svg
        id="hero-mask-hugged"
        className={classes.junkFmLogoMaskSvg}
        width="2763"
        height="1109"
        viewBox="0 0 2763 1109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="junkfm-mask">
            <rect width="100%" height="100%" fill="white" />

            <g id="hero-mask-hugged-inner-group">
              <rect id="bottom-line" x="2" y="987" width="2760" height="122" fill={colors.black} />
              <g id="letters">
                <g id="m-letter">
                  <path
                    d="M2220.2 921.665L2232.84 190.594H2406.13L2486.45 615.698L2573.1 190.594H2740.07L2752.71 921.665H2638.08L2624.55 435.187L2539.7 921.665H2437.72L2347.46 431.576L2336.63 921.665H2220.2Z"
                    fill={colors.black}
                  />
                  <path
                    d="M2220.2 921.665L2232.84 190.594H2406.13L2486.45 615.698L2573.1 190.594H2740.07L2752.71 921.665H2638.08L2624.55 435.187L2539.7 921.665H2437.72L2347.46 431.576L2336.63 921.665H2220.2Z"
                    stroke={colors.black}
                    strokeWidth="20"
                    mask="url(#path-2-outside-1_886_148)"
                  />
                </g>
                <g id="f-letter">
                  <path d="M1876.69 921.665V190.594H2192.59V299.803H2038.25V483.925H2172.73V596.745H2038.25V921.665H1876.69Z" />

                  <path
                    d="M1876.69 921.665V190.594H2192.59V299.803H2038.25V483.925H2172.73V596.745H2038.25V921.665H1876.69Z"
                    fill={colors.black}
                  />
                  <path
                    d="M1876.69 921.665V190.594H2192.59V299.803H2038.25V483.925H2172.73V596.745H2038.25V921.665H1876.69Z"
                    stroke={colors.black}
                    strokeWidth="20"
                    mask="url(#path-3-outside-2_886_148)"
                  />
                </g>
                <g id="k-letter">
                  <path d="M1267.85 921.665V190.594H1429.41V489.34L1552.15 190.594H1710.1L1574.72 520.93L1716.42 921.665H1552.15L1446.55 598.55L1429.41 627.431V921.665H1267.85Z" />

                  <path
                    d="M1267.85 921.665V190.594H1429.41V489.34L1552.15 190.594H1710.1L1574.72 520.93L1716.42 921.665H1552.15L1446.55 598.55L1429.41 627.431V921.665H1267.85Z"
                    fill={colors.black}
                  />
                  <path
                    d="M1267.85 921.665V190.594H1429.41V489.34L1552.15 190.594H1710.1L1574.72 520.93L1716.42 921.665H1552.15L1446.55 598.55L1429.41 627.431V921.665H1267.85Z"
                    stroke={colors.black}
                    strokeWidth="20"
                    mask="url(#path-4-outside-3_886_148)"
                  />
                </g>
                <g id="n-letter">
                  <path d="M807.053 921.665V190.594H920.775L1070.6 542.591V190.594H1204.18V921.665H1094.97L945.144 542.591V921.665H807.053Z" />

                  <path
                    d="M807.053 921.665V190.594H920.775L1070.6 542.591V190.594H1204.18V921.665H1094.97L945.144 542.591V921.665H807.053Z"
                    fill={colors.black}
                  />
                  <path
                    d="M807.053 921.665V190.594H920.775L1070.6 542.591V190.594H1204.18V921.665H1094.97L945.144 542.591V921.665H807.053Z"
                    stroke={colors.black}
                    strokeWidth="20"
                    mask="url(#path-5-outside-4_886_148)"
                  />
                </g>
                <g id="u-letter">
                  <path d="M532.771 932.498C476.812 932.498 432.887 923.472 400.997 905.421C369.708 886.768 347.746 859.992 335.11 825.093C322.474 789.592 316.156 746.269 316.156 695.124V190.594H475.909V719.494C475.909 734.536 477.113 749.579 479.52 764.622C481.926 779.664 487.041 791.999 494.863 801.626C503.287 811.254 515.923 816.067 532.771 816.067C550.22 816.067 562.856 811.254 570.678 801.626C578.5 791.999 583.314 779.664 585.119 764.622C587.526 749.579 588.729 734.536 588.729 719.494V190.594H749.385V695.124C749.385 746.269 742.766 789.592 729.529 825.093C716.893 859.992 694.93 886.768 663.642 905.421C632.353 923.472 588.729 932.498 532.771 932.498Z" />

                  <path
                    d="M532.771 932.498C476.812 932.498 432.887 923.472 400.997 905.421C369.708 886.768 347.746 859.992 335.11 825.093C322.474 789.592 316.156 746.269 316.156 695.124V190.594H475.909V719.494C475.909 734.536 477.113 749.579 479.52 764.622C481.926 779.664 487.041 791.999 494.863 801.626C503.287 811.254 515.923 816.067 532.771 816.067C550.22 816.067 562.856 811.254 570.678 801.626C578.5 791.999 583.314 779.664 585.119 764.622C587.526 749.579 588.729 734.536 588.729 719.494V190.594H749.385V695.124C749.385 746.269 742.766 789.592 729.529 825.093C716.893 859.992 694.93 886.768 663.642 905.421C632.353 923.472 588.729 932.498 532.771 932.498Z"
                    fill={colors.black}
                  />
                  <path
                    d="M532.771 932.498C476.812 932.498 432.887 923.472 400.997 905.421C369.708 886.768 347.746 859.992 335.11 825.093C322.474 789.592 316.156 746.269 316.156 695.124V190.594H475.909V719.494C475.909 734.536 477.113 749.579 479.52 764.622C481.926 779.664 487.041 791.999 494.863 801.626C503.287 811.254 515.923 816.067 532.771 816.067C550.22 816.067 562.856 811.254 570.678 801.626C578.5 791.999 583.314 779.664 585.119 764.622C587.526 749.579 588.729 734.536 588.729 719.494V190.594H749.385V695.124C749.385 746.269 742.766 789.592 729.529 825.093C716.893 859.992 694.93 886.768 663.642 905.421C632.353 923.472 588.729 932.498 532.771 932.498Z"
                    stroke={colors.black}
                    strokeWidth="20"
                    mask="url(#path-6-outside-5_886_148)"
                  />
                </g>
                <g id="j-letter">
                  <path d="M10.9727 932.402V820.823C27.0452 820.823 40.7366 819.931 52.0468 818.145C63.3571 816.36 72.2863 813.087 78.8344 808.327C85.3824 802.971 90.1446 795.532 93.121 786.011C96.0974 775.894 97.5856 763.1 97.5856 747.628V190.627H257.418V754.769C257.418 794.044 252.358 827.072 242.238 853.851C232.714 880.035 215.748 899.672 191.342 912.764C166.936 925.856 132.707 932.402 88.6564 932.402H10.9727Z" />

                  <path
                    d="M10.9727 932.402V820.823C27.0452 820.823 40.7366 819.931 52.0468 818.145C63.3571 816.36 72.2863 813.087 78.8344 808.327C85.3824 802.971 90.1446 795.532 93.121 786.011C96.0974 775.894 97.5856 763.1 97.5856 747.628V190.627H257.418V754.769C257.418 794.044 252.358 827.072 242.238 853.851C232.714 880.035 215.748 899.672 191.342 912.764C166.936 925.856 132.707 932.402 88.6564 932.402H10.9727Z"
                    fill={colors.black}
                  />
                  <path
                    d="M10.9727 932.402V820.823C27.0452 820.823 40.7366 819.931 52.0468 818.145C63.3571 816.36 72.2863 813.087 78.8344 808.327C85.3824 802.971 90.1446 795.532 93.121 786.011C96.0974 775.894 97.5856 763.1 97.5856 747.628V190.627H257.418V754.769C257.418 794.044 252.358 827.072 242.238 853.851C232.714 880.035 215.748 899.672 191.342 912.764C166.936 925.856 132.707 932.402 88.6564 932.402H10.9727Z"
                    stroke={colors.black}
                    strokeWidth="20"
                    mask="url(#path-7-outside-6_886_148)"
                  />
                </g>
              </g>
              <rect id="top-line" x="2" width="2760" height="124" fill={colors.black} />
            </g>
          </mask>
        </defs>
        <rect width="100%" height="100%" fill={colors.black} mask="url(#junkfm-mask)" />
      </svg>
    </Box>
  );
}
