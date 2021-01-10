import * as React from "react";

function SvgStepsThree(props) {
  return (
    <svg
        width="134"
        height="150"
        viewBox="0 0 134 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <g filter="url(#steps-three_svg__filter0_d)">
        <path
          d="M101.137 0H14.365C8.335 0 4.82 3.422 4.82 9.236v8.387c.07 5.885 3.548 9.267 9.546 9.267h49.902L29.979 56.656c-4.528 3.84-5.197 8.364-1.946 13.083l2.347 2.956c3.073 4.258 6.806 5.23 12.534 3.643 4.073-1.465 8.442-2.098 12.71-2.098 15.718 0 27.246 9.383 27.246 22.962 0 6.587-2.856 12.879-8.15 17.511-5.847 5.114-14.32 7.976-24.838 7.976-11.146 0-19.038-1.809-29.259-7.343-5.205-2.79-9.5-2.083-12.898 2.234l-5.206 6.655c-3.792 4.855-3.32 9.767 1.53 13.105C16.852 145.575 33.692 150 52.22 150c19.918 0 36.155-5.349 47.392-15.12C110.29 125.597 116 112.658 116 98.044c0-11.905-4.146-21.96-11.699-29.49-6.98-6.958-16.64-11.476-27.383-12.995l-.285-.063c-2.295-.499-4.847-.742-7.733-.776l-.222-.002 36.41-31.03c3.721-3.248 5.382-6.687 5.382-11.295V9.236c0-5.785-3.487-9.236-9.333-9.236z"
          fill="url(#steps-three_svg__paint0_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="steps-three_svg__paint0_linear"
          x1={99.777}
          y1={-56.846}
          x2={-8.235}
          y2={39.767}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9CAFFE" />
          <stop offset={1} stopColor="#8C84FA" />
        </linearGradient>
        <filter
          id="steps-three_svg__filter0_d"
          x={-6}
          y={-6}
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

export default SvgStepsThree;
