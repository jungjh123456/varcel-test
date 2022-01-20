import React from "react";
import { CheckInputWrap } from "./assetStyle";

const CheckInput = (props) => {
  return (
    <CheckInputWrap>
      <input onChange={props?.onChange} checked={props?.checked} name={props?.name} value={props?.value} type="checkbox" id={props.id} />
      <label htmlFor={props.id}>
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#6100FF" />
          </svg>
        </div>

        <span>{props.value}</span>
      </label>
    </CheckInputWrap>
  );
};

export default CheckInput;
