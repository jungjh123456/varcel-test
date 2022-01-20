import React from "react";
import { SupportSection1Wrap } from "../support/supportStyle";
import { myLoader } from "../asset/myLoader";
import Image from "next/image";
import { BrainDevelopSection1Wrap } from "./brainDevelopStyle";
const BrainDevelopSection1 = ({ applicationBtn }) => {
  return (
    <BrainDevelopSection1Wrap>
      <div className="container">
        <div className="piting">
          <h1>
            <span>두뇌발달의 핵심시기,</span>
            <span>발달자극은 똑똑쌤과 함께.</span>
          </h1>

          <span>맞춤형 영유아 아동발달자극 수업</span>
        </div>

        <div className="btn-group">
          <Image loader={myLoader} objectFit="contain" layout="responsive" src="/imgs/babyImg2.png" alt="me" width="360" height="386" />

          <div className="btn">
            <button onClick={applicationBtn}>지금 바로 똑똑쌤을 찾아보세요</button>
          </div>
        </div>
      </div>
    </BrainDevelopSection1Wrap>
  );
};

export default BrainDevelopSection1;
