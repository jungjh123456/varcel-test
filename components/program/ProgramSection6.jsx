import React from "react";
import { myLoader } from "../asset/myLoader";
import Image from "next/image";
import BigButton from "../asset/BigButton";
import { Program6Wrap } from "./ProgramStyle";
const ProgramSection6 = () => {
  return (
    <Program6Wrap>
      <div className="container">
        <div className="img-wrap">
          <Image loader={myLoader} src="/imgs/eventImg.png" layout="responsive" objectFit="contain" alt="me" width="320" height="355" />
        </div>
        <div className="btn-group">
          <BigButton>할인받고 체험수업 신청하기</BigButton>
        </div>
      </div>
    </Program6Wrap>
  );
};

export default ProgramSection6;
