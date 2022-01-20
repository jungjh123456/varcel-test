import React from "react";
import Dropdown from "../asset/Dropdown";
import { StudyPaySection1Wrap } from "./studyPayStyle";

const StudyPaySection1 = ({ changeList, checkProgram }) => {
  console.log(changeList);
  const list = [{ label: "영유아 발달자극 프로그램" }, { label: "아동 발달치료 프로그램" }];
  return (
    <StudyPaySection1Wrap>
      <div className="container">
        <h1>똑똑쌤 수업료</h1>

        <div className="drop_wrap">
          <div>
            <span>희망하는 프로그램 유형을 선택하세요</span>
            <Dropdown state={checkProgram} onClick={changeList} Zindex={100} id="program" list={list}>
              {checkProgram}
            </Dropdown>
          </div>
          <div>
            <span>희망하는 세부 프로그램을 선택하세요</span>
            <Dropdown>언어 발달자극 프로그램</Dropdown>
          </div>
        </div>
      </div>
    </StudyPaySection1Wrap>
  );
};

export default React.memo(StudyPaySection1);
