import React from "react";

const ArrowIcon = (props) => {
  return (
    <svg
      data-url={props.dataurl}
      data-name={props.dataname}
      data-status={props?.dataStatus}
      data-id={props?.id}
      data-program={props.dataprogram}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path data-name={props.dataname} data-status={props?.dataStatus} data-id={props?.id} d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z" fill="black" />
    </svg>
  );
};

export default ArrowIcon;
