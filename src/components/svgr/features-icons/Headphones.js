import * as React from "react";

function SvgHeadphones(props) {
  return (
    <svg
        width="84px"
        height="89px"
        viewBox="0 0 84 89"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <defs>
        <filter
          x="-23.3%"
          y="-25%"
          width="146.7%"
          height="147.4%"
          filterUnits="objectBoundingBox"
          id="headphones_svg__a"
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
        filter="url(#headphones_svg__a)"
        transform="translate(0 2)"
        strokeWidth={3}
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M48.5 72c11.598 0 21-9.402 21-21M69 31.5C69 14.103 54.897 0 37.5 0S6 14.103 6 31.5"
          stroke="#97A1FF"
        />
        <rect
          stroke="#FFF"
          fill="#FFF"
          x={64.5}
          y={32.5}
          width={9}
          height={20}
          rx={4.5}
        />
        <rect
          stroke="#FFF"
          fill="#FFF"
          transform="rotate(90 38 71.5)"
          x={33.5}
          y={62.5}
          width={9}
          height={18}
          rx={4.5}
        />
        <rect
          stroke="#FFF"
          fill="#FFF"
          x={1.5}
          y={32.5}
          width={9}
          height={20}
          rx={4.5}
        />
      </g>
    </svg>
  );
}

export default SvgHeadphones;
