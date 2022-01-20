import React from "react";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { EssetMainProgramWrap } from "./ProgramStyle";

const EssetMainProgram = () => {
  return (
    <EssetMainProgramWrap>
      <div className="container">
        <h2>
          <span>똑똑한 부모님의</span>
          <span>똑똑쌤 100% 활용법</span>
        </h2>
        <div className="card_group">
          <div className="card">
            <h3>홈티칭 교육법 배우기</h3>
            <div className="text_wrap">
              <span>수업과 부모님 상담코칭을 통해 가정 내 교구로 할 수 있는 발달놀이법과 아동지도 방법을 배워요!</span>
            </div>
            <div className="img-wrap">
              <Image loader={myLoader} layout="responsive" objectFit="cover" src="/imgs/DockProgramimg2.png" alt="me" width="360px" height="360px" />
            </div>
          </div>
          <div className="card">
            <h3>홈티칭 교육법 배우기</h3>
            <div className="text_wrap">
              <span>수업과 부모님 상담코칭을 통해 가정 내 교구로 할 수 있는 발달놀이법과 아동지도 방법을 배워요!</span>
            </div>
            <div className="img-wrap">
              <Image loader={myLoader} layout="responsive" objectFit="cover" src="/imgs/DockProgramimg3.png" alt="me" width="360px" height="360px" />
            </div>
          </div>
          <div className="card">
            <h3>홈티칭 교육법 배우기</h3>
            <div className="text_wrap">
              <span>수업과 부모님 상담코칭을 통해 가정 내 교구로 할 수 있는 발달놀이법과 아동지도 방법을 배워요!</span>
            </div>
            <div className="img-wrap">
              <Image loader={myLoader} layout="responsive" objectFit="cover" src="/imgs/DockProgramimg1.png" alt="me" width="360px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </EssetMainProgramWrap>
  );
};

export default EssetMainProgram;
