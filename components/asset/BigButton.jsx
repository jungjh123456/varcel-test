import React from "react";
import { BigButtonWrap } from "./BigButtonStyle";

const BigButton = (props) => {
  return (
    <BigButtonWrap onClick={props.onClick} name={props.name} {...props}>
      {props.children}
    </BigButtonWrap>
  );
};

export default BigButton;
