import * as React from "react";

function SvgPhone(props) {
  return (
    <svg
      width="64px"
      height="93px"
      viewBox="0 0 64 93"
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
          id="phone_svg__a"
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
        filter="url(#phone_svg__a)"
        transform="translate(-19)"
        fill="none"
        fillRule="evenodd"
      >
        <g transform="translate(19)">
          <path
            d="M33 0c6.843 0 12.452 5.288 12.962 12h-3.011c-.493-4.962-4.613-8.857-9.671-8.996L33 3H13c-5.43 0-9.848 4.327-9.996 9.72L3 13v58c0 5.43 4.327 9.848 9.72 9.996L13 81h20c5.43 0 9.848-4.327 9.996-9.72L43 71V40h3v31c0 7.18-5.82 13-13 13H13C5.82 84 0 78.18 0 71V13C0 5.82 5.82 0 13 0h20z"
            fill="#97A1FF"
            fillRule="nonzero"
          />
          <circle
            stroke="#FFF"
            strokeWidth={3}
            fill="#FFF"
            cx={39}
            cy={26}
            r={14.5}
          />
          <path
            d="M39.366 28.156c.482 0 .775-.236.838-.709l.733-7.246v-.453c0-.472-.272-.748-.796-.748H37.86c-.503 0-.796.276-.796.748v.453l.733 7.246c.063.473.356.71.858.71h.712zM38.99 33c1.13 0 2.01-.729 2.01-1.713 0-.985-.88-1.753-2.01-1.753-1.152 0-1.99.768-1.99 1.753 0 .984.838 1.713 1.99 1.713z"
            fill="#373659"
            fillRule="nonzero"
          />
        </g>
        <path d="M0 0h84v84H0z" />
      </g>
    </svg>
  );
}

export default SvgPhone;
