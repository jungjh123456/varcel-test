import React from "react";
import { RadioInputWrap } from "./assetStyle";

const RadioInput = (props) => {
  return (
    <RadioInputWrap>
      <input checked={props.checked} onChange={props.onChange} type={props.type} value={props.value} name={props.name} id={props.id} />
      <label htmlFor={props.id}>
        <div></div>
        <span>{props.label}</span>
      </label>
    </RadioInputWrap>
  );
};

export default RadioInput;
