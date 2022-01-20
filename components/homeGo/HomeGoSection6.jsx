import React from "react";

import Image from "next/image";
import { BrainDevelopSection6wrap } from "../brainDevelop/brainDevelopStyle";
import { myLoader } from "../asset/myLoader";
import Emoticon5 from "../asset/Emoticon5";
import Emoticon6 from "../asset/Emoticon6";
import Emoticon7 from "../asset/Emoticon7";
import Emoticon8 from "../asset/Emoticon8";

const HomeGoSection6 = () => {
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
            <span>수업 전, 요구사항을 파악해요</span>
          </h3>
          <div>
            <span>방문 전, 전화면담을 통해 부모님의 요구사항을</span>
            <span>파악하고 치료 수업을 준비해요.</span>
          </div>
          <Image loader={myLoader} src="/imgs/studyWayImgHome.png" layout="responsive" objectFit="contain" alt="me" width="360" height="260" />
        </div>
        <div className="study_way">
          <h3>
            <span>
              <Emoticon6 />
            </span>
            <span>부모님 1:1 상담 및 커리큘럼</span>
          </h3>
          <div>
            <span>부모님과 대면면담과 구조화된 발달평가를</span>
            <span>통해 맞춤형 치료 커리큘럼을 계획해요.</span>
          </div>
          <Image loader={myLoader} src="/imgs/studyWayImg2.png" layout="responsive" objectFit="contain" alt="me" width="360" height="260" />
        </div>
        <div className="study_way">
          <h3>
            <span>
              <Emoticon7 />
            </span>
            <span>즐거운 홈티칭 치료수업</span>
          </h3>
          <div>
            <span>똑똑쌤의 정해진 수업계획에 따라</span>
            <span>매주 치료수업을 진행해요.</span>
          </div>
          <Image loader={myLoader} src="/imgs/studyWayImgHome2.png" layout="responsive" objectFit="contain" alt="me" width="360" height="260" />
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

export default HomeGoSection6;
