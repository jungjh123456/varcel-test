import React from "react";

import Image from "next/image";
import { myLoader } from "../asset/myLoader";

import { BrainDevelopSection6wrap } from "./brainDevelopStyle";
import Emoticon1 from "../asset/Emoticon1";
import Emoticon5 from "../asset/Emoticon5";
import Emoticon3 from "../asset/Emoticon3";
import Emoticon2 from "../asset/Emoticon2";
import Emoticon6 from "../asset/Emoticon6";
import Emoticon7 from "../asset/Emoticon7";
import Emoticon8 from "../asset/Emoticon8";
const BrainDevelopSection6 = () => {
  return (
    <BrainDevelopSection6wrap>
      {" "}
      <div className="container">
        <h2>
          <span>똑똑!</span>
          <span>수업은 어떻게 진행되나요?</span>
        </h2>
        <div className="study_way">
          <h3>
            <span>
              <Emoticon5 />
            </span>
            <span>수업 전, 아이의 발달단계를 알아가요.</span>
          </h3>
          <div>
            <span>수업 전, 발달검사와 놀이평가를 통해 아이의 성향</span>
            <span>과 발달 수준을 평가해요.</span>
          </div>
          <Image loader={myLoader} src="/imgs/studyWayImg1.png" layout="responsive" objectFit="contain" alt="me" width="360" height="260" />
        </div>
        <div className="study_way">
          <h3>
            <span>
              <Emoticon6 />
            </span>
            <span>똑똑쌤의 부모님 상담코칭</span>
          </h3>
          <div>
            <span>수업 내용을 정리하고, 부모님이 </span>
            <span>집에서 꼭 해주셔야할 자극방법을 알려드려요.</span>
          </div>
          <Image loader={myLoader} src="/imgs/studyWayImg2.png" layout="responsive" objectFit="contain" alt="me" width="360" height="260" />
        </div>
        <div className="study_way">
          <h3>
            <span>
              <Emoticon7 />
            </span>
            <span>즐거운 홈티칭 수업</span>
          </h3>
          <div>
            <span>자극이 필요한 발달영역을 중점으로 </span>
            <span>놀이수업을 진행해요.</span>
          </div>
          <Image loader={myLoader} src="/imgs/studyWayImg3.png" layout="responsive" objectFit="contain" alt="me" width="360" height="260" />
        </div>
        <div className="study_way">
          <h3>
            <span>
              <Emoticon8 />
            </span>
            <span>똑똑쌤 알림노트</span>
          </h3>
          <div>
            <span>똑똑쌤이 정리한 수업내용과 부모님에게 전하는</span>
            <span>홈티칭 활동을 카카오 알림으로 전달드려요!</span>
          </div>
          <Image loader={myLoader} src="/imgs/studyWayImg4.png" layout="responsive" objectFit="contain" alt="me" width="360" height="318" />
        </div>
      </div>
    </BrainDevelopSection6wrap>
  );
};

export default BrainDevelopSection6;
