import React from "react";
import SectionSlick from "../main/SectionSlick";
import { ComunitySection1Wrap } from "./comunityStyle";
// import SectionSlick from "./SectionSlick";
const ComunitySection1 = () => {
  return (
    <ComunitySection1Wrap>
      <div className="container">
        <h1>
          <span>똑똑쌤</span>스토리
        </h1>
        <div className="children_wrap">
          <span>우리아이의 발달교육과 치료에 관련된</span>
          <span>유익한 정보를 찾아보세요!</span>
        </div>
        {/* <div className="slick_list"> */}
        <div className="slick_list">
          <SectionSlick />
        </div>
        {/* </div> */}
      </div>
    </ComunitySection1Wrap>
  );
};

export default ComunitySection1;
