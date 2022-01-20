import React from "react";
import { ProgressWrap } from "./progressStyle";

const Progress = ({ info, param, percent, prevPercent }) => {
  return (
    <ProgressWrap info={info} param={param} prevPercent={prevPercent} percent={percent}>
      <div data-percent={percent}></div>
      <span>{Math.floor(percent)}%</span>
    </ProgressWrap>
  );
};

export default Progress;
