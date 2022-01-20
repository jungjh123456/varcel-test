import React from "react";
import ApplicationHeader from "../asset/ApplicationHeader";
import CloseIcon from "../asset/CloseIcon";
import Dropdown from "../asset/Dropdown";
import Input from "../asset/Input";
import MainHeader from "../asset/MainHeader";
import { CounSelorLocationWrap } from "./CounselorStyle";

const CounSelorLocation = () => {
  const list = [{}];
  return (
    <CounSelorLocationWrap>
      <MainHeader message={"일정관리 2/3"} white applied notoggle />
      <div className="messag-wrap">
        <span>일정 업데이트 7일을 경과</span>하였습니다.
      </div>
      <div className="container">
        <h1>수업일정을 선택해주세요.</h1>
        <div className="text-wrap">
          <span>가능한 요일 및 시간대를 선택해주세요.</span>
          <span>원활한 일정조율을 위해 지속적으로 업데이트 해주세요.</span>
        </div>
        <div className="location_list">
          <span>수업 가능 지역</span>
          <div className="location_card">
            <div>
              <span>서울시 - 강남구</span>
            </div>
            <CloseIcon />
          </div>
          <div className="location_card">
            <div>
              <span>서울시 - 강남구</span>
            </div>
            <CloseIcon />
          </div>
        </div>
        <div className="add_list">
          <span>추가지역 선택</span>
          <Dropdown
            //   onClick={studyBornChange}
            // ref={dropDownGenderRef}
            Zindex={200}
            //   onChange={checkDropDownChange}
            list={list}
            name="location"
            id="location"
            //   state={checkStudyState?.customer_type ? true : false}
          >
            시/도
          </Dropdown>
          <Input type="text" placeholder="구 단위로 입력해주세요." />
          <div className="add_btn">
            <button>추가하기</button>
          </div>
        </div>
        <div className="btn-group">
          <button>기존 지역과 동일해요</button>
          <button>업데이트된 일정 저장하기</button>
        </div>
      </div>
    </CounSelorLocationWrap>
  );
};

export default CounSelorLocation;
