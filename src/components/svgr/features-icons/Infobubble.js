import * as React from "react";

function SvgInfobubble(props) {
  return (
    <svg
        width="80px"
        height="92px"
        viewBox="0 0 80 92"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <defs>
        <filter
          x="-20.8%"
          y="-20.8%"
          width="141.7%"
          height="141.7%"
          filterUnits="objectBoundingBox"
          id="infobubble_svg__a"
        >
          <feOffset
            dx={5}
            dy={5}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation={2}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        filter="url(#infobubble_svg__a)"
        transform="translate(-7)"
        fill="none"
        fillRule="evenodd"
      >
        <g strokeWidth={3}>
          <path
            d="M24.5 80.318l17.492-10.815.42-.003.65-.005C61.603 69.195 76.5 54.068 76.5 35.5c0-18.778-15.222-34-34-34s-34 15.222-34 34c0 11.58 5.832 22.164 15.324 28.416l.675.445v15.957z"
            stroke="#97A1FF"
          />
          <path
            d="M42.72 25.94c-3.007 0-5.22-1.973-5.22-4.7 0-2.79 2.118-4.74 5.22-4.74 3.073 0 5.22 1.96 5.22 4.74 0 2.727-2.213 4.7-5.22 4.7zm1.16 30h-2.32c-2.068 0-3.42-1.352-3.42-3.42V35.8c0-2.068 1.352-3.42 3.42-3.42h2.32c2.068 0 3.46 1.35 3.46 3.42v16.72c0 2.07-1.392 3.42-3.46 3.42z"
            stroke="#FFF"
            fill="#FFF"
          />
        </g>
        <path d="M0 0h84v84H0z" />
      </g>
    </svg>
  );
}

export default SvgInfobubble;
