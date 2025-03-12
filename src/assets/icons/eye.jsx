import * as React from "react";
const Eye = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#999" d="M12.6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path
      fill="#999"
      fillRule="evenodd"
      d="M1.923 11.447C3.41 6.976 7.628 3.75 12.6 3.75c4.97 0 9.186 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.704 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.85 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Eye;
