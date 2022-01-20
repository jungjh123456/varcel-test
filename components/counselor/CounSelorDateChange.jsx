import React from "react";
import { CounSelorStudyDateContainerWrap } from "../../containers/counselor/counselorStyle";
import ApplicationHeader from "../asset/ApplicationHeader";
import CheckTable from "../asset/CheckTable";
import MainHeader from "../asset/MainHeader";

const CounSelorDateChange = () => {
  return (
    <CounSelorStudyDateContainerWrap>
      <MainHeader message={"일정관리 1/3"} white notoggle applied />
      <div className="messag-wrap">
        <span>일정 업데이트 7일을 경과</span>하였습니다.
      </div>
      <div className="container">
        <h1>수업일정을 선택해주세요.</h1>
        <div className="text-wrap">
          <span>가능한 요일 및 시간대를 선택해주세요.</span>
          <span>원활한 일정조율을 위해 지속적으로 업데이트 해주세요.</span>
        </div>
        <div className="date_description">
          <span>시간은 수업을 시작할 수 있는 시간을 의미합니다.</span>
          <CheckTable />
        </div>
        <div className="description">
          <div>
            <span>선택해주신 일정을 바탕으로 매칭을 시도할 시,</span>
            <span>운영팀에서 참고해야할 점이 있다면 기재해주세요.</span>
          </div>
          <textarea name="" placeholder="예) 목요일 오후 6시 이후, 센터에서 비정기적인 회의가 있어 변동이 있을 수 있습니다." id="" cols="30" rows="10"></textarea>
        </div>
        <div className="btn-group">
          <button>기존 일정과 동일해요</button>
          <button>업데이트된 일정 저장하기</button>
        </div>
      </div>
    </CounSelorStudyDateContainerWrap>
  );
};

export default CounSelorDateChange;
