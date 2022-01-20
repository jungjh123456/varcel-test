import React from "react";
import Dropdown from "../asset/Dropdown";
import { SupportSection4Wrap } from "./supportStyle";

const SupportSection4 = () => {
  const list = [
    { name: "PRE_MATCHING", label: "일정조율 전" },
    { name: "PERSONNEL_NEEDED", label: "구인공고" },
  ];
  return (
    <SupportSection4Wrap>
      <div className="container">
        <h2>
          <span>지금 바로 똑똑쌤의</span>
          <span>
            <span>평균 예상수익</span>을 확인해보세요.
          </span>
        </h2>
        <div className="drop_down-wrap">
          <div>
            <span>프로그램을 선택해보세요.</span>
            <div>
              <Dropdown
                //   onClick={studyBornChange}
                // ref={dropDownGenderRef}
                Zindex={200}
                //   onChange={checkDropDownChange}
                list={list}
                name="customer_type"
                id="customer_type"
                //   state={checkStudyState?.customer_type ? true : false}
              >
                똑똑쌤 프로그램
              </Dropdown>
            </div>
          </div>
          <div>
            <span>프로그램을 선택해보세요.</span>
            <div>
              <Dropdown
                //   onClick={studyBornChange}
                // ref={dropDownGenderRef}
                Zindex={10}
                //   onChange={checkDropDownChange}
                list={list}
                name="program"
                id="program"
                //   state={checkStudyState?.customer_type ? true : false}
              >
                똑똑쌤 프로그램
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="cost_avail">
          <span>예상금액</span>
          <div className="cost">
            <span>48000원</span>
          </div>
          <div className="text_subscription">
            <span>기간,등급에 따라 실제수익은 차이가 있으며,</span>
            <span>구체적인 정산내역은 미팅 전 안내드립니다.</span>
          </div>
        </div>
      </div>
    </SupportSection4Wrap>
  );
};

export default SupportSection4;
