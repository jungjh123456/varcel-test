import React from "react";
import { Mainsection2Wrap } from "./mainComponentStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";

import Link from "next/link";
import PlusIcon from "../asset/PlusIcon";
const MainSection2 = () => {
  return (
    <Mainsection2Wrap>
      <div className="container">
        <div className="heading-text">
          <h2>
            <span>집에서도 편하게</span>
            <span>
              똑똑쌤과
              <span>홈티칭</span>해요!
            </span>
          </h2>
        </div>
        <div className="homeTeaching_wrap">
          <Image loader={myLoader} src="/imgs/babyNewImg.png" layout="responsive" alt="me" width="320" height="200" />
          <div>
            <Image loader={myLoader} src="/imgs/culicuimg1.png" layout="responsive" objectFit="cover" alt="me" width="320" height="25" />
            <div>
              <span>구조화된 발달검사와 부모님 상담을 통해 아이의 성향과 발달 수준에 맞는 목표와 수업계획을 수립해요! </span>
            </div>
          </div>
        </div>
        <div className="homeTeaching_wrap">
          <Image loader={myLoader} src="/imgs/babyNewImg.png" layout="responsive" alt="me" width="320" height="200" />
          <div>
            <Image loader={myLoader} src="/imgs/culicuimg2.png" layout="responsive" objectFit="cover" alt="me" width="320" height="25" />
            <div>
              <span>아이에게 필요한 발달영역을 중점으로 발달을 촉진하는 1:1 놀이기반 수업 </span>
            </div>
          </div>
        </div>
        <div className="homeTeaching_wrap">
          <Image loader={myLoader} src="/imgs/babyNewImg.png" layout="responsive" alt="me" width="320" height="200" />
          <div>
            <Image loader={myLoader} src="/imgs/culicuimg3.png" layout="responsive" objectFit="cover" alt="me" width="320" height="25" />
            <div>
              <span>집에서 할 수 있는 발달자극 방법을 배우고 우리아이 발달 노트를 통해 성장 과정을 확인해요!</span>
            </div>
          </div>
        </div>
      </div>
    </Mainsection2Wrap>
  );
};

export default MainSection2;
