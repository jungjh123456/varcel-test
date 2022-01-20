import React from "react";
import BulbIcon from "../asset/BulbIcon";
import { Program2Wrap } from "./ProgramStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
const ProgramSection2 = () => {
  return (
    <Program2Wrap>
      <div className="container">
        <h1>
          <span>
            이제 <span>똑똑쌤과 홈티칭</span> 하세요!
          </span>
        </h1>
        <div className="home_piting-wrap">
          <span>더 나은 발달치료교육을 위해 아동발달 전문가가</span>
          <span>아이들에게 한걸음 더 다가갑니다.</span>
        </div>
        <div className="home-card">
          <div className="card1 yello">
            <div className="number">
              <span>1</span>
            </div>
            <h3>아이들이 빨리 수업에 적응해요</h3>
            <div>
              <span>친숙한 환경에서의 발달교육을 통해 아이는 수업에 금새 적응하고, 선생님은 효과적으로 아이 발달과정에 개입해요!</span>
            </div>
            <Image loader={myLoader} src="/imgs/oneImg.png" layout="responsive" alt="me" width="360" height="240" />
          </div>
          <div className="card1 yello">
            <div className="number">
              <span>2</span>
            </div>
            <h3>부모님도 마음이 편해요</h3>
            <div>
              <span>복직, 맞벌이 등으로 아이와 함께 주기적으로 센터를 방문하는 것이 힘드시지 않았나요? 이젠 검증된 똑똑쌤이 집으로 찾아가니까, 걱정을 덜 수 있어요!</span>
            </div>
            <Image loader={myLoader} src="/imgs/twoImg.png" layout="responsive" alt="me" width="360" height="240" />
          </div>
          <div className="card1 yello">
            <div className="number">
              <span>3</span>
            </div>
            <h3> 더 나은 발달교육을 제공해요</h3>
            <div>
              <span>똑똑쌤의 부모님 코칭을 통해 가정의 변화로부터 아이의 건강한 발달과 성장을 유도해요</span>
            </div>
            <Image loader={myLoader} src="/imgs/treeImg.png" layout="responsive" alt="me" width="360" height="240" />
          </div>
        </div>
      </div>
    </Program2Wrap>
  );
};

export default ProgramSection2;
