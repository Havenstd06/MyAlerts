import * as React from "react";

function SvgMoneybag(props) {
  return (
    <svg
        width="76px"
        height="91px"
        viewBox="0 0 76 91"
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
          id="moneybag_svg__a"
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
        filter="url(#moneybag_svg__a)"
        transform="translate(-9 -1)"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M33.9 22.009L12.785 60.182c-3.672 6.639-1.497 15.13 4.86 18.965a12.86 12.86 0 006.649 1.862h36.412c2.295 0 4.551-.62 6.549-1.802 6.388-3.777 8.634-12.248 5.018-18.92l-20.75-38.278H33.9z"
          stroke="#97A1FF"
          strokeWidth={3}
          strokeLinejoin="round"
        />
        <path
          d="M33.9 22.009L23.597 5.027c9.593 4.857 16.802 5.852 21.625 2.986 4.824-2.866 10.384-4.67 16.68-5.412L51.521 22.01H33.9z"
          stroke="#97A1FF"
          strokeWidth={3}
          strokeLinejoin="round"
        />
        <path
          d="M43.14 70.64c.52 0 .8-.28.8-.8V67.2c5-.44 8.88-3.2 8.88-8.04-.08-3.4-2.12-6.16-7.4-7.92l-1.48-.52v-6.04c1.24.28 2.08 1 2.56 2.16.28.6.68.8 1.28.64l3.2-.96c.64-.2.92-.64.64-1.28-1.24-3.2-3.88-5.28-7.68-5.64v-2.8c0-.52-.28-.8-.8-.8h-.68c-.52 0-.8.28-.8.8v2.76c-4.88.36-8.64 3.36-8.64 8 .04 4.2 4.12 6.64 7.24 7.64l1.4.52v6.52c-2.16-.2-3.64-1.32-4.32-2.92-.28-.6-.68-.88-1.28-.76l-3.24.8c-.64.16-.96.6-.76 1.24 1.08 3.88 4.6 6.4 9.6 6.64v2.6c0 .52.28.8.8.8h.68zm-1.48-20.76l-.24-.12c-1.96-.8-2.24-1.76-2.24-2.6 0-1.44 1.08-2.28 2.48-2.56v5.28zm2.28 12.28v-5.6l.24.12c1.64.64 2.48 1.52 2.48 2.72 0 1.44-1 2.4-2.72 2.76z"
          fill="#FFF"
        />
        <path d="M0 0h84v84H0z" />
      </g>
    </svg>
  );
}

export default SvgMoneybag;
