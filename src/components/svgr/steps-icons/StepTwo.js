import * as React from "react";

function SvgStepsTwo(props) {
  return (
    <svg
        width="140"
        height="174"
        viewBox="0 0 140 174"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <g filter="url(#StepsTwo_svg__filter0_d)">
        <path
          d="M60.967 6C44.457 6 31.447 10.017 22 17.404 13.848 23.78 8.596 32.517 6.366 42.457l-.068.308c-1.469 6.457 2.604 10.749 9.725 10.749h11.66c3.018 0 5.17-.749 6.912-2.339 1.482-1.352 2.617-3.173 4.282-6.606 3.216-7.121 10.127-11.258 21.454-11.258 13.76 0 23.131 7.702 23.131 19.805 0 5.77-1.896 11.14-5.638 16.546-3.21 4.637-7.666 9.213-14.225 14.88l-51.307 46.09c-4.228 3.777-5.758 7.784-4.966 13.021l.454 2.929C8.853 152.757 12.73 156 18.99 156h92.645c6.677 0 10.365-3.661 10.365-10.288v-6.103c0-6.676-3.736-10.499-10.365-10.499H86.658c-5.733.012-23.51.594-30.191 1.225l-.233.022-.144-.572 31.923-26.861c8.136-6.871 14.485-13.707 19.145-21.088 5.541-8.778 8.482-18.068 8.482-28.088C115.64 24.72 93.89 6 60.967 6z"
          fill="url(#StepsTwo_svg__paint0_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="StepsTwo_svg__paint0_linear"
          x1={105.777}
          y1={-50.846}
          x2={-2.235}
          y2={45.767}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9CAFFE" />
          <stop offset={1} stopColor="#8C84FA" />
        </linearGradient>
        <filter
          id="StepsTwo_svg__filter0_d"
          x={0}
          y={0}
          width={140}
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

export default SvgStepsTwo;
