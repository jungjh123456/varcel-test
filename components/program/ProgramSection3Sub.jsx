import React from "react";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import Emoticon1 from "../asset/Emoticon1";
import Emoticon2 from "../asset/Emoticon2";
import Emoticon3 from "../asset/Emoticon3";
import Emoticon4 from "../asset/Emoticon4";
import { ProgramSection3SubWrap } from "./ProgramStyle";
import HandleIcon from "../asset/HandleIcon";
import JunguIcon from "../asset/JunguIcon";
import Message from "../asset/Message";
import NoteIcon from "../asset/NoteIcon";
const ProgramSection3Sub = () => {
  return (
    <ProgramSection3SubWrap>
      <div className="container">
        <h1>
          <span>부모님이 똑똑쌤이 될 수 있도록,</span>
          <span>똑똑쌤이 함께합니다.</span>
        </h1>

        <div className="list_wrap">
          <div>
            <div>
              <span>교육 1</span>
              <div>
                <span>부모님도 가정에서</span>
                <span>배우는 홈티칭</span>
              </div>
            </div>
            <div>
              <HandleIcon />
            </div>
          </div>
          <div>
            <div>
              <span>교육 2</span>
              <div>
                <span>발달 촉진을 위한</span>
                <span>양육환경 코칭</span>
              </div>
            </div>
            <div>
              <JunguIcon />
            </div>
          </div>
          <div>
            <div>
              <span>교육 3</span>
              <div>
                <span>아이의 행동들을</span>
                <span>중재하는 노하우 교육</span>
              </div>
            </div>
            <div>
              <Message />
            </div>
          </div>
          <div>
            <div>
              <span>교육 4</span>
              <div>
                <span>매주 부모님께 전달되는</span>
                <span>알림노트로 핵심 콕콕!</span>
              </div>
            </div>
            <div>
              <NoteIcon />
            </div>
          </div>
        </div>
      </div>
    </ProgramSection3SubWrap>
  );
};

export default ProgramSection3Sub;
