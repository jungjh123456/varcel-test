import React from "react";
import { Mainsection1Wrap } from "../main/mainComponentStyle";
import { myLoader } from "../asset/myLoader";
import Image from "next/image";
import { Program1Wrap, ProgramWrap } from "./ProgramStyle";
const ProgramSection1 = ({ applicationBtn }) => {
  return (
    <ProgramWrap>
      <div className="container">
        <div className="text_header">
          <span>
            영유아 <span>발달자극</span>부터
          </span>
          <span>
            아동 <span>발달치료 교육</span>까지,
          </span>
        </div>
        <div className="piting">
          <h1>
            <span>
              이제 <span>똑똑쌤과 홈티칭</span>하세요!
            </span>
          </h1>
        </div>

        <div className="btn-group">
          <Image loader={myLoader} layout="responsive" objectFit="cover" src="/imgs/programimg.png" alt="me" width="360px" height="386px" />

          <div className="btn">
            <button onClick={applicationBtn}>우리아이 맞춤 발달 프로그램 찾기</button>
          </div>
        </div>
      </div>
    </ProgramWrap>
  );
};

export default ProgramSection1;
