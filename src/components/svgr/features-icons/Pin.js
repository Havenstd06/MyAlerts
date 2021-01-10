import * as React from "react";

function SvgPin(props) {
  return (
    <svg
       width="71px"
       height="93px"
       viewBox="0 0 71 93"
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
          id="pin_svg__a"
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
        filter="url(#pin_svg__a)"
        transform="translate(-11)"
        fill="none"
        fillRule="evenodd"
      >
        <g transform="translate(11 11)">
          <path
            d="M23.779 57.219L31 65.003l7.386-7.774C50.825 58.018 60 60.75 60 64c0 3.866-12.984 7-29 7S2 67.866 2 64c0-3.264 9.256-6.007 21.779-6.781z"
            fill="#FFF"
          />
          <circle stroke="#97A1FF" strokeWidth={3} cx={31} cy={16} r={14.5} />
          <path
            d="M62 64c0 4.97-13.88 9-31 9l-1.023-.005C13.33 72.838 0 68.871 0 64c0-4.05 9.21-7.474 21.881-8.604l2.664 2.805c-5.571.354-10.642 1.159-14.629 2.316-2.544.739-4.524 1.59-5.782 2.453-.452.31-.777.6-.975.843L3.021 64l.06.085c.186.264.536.59 1.053.945 1.258.863 3.238 1.714 5.782 2.453C15.4 69.075 22.933 70 31 70s15.6-.925 21.084-2.517c2.544-.739 4.524-1.59 5.782-2.453.452-.31.777-.6.975-.843l.137-.187-.06-.085c-.185-.264-.535-.59-1.052-.945-1.258-.863-3.238-1.714-5.782-2.453-4.002-1.162-9.095-1.968-14.69-2.32l2.639-2.809C52.748 56.511 62 59.942 62 64z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </g>
        <path
          d="M42 75.905l.27-.27c1.05-1.055 2.222-2.26 3.484-3.593 3.608-3.81 7.215-7.886 10.578-12.058 3.387-4.2 6.337-8.268 8.724-12.112C69.229 41.15 71.5 35.397 71.5 31 71.5 14.708 58.292 1.5 42 1.5S12.5 14.708 12.5 31c0 4.397 2.271 10.15 6.444 16.872 2.387 3.844 5.337 7.912 8.724 12.112 3.363 4.172 6.97 8.248 10.578 12.058A197.247 197.247 0 0042 75.905z"
          stroke="#97A1FF"
          strokeWidth={3}
        />
        <path d="M0 0h84v84H0z" />
      </g>
    </svg>
  );
}

export default SvgPin;
