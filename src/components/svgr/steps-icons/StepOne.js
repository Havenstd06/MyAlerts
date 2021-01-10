import * as React from "react";

function Svg1(props) {
  return (
    <svg
        width="90"
        height="174"
        viewBox="0 0 90 174"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <g filter="url(#1_svg__filter0_d)">
        <path
          d="M62.296 6c-7.5 0-10.95.575-15.65 2.797L6.863 26.322C.886 28.95-1.253 33.566.705 39.803l2.165 5.993.061.197c2.047 6.459 7.16 8.869 13.386 6.11l21.787-9.08v102.528c0 6.731 3.761 10.449 10.57 10.449h12.54C68.073 156 72 152.234 72 145.551V16.449C72 9.824 68.562 6.075 62.48 6L62.297 6z"
          fill="url(#1_svg__paint0_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="1_svg__paint0_linear"
          x1={61.931}
          y1={-50.846}
          x2={-30.316}
          y2={0.369}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9CAFFE" />
          <stop offset={1} stopColor="#8C84FA" />
        </linearGradient>
        <filter
          id="1_svg__filter0_d"
          x={-6}
          y={0}
          width={96}
          height={174}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={6} dy={6} />
          <feGaussianBlur stdDeviation={6} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default Svg1;
