import React from "react";
import BigButton from "../asset/BigButton";
import { RegisterSectionWrap } from "./locationStyle";

const RegisterInfo = () => {
  return (
    <RegisterSectionWrap>
      <div className="container">
        <h2>예약대기 정보를 작성해주세요</h2>
        <div className="text-wrap">
          <span>우리동네가 방문수업이 가능한 지역인지</span>
          <span>아래에서 확인해보세요.</span>
        </div>
        <div className="input-wrap">
          <span>양육자 성함</span>
          <div>
            <input type="text" placeholder="홍길동" />
          </div>
        </div>
        <div className="input-wrap">
          <span>양육자 전화번호</span>
          <div>
            <input type="text" placeholder="01023682072" />
          </div>
        </div>
        <div className="input-wrap">
          <span>거주하는 지역</span>
          <div>
            <input type="text" placeholder="서울시 성복구 종암동" />
          </div>
        </div>
        <div className="btn-group">
          <BigButton disabled>예약대기 알림받기</BigButton>
        </div>
      </div>
    </RegisterSectionWrap>
  );
};

export default RegisterInfo;
