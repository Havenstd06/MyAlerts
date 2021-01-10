import * as React from "react";

function SvgHourglass(props) {
  return (
    <svg
        width="81"
        height="82"
        viewBox="0 0 81 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <ellipse cx={40.5} cy={41} rx={40.5} ry={41} fill="#000" />
      <path
        d="M50.864 33.09h0l-5.952 7.41 5.952 7.41h0a4.289 4.289 0 01.556 4.44c-.663 1.468-2.11 2.45-3.75 2.45l3.194-21.71zm0 0a4.289 4.289 0 00.556-4.44c-.663-1.468-2.11-2.45-3.75-2.45 0 0 0 0 0 0s0 0 0 0H34.33s0 0 0 0 0 0 0 0c-1.64 0-3.087.982-3.75 2.45a4.289 4.289 0 00.556 4.44h0m19.728 0H31.136m0 0l5.952 7.41-5.952 7.41h0m0-14.82v14.82m0 0a4.289 4.289 0 00-.556 4.44m.556-4.44l-.556 4.44m0 0c.663 1.468 2.11 2.45 3.75 2.45m-3.75-2.45l3.75 2.45m0 0s0 0 0 0m0 0h0m0 0h13.34-13.34z"
        stroke="#97A1FF"
        strokeWidth={3.6}
      />
    </svg>
  );
}

export default SvgHourglass;
