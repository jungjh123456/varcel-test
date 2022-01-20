import React from "react";
import { Program3Wrap } from "../program/ProgramStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { BrainDevelopSection2Wrap } from "./brainDevelopStyle";
const BrainDevelopSection2 = () => {
  return (
    <BrainDevelopSection2Wrap>
      <div className="container">
        <h2>
          <span>생후 16 - 40개월</span>
          <span>
            <span>영유아 언어폭발기</span>
          </span>
        </h2>
        <div className="text_gae">
          <span>
            생후 개월 수에 맞는 <span>적절한 언어놀이 발달</span>을 통해
          </span>
          <span>
            우리아이 <span>두뇌발달의 기초를 튼튼히</span> 해보세요!
          </span>
        </div>
        <div className="imgwrap">
          <Image loader={myLoader} src="/imgs/progressBrain.png" layout="responsive" objectFit="contain" alt="me" width="320" height="320" />
        </div>
      </div>
    </BrainDevelopSection2Wrap>
  );
};

export default BrainDevelopSection2;
