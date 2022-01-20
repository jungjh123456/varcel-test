import React from "react";
import Image from "next/image";
import BigButton from "../asset/BigButton";
import { myLoader } from "../asset/myLoader";
import { BrainDevelopSection7wrap } from "../brainDevelop/brainDevelopStyle";

const HomeGoSection7 = () => {
  return (
    <BrainDevelopSection7wrap>
      <div className="container">
        <Image loader={myLoader} src="/imgs/couponWhite.png" layout="responsive" objectFit="contain" alt="me" width="320" height="318" />
        <div className="btn-group">
          <BigButton>할인받고 체험수업 신청하기</BigButton>
        </div>
      </div>
    </BrainDevelopSection7wrap>
  );
};

export default HomeGoSection7;
