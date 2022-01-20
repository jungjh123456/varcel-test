import React from "react";
import { MainSectionNew9Wrap } from "../main/mainComponentStyle";
import StodySlick from "../main/StodySlick";
import DockStodySlick from "./DockStodySlick";
import { DockTeacherStoryWrap } from "./dockTeacherStyle";

const DockTeacherStory = () => {
  return (
    <DockTeacherStoryWrap>
      <div className="container">
        <h1>
          <span>똑똑쌤</span>
          <span>이야기를 만나보세요.</span>
        </h1>
        <div className="children_wrap">
          <span>우리아이의 발달교육과 치료에 관련된</span>
          <span>유익한 정보를 찾아보세요!</span>
        </div>
        {/* <div className="slick_list"> */}
        <div className="slick_list">
          <DockStodySlick />
        </div>
        {/* </div> */}
      </div>
    </DockTeacherStoryWrap>
  );
};

export default DockTeacherStory;
