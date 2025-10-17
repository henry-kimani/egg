/* Render the profile icon of the user that contains the profile photo in various
 * shapes */

import eggprofilesvg from "@assets/eggprofile.svg";

interface Props {
  shape: "egg" | "circle";
  size: "small" | "large";
  photo: string | null;
}

export default function ProfileIcon ({ shape, size, photo: photoURL }: Props) {

  const profileSize = size === "small" ? 70 : 200;

  return shape === "egg" ? (
    <div>{ photoURL ? 
      <svg
        width={profileSize+"px"}
        height={profileSize+"px"}
        viewBox="0 0 210 297"
        version="1.1"
        id="svg1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs1">
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2">
            <path
              d="M 103.36749,1.2370634 C 22.46386,0.70848017 -32.368824,148.25663 -11.771804,215.01953 c 8.8321736,28.6285 51.863327,82.36813 116.067824,81.70911 68.31514,-0.70118 107.69896,-53.24138 116.99638,-82.40867 C 242.87187,146.62217 184.2711,1.7656479 103.36749,1.2370634 Z"
              id="path3"
              style="stroke-width:1.78496" 
            />
          </clipPath>
        </defs>
        <image
          id="image1"
          x="-42"
          y="0.45322046"
          preserveAspectRatio="xMidYMid slice"
          href={photoURL}
          width="297.5173"
          height="297.52036"
          clip-path="url(#clipPath2)"
          transform="matrix(0.81150328,0,0,0.81150328,15.573648,21.638022)" 
        />
      </svg>
    : 
      <div class="grid place-items-center">
        {/* Image when not signed in */}
        <img 
          src={eggprofilesvg.src} 
          alt={"Guest Profile Icon"}
          width={profileSize}
        />
      </div> 
    }</div>
  ) : (
  <div>{ size === "small" ? 
    <div
      class={`grid place-items-center w-10 h-10 
        bg-(--sl-color-gray-6) rounded-full border border-(--sl-color-gray-5)
        dark:bg-(--sl-color-black)
      `}
    >
      {photoURL ? photoURL : "G"}
    </div> 
  :
    <div
      class={`grid place-items-center w-20 h-20
        bg-(--sl-color-gray-6) rounded-full border border-(--sl-color-gray-5)
        dark:bg-(--sl-color-black)
      `}
    >
      {photoURL ? photoURL : "G"}
    </div> }
  </div> 
  );
}

