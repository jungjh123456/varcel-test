import React from "react";
import CheckIcon from "../asset/CheckIcon";
import { DockTeacherSection4wrap } from "./dockTeacherStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
const DockTeacherSection4 = () => {
  return (
    <DockTeacherSection4wrap>
      <div className="container">
        <h2>
          <span>똑똑쌤의 꼼꼼한</span>
          <span>검증 프로세스</span>
        </h2>
        <Image loader={myLoader} src="/imgs/processImg2.png" objectFit="contain" alt="me" width="360" height="244" />
        <div className="tab_list">
          <input type="radio" id="tab1" name="tab" />
          <label htmlFor="tab1" name="tab">
            <span>📄</span>
            <span>서류검증</span>
          </label>
          <input type="radio" id="tab2" name="tab" />
          <label htmlFor="tab2" name="tab">
            <span>💬</span>
            <span>교육과정</span>
          </label>
          <input type="radio" id="tab3" name="tab" />
          <label htmlFor="tab3" name="tab">
            <span>👀</span>
            <span>사후관리</span>
          </label>
        </div>
        <div className="list_wrap">
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
      </div>
    </DockTeacherSection4wrap>
  );
};

export default DockTeacherSection4;
