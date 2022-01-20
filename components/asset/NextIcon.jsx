import React from "react";

const NextIcon = (props) => {
  return (
    <svg data-program={props.dataprogram} data-status={props.datastatus} data-id={props.id} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        data-program={props.dataprogram}
        data-status={props.datastatus}
        data-id={props.id}
        d="M12 3L10.4138 4.58625L16.6912 10.875H3V13.125H16.6912L10.4138 19.4137L12 21L21 12L12 3Z"
        fill="black"
      />
    </svg>
  );
};

export default NextIcon;
