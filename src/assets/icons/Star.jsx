import * as React from "react";

const Star = ({ fill = "#E60000", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={13}
    fill="none"
    {...props}
  >
    <path
      fill={fill} // Dynamic fill color
      d="m7 0 2.423 3.664 4.234 1.173-2.736 3.437.194 4.39L7 11.122l-4.114 1.54.193-4.389L.343 4.837l4.234-1.173L7 0Z"
    />
  </svg>
);

export default Star;
