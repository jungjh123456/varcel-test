import React from "react";
import BigButton from "../asset/BigButton";
import DesCriptIcon from "../asset/DesCriptIcon";
import { SupportSection7Wrap } from "./supportStyle";

const SupportSection7 = ({ goAppliedTeacher }) => {
  return (
    <SupportSection7Wrap>
      <div className="container">
        <h2>
          <span>똑똑쌤을 통해 발달치료사의</span>
          <span>
            <span>커리어를 확장</span>
            시켜보세요.
          </span>
        </h2>
        <div className="text-teacher">
          <span>똑똑쌤 지원자격을 확인해보세요!</span>
        </div>
        <div className="icon-wrap">
          <DesCriptIcon />
        </div>
        <div className="descript-wrap">
          <div>
            <span>전문 발달교육 및 치료경력 3년 이상 검증</span>
          </div>
          <div>
            <span>아동 발달재활 관련 공인자격증 취득 검증</span>
          </div>
          <div>
            <span>아동 발달재활 관련 학위 취득 검증</span>
          </div>
        </div>
        <div className="btn-group">
          <BigButton onClick={goAppliedTeacher}>똑똑쌤 간편 지원하기</BigButton>
        </div>
      </div>
    </SupportSection7Wrap>
  );
};

export default SupportSection7;
