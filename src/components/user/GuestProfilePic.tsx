/* Return the UI for the svg for the guest user profile */

interface Props {
  profileSize: number;
};

export default function GuestProfilePic({ profileSize }: Props) {
  return (
    <svg
      width={profileSize}
      height={profileSize}
      viewBox="0 0 210 297"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg">
      <defs
        id="defs1">
        <linearGradient
          id="linearGradient15">
          <stop
            style="stop-color:#912e00;stop-opacity:1;"
            offset="0"
            id="stop14" />
          <stop
            style="stop-color:#ff7811;stop-opacity:1;"
            offset="1"
            id="stop15" />
        </linearGradient>
        <linearGradient
          id="linearGradient4">
          <stop
            style="stop-color:#712300;stop-opacity:1;"
            offset="0"
            id="stop4" />
          <stop
            style="stop-color:#f36600;stop-opacity:1;"
            offset="1"
            id="stop5" />
        </linearGradient>
        <linearGradient
          id="linearGradient11"
          gradientUnits="userSpaceOnUse"
          x1="98.992416"
          y1="252.94485"
          x2="100.94727"
          y2="44.87178"
          gradientTransform="translate(0.42919422,-0.21459537)" />
        <clipPath
          clipPathUnits="userSpaceOnUse"
          id="clipPath11">
          <path
            d="M 99.666743,13.726584 C 29.212309,13.26627 -18.5384,141.75767 -0.6016106,199.89775 7.089833,224.82871 44.563253,271.62754 100.47534,271.05363 c 59.49184,-0.6106 93.789,-46.36493 101.8856,-71.76509 C 221.15329,140.33432 170.12117,14.186898 99.666743,13.726584 Z"
            id="path12"
            style="fill:url(#linearGradient12);fill-opacity:1;stroke:none;stroke-width:1.55442;stroke-opacity:1" />
        </clipPath>
        <linearGradient
          id="linearGradient12"
          gradientUnits="userSpaceOnUse"
          x1="100.94726"
          y1="247.73195"
          x2="100.94727"
          y2="37.052425" />
        <linearGradient
          id="linearGradient14"
          x1="99.182175"
          y1="148.73299"
          x2="98.530563"
          y2="64.343117"
          gradientUnits="userSpaceOnUse" />
        <linearGradient
          id="linearGradient17"
          x1="97.489143"
          y1="282.0513"
          x2="97.918411"
          y2="170.44199"
          gradientUnits="userSpaceOnUse" />
      </defs>
      <g
        id="g12"
        transform="matrix(0.93148479,0,0,0.93148479,6.5955071,10.367889)"
        style="display:inline">
        <path
          d="M 100.09593,13.511993 C 29.641493,13.051673 -18.109207,141.54307 -0.17242578,199.68315 7.5190243,224.61411 44.992443,271.41293 100.90453,270.83903 c 59.49184,-0.61061 93.789,-46.36493 101.8856,-71.76509 C 221.58248,140.11972 170.55036,13.972303 100.09593,13.511993 Z"
          id="path11"
          style="fill:url(#linearGradient11);fill-opacity:1;stroke:none;stroke-width:1.55442;stroke-opacity:1" />
        <g
          id="g5"
          clip-path="url(#clipPath11)">
          <ellipse
            style="fill:url(#linearGradient14);fill-opacity:1;stroke-width:0.262349"
            id="path2"
            cx="98.991325"
            cy="110.73121"
            rx="46.3526"
            ry="49.786125" />
          <ellipse
            style="fill:url(#linearGradient17);fill-opacity:1;stroke-width:0.262349"
            id="path4"
            cx="97.703758"
            cy="225.32515"
            rx="86.267342"
            ry="56.223988" />
        </g>
      </g>
    </svg>
  );
}
