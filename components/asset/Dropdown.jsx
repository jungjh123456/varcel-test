import React from "react";
import DropDownIcon from "./DropDownIcon";
import { DropDownWrap } from "./dropdownStyle";

const Dropdown = (props) => {
  return (
    <DropDownWrap Zindex={props?.Zindex}>
      <input onChange={props.onChange} name={props?.name} type="checkbox" placeholder={props?.placeholder} id={props?.id} disabled={props.disabled ? true : false} />
      <label className={props.state ? "active" : ""} htmlFor={props?.id}>
        <span>{props?.children}</span>
        <DropDownIcon />
      </label>
      <div>
        <div>
          {props?.list?.map((item, i) => {
            return (
              <label htmlFor={props?.id} key={i} onClick={props.onClick} data-name={props.name} name={props?.name} data-set={item.label} data-num={item?.num}>
                {item.label}
              </label>
            );
          })}
        </div>
      </div>
    </DropDownWrap>
  );
};

export default Dropdown;
