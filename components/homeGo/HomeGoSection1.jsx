import React from "react";
import { SupportSection1Wrap } from "../support/supportStyle";
import { myLoader } from "../asset/myLoader";
import Image from "next/image";
import { BrainDevelopSection1Wrap } from "../brainDevelop/brainDevelopStyle";
import { HomeGoSection1Wrap } from "./homeGoStyle";

const HomeGoSection1 = ({ applicationBtn }) => {
  return (
    <HomeGoSection1Wrap>
      <div className="container">
        <div className="piting">
          <h1>
            <span>찾아가는 아동 발달치료,</span>
            <span>똑똑쌤을 집에서 만나세요!.</span>
          </h1>

          <span>맞춤형 아동 발달치료 프로그램</span>
        </div>

        <div className="btn-group">
          <Image className="img-wrap" loader={myLoader} objectFit="contain" layout="responsive" src="/imgs/homesection1.png" alt="me" width="360" height="386" />
          <div className="btn">
            <button onClick={applicationBtn}>지금 바로 똑똑쌤을 찾아보세요</button>
          </div>
        </div>
      </div>
    </HomeGoSection1Wrap>
  );
};

export default HomeGoSection1;
