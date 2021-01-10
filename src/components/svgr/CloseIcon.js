import * as React from "react";

function SvgCloseIcon(props) {
  return (
    <svg
        width="104"
        height="104"
        viewBox="0 0 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <g filter="url(#close-icon_svg__filter0_d)">
        <circle cx={42} cy={42} r={32} fill="#151530" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.043 32.89l-5.041 5.038-5.042-5.042a2.881 2.881 0 10-4.071 4.077l5.04 5.042-5.036 5.036a2.886 2.886 0 004.079 4.081l5.03-5.045 5.037 5.04a2.883 2.883 0 104.077-4.078l-5.03-5.032 5.036-5.036a2.886 2.886 0 00-4.079-4.081z"
        fill="#fff"
      />
      <defs>
        <filter
          id="close-icon_svg__filter0_d"
          x={0}
          y={0}
          width={104}
          height={104}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={10} dy={10} />
          <feGaussianBlur stdDeviation={10} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgCloseIcon;
